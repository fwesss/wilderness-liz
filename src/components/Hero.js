import * as React from "react";
import { Flex, FlexItem, Text } from "mineral-ui";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
const Description = styled(Text) `
    font-size: 20px;
    text-align: center;
`;
const DescriptionBox = styled(FlexItem) `
    margin: 32px;
    padding: 32px;
    background-color: #A1B5B2;
    opacity: 0.85;
    border-radius: 4px;
    align-self: center;
    flex-direction: column;
`;
const Hero = ({ cover_image, title, description, height }) => (React.createElement(BackgroundImage, { fluid: cover_image, backgroundColor: `#A1B5B2` },
    React.createElement(Flex, { justifyContent: "evenly", direction: "row", height: height },
        React.createElement(DescriptionBox, null,
            React.createElement(Text, { align: "center", as: "h1" }, title),
            React.createElement(Description, null, description)))));
export default Hero;
