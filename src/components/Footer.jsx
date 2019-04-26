import React from 'react'
import {
    Box,
    Grid,
    GridItem,
    Menu,
    MenuItem,
    Text,
    Link,
    FlexItem
} from "mineral-ui";
import {
    FaFacebook,
    FaInstagram,
    FaTwitterSquare,
    FaVimeoSquare
} from "react-icons/fa";
import styled from "@emotion/styled";

const SocialLink = styled(Link)({
    fontSize: "3em"
});

const Footer = class extends React.Component {
    render() {
        return (
            <Box as="footer" padding="lg">
                <Text as="h2">Wilderness Liz</Text>
                <Grid>
                    <GridItem>
                        <Menu>
                            <MenuItem as={Link} to="/">
                                Home
                            </MenuItem>
                            <MenuItem as={Link} to="/about">
                                About
                            </MenuItem>

                            <MenuItem as={Link} to="/blog">
                                Latest Stories
                            </MenuItem>
                            <MenuItem as={Link} to="/contact">
                                Contact
                            </MenuItem>
                        </Menu>
                    </GridItem>
                    <GridItem>
                        <SocialLink href="https://facebook.com">
                            <FaFacebook/>
                        </SocialLink>
                        <SocialLink href="https://twitter.com">
                            <FaTwitterSquare/>
                        </SocialLink>
                        <SocialLink href="https://instagram.com">
                            <FaInstagram/>
                        </SocialLink>
                        <SocialLink href="https://vimeo.com">
                            <FaVimeoSquare/>
                        </SocialLink>
                    </GridItem>
                </Grid>
            </Box>
        )
    }
};

export default Footer
