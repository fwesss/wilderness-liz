import * as React from "react";
import { Flex, FlexItem, Text } from "mineral-ui";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
var Description = styled(Text)({
    fontSize: "20px",
    textAlign: "center",
});
var DescriptionBox = styled(FlexItem)({
    padding: "32px",
    backgroundColor: "#A1B5B2",
    opacity: "0.85",
    borderRadius: "4px",
});
var Hero = function (_a) {
    var cover_image = _a.cover_image, title = _a.title, description = _a.description;
    return (<BackgroundImage fluid={cover_image} backgroundColor={"#A1B5B2"}>
        <Flex justifyContent="evenly" direction="row" height={500}>
            <DescriptionBox alignSelf="center" direction="column">
                <Text align="center" as="h1">
                    {title}
                </Text>
                <Description>
                    {description}
                </Description>
            </DescriptionBox>
        </Flex>
    </BackgroundImage>);
};
export default Hero;
//# sourceMappingURL=Hero.jsx.map