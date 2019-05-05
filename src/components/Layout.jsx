import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import useSiteMetadata from './SiteMetadata';
import MyTheme from "./Theme";
import {ThemeProvider} from "mineral-ui";
import "normalize.css";

const TemplateWrapper = ({children}) => {
    const {title, description} = useSiteMetadata();

    return (
        <ThemeProvider theme={MyTheme}>
            <div id="outer-container">
                <Helmet>
                    <html lang="en"/>
                    <title>{title}</title>
                    <meta name="description" content={description}/>

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="../../static/img/logo-blue.jpg"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="../../static/img/logo-blue.jpg"
                        sizes="32x32"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="../../static/img/logo-blue.jpg"
                        sizes="16x16"
                    />
                    <link
                        rel="mask-icon"
                        href="../../static/img/logo-blue.jpg"
                        color="#F7F0EB"
                    />

                    <meta property="og:type" content="business.business"/>
                    <meta property="og:title" content={title}/>
                    <meta property="og:url" content="/"/>
                    <meta property="og:image" content="/img/og-image.jpg"/>
                </Helmet>
                <Navbar/>
                <div id="content-container">{children}</div>
                <Footer/>
            </div>
        </ThemeProvider>
    )
};

export default TemplateWrapper
