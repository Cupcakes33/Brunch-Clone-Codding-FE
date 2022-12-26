import styled from "styled-components";

const style = () => {
  const DetailWrap = styled.div`
    width: 1000;
    min-height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
  `;

  const Topline = styled.p`
    color: #616161;
    font-size: 25px;
    font-weight: 600;
  `;

  const ItemWrap = styled.div`
    border: 1px solid gray;
    display: flex;
    height: 450px;
    width: 1000px;
    border-radius: 20px;
    background-color: white;
  `;

  const Titleset = styled.div`
    color: black;
    font-size: 40px;
    font-weight: 300;
    padding-bottom: 30px;
    right: 300px;
  `;

  const Body = styled.div`
    color: #616161;
    position: relative;
    left: 150px;
    font-size: 20px;
    font-weight: 100;
    padding-bottom: 50px;
  `;

  const Price = styled.div`
    color: #616161;
    position: relative;
    left: 150px;
    font-size: 20px;
    font-weight: 100;
    padding-bottom: 50px;
  `;
};

export default style;
