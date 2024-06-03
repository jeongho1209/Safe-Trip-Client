import styled from 'styled-components';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { UseDebounce } from '@hooks/useDebounce.tsx';
import { UseTravelDestinationSearch } from '@apis/travel/destination';
import { UseCreateReview } from '@apis/review';
import Swal from 'sweetalert2';
import { SearchType } from '@components/common/search/type.ts';
import { UseCreateTravelInfo } from '@apis/travel/info';
import { ReviewInfo } from '@components/review/reviewInfo.tsx';
import { TravelInfo } from '@components/travelInfo/travelInfo.tsx';

export const TravelDestinationSearch = (searchType: SearchType) => {
    const [text, setText] = useState('');

    const debouncedQuery = UseDebounce(text, 500);

    const { data } = UseTravelDestinationSearch(debouncedQuery);

    const travelDestinationList = data?.travelDestinationList.map((t) => {
        return {
            id: t.id,
            name: t.name,
            engName: t.engName,
            code: t.code,
        };
    });

    const reviewHandler = (travelDestinationId: number) => {
        Swal.fire({
            title: '리뷰를 작성해보세요!',
            html: `
                <input type="text" id="title" placeholder="제목">
                <input type="text" id="content" placeholder="내용">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: '작성하기',
            cancelButtonText: '취소',
            preConfirm: () => {
                const title = (document.getElementById('title') as HTMLInputElement).value;
                const content = (document.getElementById('content') as HTMLInputElement).value;

                return { title, content };
            },
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                const { title, content } = result.value!;
                UseCreateReview(travelDestinationId, {
                    title: title,
                    content: content,
                })
                    .then(() => {
                        Swal.fire({
                            title: '성공!',
                            text: '리뷰 작성에 성공하였습니다.',
                            icon: 'success',
                            confirmButtonText: '확인',
                        });
                    })
                    .catch(() =>
                        Swal.fire({
                            title: '실패!',
                            text: '리뷰 작성에 실패하였습니다.',
                            icon: 'error',
                            confirmButtonText: '확인',
                        }),
                    );
            }
        });
    };

    const travelHandler = (travelDestinationId: number) => {
        Swal.fire({
            title: '여행지에 대한 정보를 작성해보세요!',
            html: `
                <input type="text" id="title" placeholder="제목">
                <input type="text" id="content" placeholder="내용">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: '작성하기',
            cancelButtonText: '취소',
            preConfirm: () => {
                const title = (document.getElementById('title') as HTMLInputElement).value;
                const content = (document.getElementById('content') as HTMLInputElement).value;

                return { title, content };
            },
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                const { title, content } = result.value!;
                UseCreateTravelInfo(travelDestinationId, {
                    title: title,
                    content: content,
                })
                    .then(() => {
                        Swal.fire({
                            title: '성공!',
                            text: '여행지 정보 작성에 성공하였습니다.',
                            icon: 'success',
                            confirmButtonText: '확인',
                        });
                    })
                    .catch(() =>
                        Swal.fire({
                            title: '실패!',
                            text: '여행지 정보 작성에 실패하였습니다.',
                            icon: 'error',
                            confirmButtonText: '확인',
                        }),
                    );
            }
        });
    };

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setText('');
        }
    };

    return (
        <>
            <SearchBox value={text} onChange={onChangeText} onKeyDown={handleEnter}></SearchBox>
            <ValueBox>
                <ul>
                    {travelDestinationList?.map((t) => {
                        return (
                            <MyContainer>
                                <ButtonContainer>
                                    {searchType.isReview && (
                                        <Button onClick={() => reviewHandler(t.id)}>리뷰 작성</Button>
                                    )}
                                    {searchType.isTravel && (
                                        <Button onClick={() => travelHandler(t.id)}>여행 정보 공유 글 작성</Button>
                                    )}
                                </ButtonContainer>
                                <InfoText>{t.name}</InfoText>
                                {searchType.isReview && <ReviewInfo travelDestinationId={t.id}></ReviewInfo>}
                                {searchType.isTravel && <TravelInfo travelDestinationId={t.id}></TravelInfo>}
                            </MyContainer>
                        );
                    })}
                </ul>
            </ValueBox>
        </>
    );
};

const SearchBox = styled.input`
    font-size: x-large;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 850px;
    height: 70px;
    background-color: lightskyblue;
    margin-top: 70px;
    border: none;
    border-radius: 30px;
    padding-left: 20px;
    outline: none;
`;

const ValueBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const MyContainer = styled.li`
    margin-top: 20px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    padding-left: 100px;
`;

const Button = styled.button`
    font-size: 15px;
`;

const InfoText = styled.text`
    font-size: 25px;
`;
