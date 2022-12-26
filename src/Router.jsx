import { Routes, Route, BrowserRouter } from "react-router-dom";
import KakaoConfigpage from "./pages/kakaoconfigpage/KakaoConfigpage";
import Mypage from "./pages/mypage/Mypage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
        <Route path="/" element={<KakaoConfigpage />}></Route>
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
