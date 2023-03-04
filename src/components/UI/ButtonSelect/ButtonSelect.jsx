import React, { useState } from 'react';
import styled from "styled-components";

const StyledButtonSelect = styled.div`
  display: inline-flex;
`;
const StyledSingleButton = styled.div`
  display: inline-block;
  padding: 0 10px;
  border: 2px solid #3B43D4;
  background-color: transparent;
  color: #444444;
  line-height: 30px;
  font-size: 1rem;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  
`;

// interface {
//  items: string[],
//  initial: string,
//  onChange: (val: string) => void,
// }

export const ButtonSelect = (props) => {
    const { items, initial, onChange } = props;
    const [selectedItem, setSelectedItem] = useState(initial || items[0] || null);


    return (
        <div>

        </div>
    );
};