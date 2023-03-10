import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/nowpage/NowPage";
import KakaoConfigpage from "./pages/kakaoconfigpage/KakaoConfigpage";
import Mypage from "./pages/mypage/Mypage";
import Detail from "./pages/detailpage/Detail";
import Post from "./pages/detailpage/Post";
import NowPage from "./pages/nowpage/NowPage";
import Signup from "./pages/signup/Signup";
import Secession from "./pages/secession/Secession";
import KakaoRedirect from "./pages/kakaologin/KakaoRedirect";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NowPage />} />

        <Route path="/post/:postid" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        
        <Route path="/config" element={<KakaoConfigpage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/secession" element={<Secession />} />
        <Route path="/api/auth/kakao/callback" element={<KakaoRedirect />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
