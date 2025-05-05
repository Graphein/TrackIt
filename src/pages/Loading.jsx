import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <Container>
      <ThreeDots color="#52B6FF" height={80} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
