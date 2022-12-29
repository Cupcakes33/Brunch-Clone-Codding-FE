import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { kakaoLogin } from "../../redux/slices/loginSlice";

const KakaoRedirect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
    const code = new URL(document.location.toString()).searchParams.get("code");
    dispatch(kakaoLogin(code));
  });
};
export default KakaoRedirect;
