"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const gatsby_image_1 = __importDefault(require("gatsby-image"));
const PreviewCompatibleImage = ({ imageInfo }) => {
    const imageStyle = { borderRadius: '5px' };
    const { alt = '', childImageSharp, image } = imageInfo;
    if (!!image && !!image.childImageSharp) {
        return (<gatsby_image_1.default style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt}/>);
    }
    if (!!childImageSharp) {
        return <gatsby_image_1.default style={imageStyle} fluid={childImageSharp.fluid} alt={alt}/>;
    }
    if (!!image && typeof image === 'string')
        return <img style={imageStyle} src={image} alt={alt}/>;
    return null;
};
PreviewCompatibleImage.propTypes = {
    imageInfo: prop_types_1.default.shape({
        alt: prop_types_1.default.string,
        childImageSharp: prop_types_1.default.object,
        image: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.string]).isRequired,
        style: prop_types_1.default.object,
    }).isRequired,
};
exports.default = PreviewCompatibleImage;
//# sourceMappingURL=PreviewCompatibleImage.jsx.map