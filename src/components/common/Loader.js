import styled from "styled-components";

export default function Loader() {
  return (
    <Wrapper>
      <div></div>
      <div></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 30px 0px;

  div {
    position: absolute;
    border: 4px solid #f72585;
    opacity: 1;
    border-radius: 50%;
    animation: Loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
