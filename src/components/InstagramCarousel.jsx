"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_slick_1 = __importDefault(require("react-slick"));
const gatsby_image_1 = __importDefault(require("gatsby-image"));
const gatsby_1 = require("gatsby");
function InstagramCarousel() {
    const { allFile } = gatsby_1.useStaticQuery(gatsby_1.graphql `
            query {
                allFile(
                    sort: { fields: name, order: DESC }
                    filter: { sourceInstanceName: { eq: "insta" } }
                ) {
                    edges {
                        node {
                            id
                            name
                            childImageSharp {
                                fixed(width: 480, height: 360) {
                                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        `);
    let images = [];
    allFile.edges.forEach(({ node }) => {
        images.push(<div>
            <gatsby_image_1.default fixed={node.childImageSharp.fixed} key={node.id} alt={node.name.replace(/-/g, ' ')}/>
        </div>);
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<react_slick_1.default {...settings}>
            {images}
        </react_slick_1.default>);
}
exports.default = InstagramCarousel;
//# sourceMappingURL=InstagramCarousel.jsx.map