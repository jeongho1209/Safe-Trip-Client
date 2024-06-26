import { TravelDestinationSearch } from '@components/common/search/travelDestinationSearch.tsx';
import styled from 'styled-components';

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

export const TravelInfoBody = () => {
    return (
        <>
            <Wrapper>
                <Text>여행지에 대한 정보를 공유해보세요!</Text>
                <TravelDestinationSearch isReview={false} isTravel={true}></TravelDestinationSearch>
            </Wrapper>
        </>
    );
};
