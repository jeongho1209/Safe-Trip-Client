import Header from './components/header/index.jsx';
import { MainImage } from './components/main/image/mainImage.jsx';
import './reset.css';
import { MainText } from './components/main/text/index.jsx';

function App() {
    return (
        <>
            <Header></Header>
            <div>
                <MainText></MainText>
                <MainImage></MainImage>
            </div>
        </>
    );
}

export default App;
