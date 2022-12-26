import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./pages/NavLayout/NavLayout";
import Main from "./pages/nowPage/Now";
import KakaoConfigpage from "./pages/kakaoconfigpage/KakaoConfigpage";
import Mypage from "./pages/mypage/Mypage";
import Signup from "./pages/signup/Signup";
import Secession from "./pages/secession/Secession";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/config" element={<KakaoConfigpage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Secession />} />
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// 추상화 단계에서 경로를 확인할 수 있도록
