"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_helmet_1 = __importDefault(require("react-helmet"));
const Footer_1 = __importDefault(require("./Footer"));
const Navbar_1 = __importDefault(require("./Navbar"));
require("./all.sass");
const SiteMetadata_1 = __importDefault(require("./SiteMetadata"));
const TemplateWrapper = ({ children }) => {
    const { title, description } = SiteMetadata_1.default();
    return (<div>
            <react_helmet_1.default>
                <html lang="en"/>
                <title>{title}</title>
                <meta name="description" content={description}/>

                <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" href="/static/img/favicon-32x32.png" sizes="32x32"/>
                <link rel="icon" type="image/png" href="/static/img/favicon-16x16.png" sizes="16x16"/>

                <link rel="mask-icon" href="/static/img/safari-pinned-tab.svg" color="#ff4400"/>

                <meta property="og:type" content="business.business"/>
                <meta property="og:title" content={title}/>
                <meta property="og:url" content="/"/>
                <meta property="og:image" content="/img/og-image.jpg"/>
            </react_helmet_1.default>
            <Navbar_1.default />
            <div>{children}</div>
            <Footer_1.default />
        </div>);
};
exports.default = TemplateWrapper;
//# sourceMappingURL=Layout.jsx.map