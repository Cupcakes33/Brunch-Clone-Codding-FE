import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./pages/NavLayout/NavLayout";
import Main from "./pages/nowPage/Now";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<Main />} />
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// 추상화 단계에서 경로를 확인할 수 있도록
