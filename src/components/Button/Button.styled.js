import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  margin-bottom: 20px;
  width: 150px;
  height: 46px;
  cursor: pointer;
  border: 2px solid #483d8b;
  background-color: #e6e6fa;
  border-radius: 8px;
  outline: none;
  box-shadow: inset rgba(72, 61, 139, 0.6) 0 -3px 8px,
    inset rgba(72, 61, 139, 0.7) 0 3px 8px,
    rgba(72, 61, 139, 0.8) 0 3px 8px -3px;

  &:hover,
  &:focus {
    box-shadow: inset 2px 2px 5px rgba(72, 61, 139, 0.5),
      1px 1px 5px rgba(72, 61, 139, 1);
  }
`;
