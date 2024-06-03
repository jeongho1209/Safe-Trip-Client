import styled from 'styled-components';
import { SafeInfoSearch } from '@components/common/search/safeInfoSearch.tsx';

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

export const SafeInfoBody = () => {
    return (
        <>
            <Wrapper>
                <Text>국가에 대한 안전 정보를 검색해보세요!</Text>
                <SafeInfoSearch></SafeInfoSearch>
            </Wrapper>
        </>
    );
};
