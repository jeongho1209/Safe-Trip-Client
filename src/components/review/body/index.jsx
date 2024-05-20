import styled from 'styled-components';
import Search from '../../search/index.jsx';

const Text = styled.text`
    font-size: 50px;
    font-weight: bold;
    margin-top: 150px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Background = styled.div`
    background-color: bisque;
`;

export const ReviewText = () => {
    return (
        <>
            <Background>
                <Wrapper>
                    <Text>리뷰를 작성하고 다른 여행자에게 도움을 주세요!</Text>
                    <Search></Search>
                </Wrapper>
            </Background>
        </>
    );
};
