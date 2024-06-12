import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

// Define types for props
interface ButtonProps {
  id: string;
  className?: string; // className is optional
  primary?: boolean;
  secondary?: boolean;
  link?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

// Styled button component
const StyledButton = styled.button<ButtonProps>`
    background: black;
        border-radius: 5px;
        padding: 10px 14px;
        transition: 0.5s;
        color: white;



        border: none; 
        &:hover{
        background: #302f2f;
        box-shadow: 1px 2px 2px rgba(1, 1, 1, 1);
        }
        & .secondary {
         background: white;
    border-radius: 5px;
    padding: 10px 14px;
    transition: 0.5s;
    color:black;
    cursor: pointer;



    border: none;
    &:hover{
        
    }
    }
    & .link {
     background: transparent;
    border-radius: 5px;
    padding: 10px 14px;
    transition: 0.5s;
    color:black;
    text-decoration: underline;
    cursor: pointer;


    border: none;
    }

    `;
// Functional component
const Button: React.FC<ButtonProps> = ({ id, className, primary, secondary, link, onClick, children }) => {
  const buttonClass = clsx(className, {
    'primary': primary,
    'secondary': secondary,
    'link': link
  });

  return (
    <StyledButton className={buttonClass} onClick={onClick} id={id}>
      {children}
    </StyledButton>
  );
};

export default Button;
