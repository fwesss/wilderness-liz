import React from "react";
import {Link} from "gatsby";
import {NavItem, PrimaryNav} from "mineral-ui";
import {elastic as Menu} from 'react-burger-menu';
import styled from "@emotion/styled";
import {
    MdForum,
    MdHome,
    MdLandscape,
    MdLaptopMac,
    MdRestaurant
} from "react-icons/md";

const BurgerStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px',
    },
    bmBurgerBars: {
        background: '#3B3B3B'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#002A2A'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#A1B5B2',
        opacity: '0.95',
        padding: '2.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#A1B5B2',
        opacity: '0.95',
    },
    bmItemList: {
        padding: '0.8em 0'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};

const MyNavItem = styled(NavItem)({
    width: "300px",
    fontSize: "1.5em",
    marginLeft: "0.25em",
});

const MyPrimaryNav = styled(PrimaryNav)({
    width: "300px",
    background: "transparent",
    color: "#002A2A",
});

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
                <Menu styles={BurgerStyles}>
                    <MyPrimaryNav minimal
                                  itemAs={Link}
                                  role="navigation"
                                  aria-label="main-navigation"
                    >
                        <MyNavItem to="/">
                            <MdHome/> Home
                        </MyNavItem>
                        <MyNavItem to="/about">
                            <MdRestaurant/> Food Guides
                        </MyNavItem>
                        <MyNavItem to="/trips">
                            <MdLandscape/> Trips
                        </MyNavItem>
                        <MyNavItem to="/blog">
                            <MdLaptopMac/> Blog
                        </MyNavItem>
                        <MyNavItem to="/contact">
                            <MdForum/> Contact
                        </MyNavItem>
                    </MyPrimaryNav>
                </Menu>
            </header>
        );
    }
};

export default Navbar;