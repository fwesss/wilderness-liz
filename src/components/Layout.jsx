import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Box, ThemeProvider } from 'mineral-ui';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Footer from './Footer';
import Navbar from './Navbar';
import useSiteMetadata from './SiteMetadata';
import { MyTheme } from '../utils/theme';
import 'normalize.css';
import { colors } from '../utils/colors';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <ThemeProvider theme={MyTheme}>
      <Box as="div" id="outer-container">
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../img/logo-blue.jpg"
          />
          <link
            rel="icon"
            type="image/png"
            href="../img/logo-blue.jpg"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="../img/logo-blue.jpg"
            sizes="16x16"
          />
          <link
            rel="mask-icon"
            href="../img/logo-blue.jpg"
            color={colors.gray[3]}
          />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />
        <div id="content-container">{children}</div>
        <ScrollUpButton />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
