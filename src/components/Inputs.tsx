import React from 'react';
import styled from 'styled-components';

// Define types for props
interface InputProps {
  id: string;
  type: string;
  className?: string; // className is optional
  placeholder?: string; // placeholder is optional
}

// Styled input component
const StyledInput = styled.input<InputProps>`
  border: 2px solid transparent;
  width: 15em;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    border: 2px solid #4A9DEC;
    box-shadow: 0px 0px 0px 7px rgba(74, 157, 236, 0.2);
    background-color: white;
  }
`;

// Functional component
const Input: React.FC<InputProps> = ({ id, type, className, placeholder }) => {
  return (
    <StyledInput
      id={id}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
