import './FormSection.scss';
import React from 'react';
import styled from "styled-components";

const StyledFormSection = styled.section`
  display: grid;
  align-items: center;
  grid-template-rows: ${({ $inline }) => $inline ? 'min-content' : 'min-content 1fr'};
  grid-template-columns: ${({ $inline }) => $inline ? 'min-content 1fr' : '1fr'};
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr;
  }
`;
const StyledTitle = styled.h4`
  margin: 0;
  text-align: center;
  //font-size: 22px;
  font-size: calc(1rem + 0.20vw);
  line-height: 28px;
  color: #000;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 1000px) {
    white-space: pre-wrap;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr;
  }
`;
const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $inline }) => $inline ? 'flex-start' : 'center'};

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

// {
//  title: string,
//  children: ReactNode
//  inline: boolean
// }

const FormSection = ({title, inline= false, children}) => {

  return (
    <StyledFormSection $inline={inline}>
      { title && <StyledTitle $inline={inline}>{title}</StyledTitle> }
      { children && <StyledBody $inline={inline}>{children}</StyledBody> }
    </StyledFormSection>
  );
};

export { FormSection };