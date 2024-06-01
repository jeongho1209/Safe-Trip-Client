import { UseGetMyInfo } from '@apis/user';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { UseDeleteReview, UseUpdateReview } from '@apis/review';

export const MyProfile = () => {
    const { data } = UseGetMyInfo();

    const myReviewList = data?.reviewList.map((r) => {
        return {
            id: r.id,
            title: r.title,
            content: r.content,
            createdDate: r.createdDate,
            isMine: r.isMine,
            accountId: r.accountId,
        };
    });

    const updateReviewHandler = (travelDestinationId: number) => {
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
                UseUpdateReview(travelDestinationId, {
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

    const deleteReviewHandler = (travelDestinationId: number) => {
        UseDeleteReview(travelDestinationId)
            .then(() => alert('리뷰 삭제 성공!'))
            .catch(() => alert('리뷰 삭제 실패!'));
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
                                        <ReviewUpdateButton onClick={() => updateReviewHandler(r.id)}>
                                            수정
                                        </ReviewUpdateButton>
                                        <ReviewDeleteButton onClick={() => deleteReviewHandler(r.id)}>
                                            삭제
                                        </ReviewDeleteButton>
                                    </ButtonContainer>
                                    <br></br>
                                    <ContentText>내용 : {r.content}</ContentText>
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
    font-size: 25px;
`;

const TitleText = styled.text`
    font-size: 28px;
`;

const ContentText = styled.text`
    font-size: 20px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    padding-left: 300px;
`;

const ReviewUpdateButton = styled.button`
    width: 40px;
    height: 20px;
`;

const ReviewDeleteButton = styled.button`
    width: 40px;
    height: 20px;
`;
