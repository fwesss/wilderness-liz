"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
exports.HTMLContent = ({ content, className }) => (<div className={className} dangerouslySetInnerHTML={{ __html: content }}/>);
const Content = ({ content, className }) => (<div className={className}>{content}</div>);
Content.propTypes = {
    content: prop_types_1.default.node,
    className: prop_types_1.default.string,
};
exports.HTMLContent.propTypes = Content.propTypes;
exports.default = Content;
//# sourceMappingURL=Content.jsx.map