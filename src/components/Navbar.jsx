"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const logo_white_jpg_1 = __importDefault(require("../img/logo-white.jpg"));
const Navbar = class extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.toggleHamburger = () => {
            // toggle the active boolean in the state
            this.setState({
                active: !this.state.active
            }, 
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                        navBarActiveClass: "is-active"
                    })
                    : this.setState({
                        navBarActiveClass: ""
                    });
            });
        };
        this.state = {
            active: false,
            navBarActiveClass: ""
        };
    }
    render() {
        return (<nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <gatsby_1.Link to="/" className="navbar-item" title="Logo">
                            <img src={logo_white_jpg_1.default} alt="wilderness liz logo"/>
                        </gatsby_1.Link>
                        
                        <div className={`navbar-burger burger ${this.state.navBarActiveClass}`} data-target="navMenu" onClick={() => this.toggleHamburger()}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
                        <div className="navbar-start has-text-centered">
                            <gatsby_1.Link className="navbar-item" to="/about">
                                About
                            </gatsby_1.Link>
                            <gatsby_1.Link className="navbar-item" to="/trips">
                                Trips
                            </gatsby_1.Link>
                            <gatsby_1.Link className="navbar-item" to="/blog">
                                Blog
                            </gatsby_1.Link>
                            <gatsby_1.Link className="navbar-item" to="/contact">
                                Contact
                            </gatsby_1.Link>
                        </div>
                    </div>
                </div>
            </nav>);
    }
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.jsx.map