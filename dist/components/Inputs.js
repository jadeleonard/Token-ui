"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
// Styled input component
const StyledInput = styled_components_1.default.input `
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
const Input = ({ id, type, className, placeholder }) => {
    return (react_1.default.createElement(StyledInput, { id: id, type: type, className: className, placeholder: placeholder }));
};
exports.default = Input;
