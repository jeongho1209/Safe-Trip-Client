import './reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main.jsx';
import { TravelInfo } from './pages/travelInfo.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/travelInfo" element={<TravelInfo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
