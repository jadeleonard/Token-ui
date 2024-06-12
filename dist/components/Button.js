"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const styled_components_1 = __importDefault(require("styled-components"));
// Styled button component
const StyledButton = styled_components_1.default.button `
  /* Define your button styles here */
`;
// Functional component
const Button = ({ id, className, primary, secondary, link, onClick, children }) => {
    const buttonClass = (0, clsx_1.default)(className, {
        'primary': primary,
        'secondary': secondary,
        'link': link
    });
    return (react_1.default.createElement(StyledButton, { className: buttonClass, onClick: onClick, id: id }, children));
};
exports.default = Button;
