import './reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main.jsx';
import { TravelInfo } from './pages/travelInfo.jsx';
import SignUp from './pages/signUp.jsx';
import SignIn from './pages/signIn.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/travelInfo" element={<TravelInfo />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/signIn" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
