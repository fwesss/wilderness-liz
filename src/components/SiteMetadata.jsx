"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gatsby_1 = require("gatsby");
const useSiteMetadata = () => {
    const { site } = gatsby_1.useStaticQuery(gatsby_1.graphql `
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `);
    return site.siteMetadata;
};
exports.default = useSiteMetadata;
//# sourceMappingURL=SiteMetadata.jsx.map