import './FS-HrWrapper.scss';
import React from 'react';
import styled from "styled-components";

const StyledHrWrapper = styled.div``;
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledSeparator = styled.div`
  display: ${({$visible}) => $visible ? 'block' : 'none'};
  margin: 15px 10px;
  height: 1px;
  border: none;
  background-color: #3B43D4;
`;

const FsHrWrapper = ({children, border, boldBorder, invisibleBorder}) => {
  return (
    <StyledHrWrapper>
      {children &&
        <>
          <StyledBody>{children}</StyledBody>
          <StyledSeparator $visible={border} />
        </>
      }
    </StyledHrWrapper>
  );
};

export { FsHrWrapper };