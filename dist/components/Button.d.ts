interface ButtonProps {
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    formmethod?: "get" | "post";
    formnovalidate?: boolean;
    formtarget?: "_self" | "_blank" | "_parent" | "_top" | string;
    name?: string;
    type?: "button" | "submit" | "reset";
    value?: string;
    class?: string;
    id?: string;
    style?: string;
    title?: string;
    data?: {
        [key: string]: string;
    };
}
declare const Button: (props: ButtonProps) => HTMLButtonElement;
export default Button;
