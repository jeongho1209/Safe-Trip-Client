import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled.p`
    font-size: 36px;
    color: #9550f9;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
`;

const Text = styled.text`
    font-size: 24px;
`;

const MyInfo = styled.text`
    display: flex;
    justify-content: flex-end;
    padding-left: 315px;
`;

const Wrapper = styled.header`
    width: 100%;
    height: 82px;
    position: fixed;
    display: flex;
    align-items: center;
    gap: 80px;
    background: white;
    z-index: 1;
`;

const Header = () => {
    return (
        <Wrapper>
            <Logo>SafeTrip</Logo>
            <Text>국가 안전정보 검색</Text>
            <Text>여행지 리뷰 작성</Text>
            <Link to="/travelInfo" style={{ textDecoration: 'none', color: 'black' }}>
                <Text>여행 정보 공유 글 작성</Text>
            </Link>
            <MyInfo>
                <Text>jeongho1209님</Text>
                {/* data 받아서 처리, page 이동 처리 필요*/}
            </MyInfo>
        </Wrapper>
    );
};

export default Header;
