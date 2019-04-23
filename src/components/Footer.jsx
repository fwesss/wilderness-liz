"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const facebook_svg_1 = __importDefault(require("../img/social/facebook.svg"));
const instagram_svg_1 = __importDefault(require("../img/social/instagram.svg"));
const twitter_svg_1 = __importDefault(require("../img/social/twitter.svg"));
const vimeo_svg_1 = __importDefault(require("../img/social/vimeo.svg"));
const Footer = class extends react_1.default.Component {
    render() {
        return (<footer className="footer has-background-black has-text-white-ter">
                <div className="content has-text-centered">
                    <h2>Wilderness Liz</h2>
                </div>
                <div className="content has-text-centered has-background-black has-text-white-ter">
                    <div className="container has-background-black has-text-white-ter">
                        <div className="columns">
                            <div className="column is-4">
                                <section className="menu">
                                    <ul className="menu-list">
                                        <li>
                                            <gatsby_1.Link to="/" className="navbar-item">
                                                Home
                                            </gatsby_1.Link>
                                        </li>
                                        <li>
                                            <gatsby_1.Link className="navbar-item" to="/about">
                                                About
                                            </gatsby_1.Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-4">
                                <section>
                                    <ul className="menu-list">
                                        <li>
                                            <gatsby_1.Link className="navbar-item" to="/blog">
                                                Latest Stories
                                            </gatsby_1.Link>
                                        </li>
                                        <li>
                                            <gatsby_1.Link className="navbar-item" to="/contact">
                                                Contact
                                            </gatsby_1.Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="column is-4 social">
                                <a title="facebook" href="https://facebook.com">
                                    <img src={facebook_svg_1.default} alt="Facebook" style={{ width: '1em', height: '1em' }}/>
                                </a>
                                <a title="twitter" href="https://twitter.com">
                                    <img className="fas fa-lg" src={twitter_svg_1.default} alt="Twitter" style={{ width: '1em', height: '1em' }}/>
                                </a>
                                <a title="instagram" href="https://instagram.com">
                                    <img src={instagram_svg_1.default} alt="Instagram" style={{ width: '1em', height: '1em' }}/>
                                </a>
                                <a title="vimeo" href="https://vimeo.com">
                                    <img src={vimeo_svg_1.default} alt="Vimeo" style={{ width: '1em', height: '1em' }}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>);
    }
};
exports.default = Footer;
//# sourceMappingURL=Footer.jsx.map