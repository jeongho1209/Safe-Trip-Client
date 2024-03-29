import Header from './components/header/index.jsx';
import { MainImage } from './components/main/image/mainImage.jsx';
import './reset.css';
import { MainText } from './components/main/text/index.jsx';
import styled from 'styled-components';

function App() {
    return (
        <>
            <Header></Header>
            <Wrapper>
                <MainImage></MainImage>
                <MainText></MainText>
            </Wrapper>
        </>
    );
}

export default App;

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
