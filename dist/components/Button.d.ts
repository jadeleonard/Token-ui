import React from 'react';
interface ButtonProps {
    id: string;
    className?: string;
    primary?: boolean;
    secondary?: boolean;
    link?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
