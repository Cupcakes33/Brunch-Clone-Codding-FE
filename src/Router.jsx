import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./pages/NavLayout/NavLayout";
import Main from "./pages/nowpage/NowPage";
import KakaoConfigpage from "./pages/kakaoconfigpage/KakaoConfigpage";
import Mypage from "./pages/mypage/Mypage";
import Detail from "./pages/detailpage/Detail";
import Post from "./pages/detailpage/Post";
import NowPage from "./pages/nowpage/NowPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<KakaoConfigpage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/now" element={<NowPage />} />
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// 추상화 단계에서 경로를 확인할 수 있도록
