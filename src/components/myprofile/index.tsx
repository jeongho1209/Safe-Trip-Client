import { UseGetMyInfo } from '@apis/user';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { UseDeleteReview, UseUpdateReview } from '@apis/review';
import { UseDeleteTravelInfo, UseUpdateTravelInfo } from '@apis/travel/info';

export const MyProfile = () => {
    const { data } = UseGetMyInfo();

    const myReviewList = data?.reviewList.map((r) => {
        return {
            id: r.id,
            title: r.title,
            content: r.content,
        };
    });

    const myTravelInfoList = data?.travelInfoList.map((t) => {
        return {
            id: t.id,
            title: t.title,
            content: t.content,
            name: t.name,
        };
    });

    const updateReviewHandler = (reviewId: number) => {
        Swal.fire({
            title: '리뷰를 수정해보세요!',
            html: `
                <input type="text" id="title" placeholder="제목">
                <input type="text" id="content" placeholder="내용">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: '수정하기',
            cancelButtonText: '취소',
            preConfirm: () => {
                const title = (document.getElementById('title') as HTMLInputElement).value;
                const content = (document.getElementById('content') as HTMLInputElement).value;

                return { title, content };
            },
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                const { title, content } = result.value!;
                UseUpdateReview(reviewId, {
                    title: title,
                    content: content,
                })
                    .then(() => {
                        Swal.fire({
                            title: '성공!',
                            text: '리뷰 수정에 성공하였습니다.',
                            icon: 'success',
                            confirmButtonText: '확인',
                        });
                    })
                    .catch(() =>
                        Swal.fire({
                            title: '실패!',
                            text: '리뷰 수정에 실패하였습니다.',
                            icon: 'error',
                            confirmButtonText: '확인',
                        }),
                    );
            }
        });
    };

    const deleteReviewHandler = (reviewId: number) => {
        UseDeleteReview(reviewId)
            .then(() =>
                Swal.fire({
                    title: '성공!',
                    text: '리뷰 삭제에 성공하였습니다.',
                    icon: 'success',
                    confirmButtonText: '확인',
                }),
            )
            .catch(() =>
                Swal.fire({
                    title: '실패!',
                    text: '리뷰 삭제에 실패하였습니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                }),
            );
    };

    const updateTravelInfoHandler = (travelInfoId: number) => {
        Swal.fire({
            title: '여행지 정보를 수정해보세요!',
            html: `
                <input type="text" id="title" placeholder="제목">
                <input type="text" id="content" placeholder="내용">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: '수정하기',
            cancelButtonText: '취소',
            preConfirm: () => {
                const title = (document.getElementById('title') as HTMLInputElement).value;
                const content = (document.getElementById('content') as HTMLInputElement).value;

                return { title, content };
            },
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                const { title, content } = result.value!;
                UseUpdateTravelInfo(travelInfoId, {
                    title: title,
                    content: content,
                })
                    .then(() => {
                        Swal.fire({
                            title: '성공!',
                            text: '여행지 정보 수정에 성공하였습니다.',
                            icon: 'success',
                            confirmButtonText: '확인',
                        });
                    })
                    .catch(() =>
                        Swal.fire({
                            title: '실패!',
                            text: '여행지 정보 수정에 실패하였습니다.',
                            icon: 'error',
                            confirmButtonText: '확인',
                        }),
                    );
            }
        });
    };

    const deleteTravelInfoHandler = (travelInfoId: number) => {
        UseDeleteTravelInfo(travelInfoId)
            .then(() =>
                Swal.fire({
                    title: '성공!',
                    text: '여행지 정보 삭제에 성공하였습니다.',
                    icon: 'success',
                    confirmButtonText: '확인',
                }),
            )
            .catch(() =>
                Swal.fire({
                    title: '실패!',
                    text: '여행지 정보 삭제에 실패하였습니다.',
                    icon: 'error',
                    confirmButtonText: '확인',
                }),
            );
    };

    return (
        <>
            <Wrapper>
                <MyContainer>
                    <MainText>내 정보</MainText>
                    <ul>
                        <MyInfoText>아이디 : {data?.accountId}</MyInfoText>
                        <MyInfoText>나이: {data?.age}</MyInfoText>
                    </ul>
                </MyContainer>
                <MyContainer>
                    <MainText>내가 작성한 리뷰들</MainText>
                    <ul>
                        {myReviewList?.map((r) => {
                            return (
                                <TextContainer>
                                    <TitleText>제목 : {r.title}</TitleText>
                                    <ButtonContainer>
                                        <UpdateButton onClick={() => updateReviewHandler(r.id)}>수정</UpdateButton>
                                        <DeleteButton onClick={() => deleteReviewHandler(r.id)}>삭제</DeleteButton>
                                    </ButtonContainer>
                                    <br></br>
                                    <ContentText>내용 : {r.content}</ContentText>
                                </TextContainer>
                            );
                        })}
                    </ul>
                </MyContainer>
                <MyContainer>
                    <MainText>내가 작성한 여행 정보 공유 글들</MainText>
                    <ul>
                        {myTravelInfoList?.map((t) => {
                            return (
                                <TextContainer>
                                    <TitleText>제목 : {t.title}</TitleText>
                                    <br></br>
                                    <TravelInfoText>여행지 : {t.name}</TravelInfoText>
                                    <ButtonContainer>
                                        <UpdateButton onClick={() => updateTravelInfoHandler(t.id)}>수정</UpdateButton>
                                        <DeleteButton onClick={() => deleteTravelInfoHandler(t.id)}>삭제</DeleteButton>
                                    </ButtonContainer>
                                    <br></br>
                                    <ContentText>내용 : {t.content}</ContentText>
                                </TextContainer>
                            );
                        })}
                    </ul>
                </MyContainer>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const MyContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 40vh;
`;

const TextContainer = styled.li`
    padding-top: 20px;
`;

const MainText = styled.text`
    font-size: 40px;
    font-weight: bold;
`;

const MyInfoText = styled.li`
    font-size: 20px;
`;

const TitleText = styled.text`
    font-size: 28px;
`;

const TravelInfoText = styled.text`
    font-size: 25px;
`;

const ContentText = styled.text`
    font-size: 20px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    padding-left: 300px;
`;

const UpdateButton = styled.button`
    width: 40px;
    height: 20px;
`;

const DeleteButton = styled.button`
    width: 40px;
    height: 20px;
`;
