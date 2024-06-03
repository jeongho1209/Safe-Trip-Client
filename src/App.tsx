import './reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '@pages/main.tsx';
import { TravelInfo } from '@pages/travelInfo.tsx';
import SignUp from '@pages/signUp.tsx';
import SignIn from '@pages/signIn.tsx';
import { Review } from '@pages/review.tsx';
import { MyPage } from '@pages/myPage.tsx';
import { SafeInfo } from '@pages/safeInfo.tsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/travelInfo" element={<TravelInfo />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/safeInfo" element={<SafeInfo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
