import styled from 'styled-components';
import Search from '../../search/index.tsx';

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

export const TravelInfoBody = () => {
    return (
        <>
            <Background>
                <Wrapper>
                    <Text>여행지에 대한 정보를 공유해보세요!</Text>
                    <Search></Search>
                </Wrapper>
            </Background>
        </>
    );
};
