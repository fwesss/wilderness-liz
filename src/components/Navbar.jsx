/** @jsx jsx */
import {jsx} from '@emotion/core'
import React from "react";
import {Link} from "gatsby";
import {Box, Text, NavItem, PrimaryNav} from "mineral-ui";
import {pushRotate as Menu} from 'react-burger-menu';
import styled from "@emotion/styled";
import {
    MdForum,
    MdHome,
    MdLandscape,
    MdLaptopMac,
    MdRestaurant
} from "react-icons/md";
import withSizes from "react-sizes";
import colors from "../utils/colors";

const BurgerStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '7vw',
        height: '6vw',
        left: '5vw',
        top: '3vw',
    },

    bmBurgerBars: {
        background: colors.gray[8]
    },

    bmCrossButton: {
        height: '24px',
        width: '24px'
    },

    bmCross: {
        background: colors.gray[9]
    },

    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },

    bmMenu: {
        background: colors.brand,
        padding: '2.5em 0',
        fontSize: '1.15em'
    },

    bmMorphShape: {
        fill: colors.brand,
    },

    bmItemList: {
        padding: '0.8em 0'
    },

    bmItem: {
        display: 'inline-block'
    },

    bmOverlay: {
        background: 'rgba(59, 64, 63, 0.3)'
    }
};

const MobileNavItem = styled(NavItem)`
    width: 300px;
    font-size: 1.5em;
    margin-left: 0.25em;
`;

const MobilePrimaryNav = styled(PrimaryNav)`
    width: 300px;
    background: transparent;
`;

const DesktopNavItem = styled(NavItem)`
    font-size: 1.4em;
    @media only screen and (max-width: 808px) {
        font-size: 2.65vw;
    }
`;

const DesktopPrimaryNav = styled(PrimaryNav)`
    width: 100%;
    top: 0;
    position: sticky;
    z-index: 1000;
`;

const MobileHeader = styled(Box)`
    top: 0;
    position: sticky;
    z-index: 1000;
    background-color: ${colors.white};
    width: 100%;
    text-align: center;
`;

const SiteTitle = styled(Text)`
    padding-top: 25px;
    margin-bottom: 0;
    
    @media only screen and (max-width: 669px) {
        padding-top: 2.5vw;
        padding-right: 5vw;
        text-align: end;
        font-size: 7vw;
    }
`;

const Break = styled('hr')`
    margin: 0 12vw;
    height: 1px;
`;

const mapSizesToProps = ({width}) => ({
    isMobile: width < 670,
});

class Navbar extends React.Component {
    render() {
        return (
            <>
                <MobileHeader>
                    <SiteTitle as="h1">Wilderness Liz</SiteTitle>
                </MobileHeader>
                {this.props.isMobile ?
                    <Menu pageWrapId={"page-wrap"}
                          outerContainerId={"outer-container"}
                          styles={BurgerStyles}>
                        <MobilePrimaryNav minimal
                                          itemAs={Link}
                                          role="navigation"
                                          aria-label="main-navigation">
                            <MobileNavItem maxWidth="10em" to="/">
                                <MdHome/> Home
                            </MobileNavItem>
                            <MobileNavItem maxWidth="10em" to="/about">
                                <MdRestaurant/> Food Guides
                            </MobileNavItem>
                            <MobileNavItem maxWidth="10em" to="/trips">
                                <MdLandscape/> Trips
                            </MobileNavItem>
                            <MobileNavItem maxWidth="10em" to="/blog">
                                <MdLaptopMac/> Blog
                            </MobileNavItem>
                            <MobileNavItem maxWidth="10em" to="/contact">
                                <MdForum/> Contact
                            </MobileNavItem>
                        </MobilePrimaryNav>
                    </Menu> :
                    <>
                        <Break/>
                        <DesktopPrimaryNav minimal
                                           itemAs={Link}
                                           role="navigation"
                                           aria-label="main-navigation"
                        >
                            <DesktopNavItem maxWidth="10em" to="/">
                                <MdHome/> Home
                            </DesktopNavItem>
                            <DesktopNavItem maxWidth="10em" to="/about">
                                <MdRestaurant/> Food Guides
                            </DesktopNavItem>
                            <DesktopNavItem maxWidth="10em" to="/trips">
                                <MdLandscape/> Trips
                            </DesktopNavItem>
                            <DesktopNavItem maxWidth="10em" to="/blog">
                                <MdLaptopMac/> Blog
                            </DesktopNavItem>
                            <DesktopNavItem maxWidth="10em" to="/contact">
                                <MdForum/> Contact
                            </DesktopNavItem>
                        </DesktopPrimaryNav>
                    </>}
            </>
        );
    }
}

export default withSizes(mapSizesToProps)(Navbar);