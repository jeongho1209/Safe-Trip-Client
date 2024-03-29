import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 180px;
`;

const Text1 = styled.text`
    font-size: ${(props) => props.fontSize}px;
`;

const Text2 = styled.text`
    font-size: ${(props) => props.fontSize}px;
`;

export const MainText = () => {
    return (
        <>
            <Wrapper>
                <Text1 fontSize={256}>SafeTrip</Text1>
                <Text2 fontSize={128}>안전한 여행을 위해</Text2>
            </Wrapper>
        </>
    );
};
