import styled from '@emotion/styled';

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LoaderWrap = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  width: 200px;
  transform: translateX(-50%);
`;
