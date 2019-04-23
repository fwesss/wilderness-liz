"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_slick_1 = require("react-slick");
var gatsby_image_1 = require("gatsby-image");
var gatsby_1 = require("gatsby");
function InstagramCarousel() {
    var allFile = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            query {\n                allFile(\n                    sort: { fields: name, order: DESC }\n                    filter: { sourceInstanceName: { eq: \"insta\" } }\n                ) {\n                    edges {\n                        node {\n                            id\n                            name\n                            childImageSharp {\n                                fixed(width: 480, height: 360) {\n                                    ...GatsbyImageSharpFixed_withWebp_tracedSVG\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        "], ["\n            query {\n                allFile(\n                    sort: { fields: name, order: DESC }\n                    filter: { sourceInstanceName: { eq: \"insta\" } }\n                ) {\n                    edges {\n                        node {\n                            id\n                            name\n                            childImageSharp {\n                                fixed(width: 480, height: 360) {\n                                    ...GatsbyImageSharpFixed_withWebp_tracedSVG\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        "])))).allFile;
    var images = [];
    allFile.edges.forEach(function (_a) {
        var node = _a.node;
        images.push(<div>
            <gatsby_image_1["default"] fixed={node.childImageSharp.fixed} key={node.id} alt={node.name.replace(/-/g, ' ')}/>
        </div>);
    });
    var settings = {
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
    return (<react_slick_1["default"] {...settings}>
            {images}
        </react_slick_1["default"]>);
}
exports["default"] = InstagramCarousel;
var templateObject_1;
