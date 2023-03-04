import './FormItemContainer.scss';
import React from 'react';
import styled from "styled-components";

const StyledFormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const StyledTitle = styled.h5`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0;
  color: #000;
  font-weight: 300;
  text-align: center;
`;
const StyledBody = styled.div`
  
`;

const FormItemContainer = ({title, children}) => {
  return (
    <StyledFormItemContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledBody>{children}</StyledBody>
    </StyledFormItemContainer>
  );
};

export { FormItemContainer };