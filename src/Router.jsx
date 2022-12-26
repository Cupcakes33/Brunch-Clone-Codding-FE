
import { Routes, Route, BrowserRouter } from "react-router-dom";
import KakaoConfigpage from "./pages/kakaoconfigpage/KakaoConfigpage";
import Mypage from "./pages/mypage/Mypage";
import Detail from "./pages/detailpage/Detail";
import Post from "./pages/detailpage/Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KakaoConfigpage />}></Route>
        <Route path="/mypage" element={<Mypage />} />
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
