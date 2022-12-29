import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/nowpage/NowPage";
import KakaoConfigpage from "./pages/kakaoconfigpage/KakaoConfigpage";
import Mypage from "./pages/mypage/Mypage";
import Detail from "./pages/detailpage/Detail";
import Post from "./pages/detailpage/Post";
import NowPage from "./pages/nowpage/NowPage";
import Signup from "./pages/signup/Signup";
import Secession from "./pages/secession/Secession";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/config" element={<KakaoConfigpage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/secession" element={<Secession />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="/" element={<Secession />} />
        <Route path="/post/:postid" element={<Detail />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// 추상화 단계에서 경로를 확인할 수 있도록
