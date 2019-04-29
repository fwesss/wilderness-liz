var proxy = require("http-proxy-middleware");

module.exports = {
    siteMetadata: {
        title: 'Wilderness Liz',
        description:
            'The blog and home of everything related to Elizabeth Feller and her outdoor adventures.',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
                // Path to your Netlify CMS config file
                cmsConfig: `/static/admin/config.yml`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                            showCaptions: true,
                            quality: 100,
                            withWebp: true,
                            tracedSVG: true,

                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                    `gatsby-plugin-netlify-cms-paths`,
                ],
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-emotion`,
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img/insta`,
                name: 'insta',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.jsx`,
            },
        },
        {
            resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
            },
        }, // must be after other CSS plugins
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Wilderness Liz`,
                short_name: `Wilderness Liz`,
                start_url: `/`,
                background_color: `#F7F0EB`,
                theme_color: `#A1B5B2`,
                display: `standalone`,
                icon: 'src/img/logo-blue.jpg',
            },
        },
        `gatsby-plugin-offline`,
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
    // for avoiding CORS while developing Netlify Functions locally
    // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
    developMiddleware: app => {
        app.use(
            "/.netlify/functions/",
            proxy({
                target: "http://localhost:9000",
                pathRewrite: {
                    "/.netlify/functions/": "",
                },
            })
        )
    },
};
