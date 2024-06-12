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
  /* Define your button styles here */
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
