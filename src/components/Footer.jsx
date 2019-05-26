import React from 'react';
import {
  Box, Grid, GridItem, Link, Menu, MenuItem, Text,
} from 'mineral-ui';
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaVimeoSquare,
} from 'react-icons/fa';
import styled from '@emotion/styled';

const SocialLink = styled(Link)`
    font-size: 3em;
`;

export default function Footer() {
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
          <SocialLink
            name="Facebook"
            href="https://facebook.com"
            aria-label="Facebook"
          >
            <FaFacebook />
          </SocialLink>
          <SocialLink
            name="Twitter"
            href="https://twitter.com"
            aria-label="Twitter"
          >
            <FaTwitterSquare />
          </SocialLink>
          <SocialLink
            name="Instagram"
            href="https://instagram.com"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink
            name="Vimeo"
            href="https://vimeo.com"
            aria-label="Vimeo"
          >
            <FaVimeoSquare />
          </SocialLink>
        </GridItem>
      </Grid>
    </Box>
  );
}
