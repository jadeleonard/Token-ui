"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("../../node_modules/clsx/clsx"));
const styled_components_1 = __importDefault(require("styled-components"));
const React = __importStar(require("react"));
const ButtonComponent = styled_components_1.default.button `
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
const Button = ({ id, className, primary, secondary, link, onClick, children }) => {
    const buttonClass = (0, clsx_1.default)(className, {
        'primary': primary,
        'secondary': secondary,
        'link': link
    });
    return (React.createElement(ButtonComponent, { className: buttonClass, onClick: onClick, id: id }, children));
};
