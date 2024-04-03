import './reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
