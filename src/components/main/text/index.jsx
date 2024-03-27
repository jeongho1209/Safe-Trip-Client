import styled from 'styled-components';

const Text = styled.text`
    background-color: white;
    font-size: ${(props) => props.fontSize};
    z-index: 1;
    display: flex;
    justify-content: center;
`;

export const MainText = () => {
    return (
        <>
            <Text fontSize={256}>SafeTrip</Text>
            <Text fontSize={128}>안전한 여행을 위해</Text>
        </>
    );
};
