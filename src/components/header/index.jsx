import styled from 'styled-components';

export const Logo = styled.p`
    font-size: 36px;
    color: #9550f9;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
`;

export const Text = styled.text`
    font-size: 24px;
`;

export const MyInfo = styled.text`
    display: flex;
    justify-content: flex-end;
    padding-left: 315px;
`;

export const Wrapper = styled.header`
    width: 100%;
    height: 82px;
    display: flex;
    align-items: center;
    gap: 80px;
`;

const Header = () => {
    return (
        <Wrapper>
            <Logo>SafeTrip</Logo>
            <Text>국가 안전정보 검색</Text>
            <Text>여행지 리뷰 작성</Text>
            <Text>여행 정보 공유 글 작성</Text>
            <MyInfo>
                <Text>jeongho1209님</Text>
                {/* data 받아서 처리, page 이동 처리 필요*/}
            </MyInfo>
        </Wrapper>
    );
};

export default Header;
