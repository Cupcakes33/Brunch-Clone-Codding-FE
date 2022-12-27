import CommonBox from "../../components/common/CommonBox";
import styled from "styled-components";
import { StSpan } from "./style";
const Signup = () => {
  const onClickLoginChose = (e) => {
    e.preventDefault();
    console.log("ggg");
  };
  return (
    <div>
      <StSpan />
      <form>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="test@email.com"
        />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="****************"
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
export default Signup;
