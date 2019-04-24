import React from "react";
import {Link} from "gatsby";
import {NavItem, PrimaryNav} from "mineral-ui";

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: ""
        };
    }

    render() {
        return (
            <header>
                <PrimaryNav minimal
                            itemAs={Link}
                            role="navigation"
                            aria-label="main-navigation"
                >
                    <NavItem to="/">
                        Home
                    </NavItem>

                    <NavItem to="/about">
                        About
                    </NavItem>
                    <NavItem to="/trips">
                        Trips
                    </NavItem>
                    <NavItem to="/blog">
                        Blog
                    </NavItem>
                    <NavItem to="/contact">
                        Contact
                    </NavItem>
                </PrimaryNav>
            </header>
        );
    }
};

export default Navbar;