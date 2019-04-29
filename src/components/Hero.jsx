import {Flex, FlexItem, Text} from "mineral-ui";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import styled from "@emotion/styled";

const Description = styled(Text)({
    fontSize: "20px",
    textAlign: "center",
});

const DescriptionBox = styled(FlexItem)({
    padding: "32px",
    backgroundColor: "#A1B5B2",
    opacity: "0.85",
    borderRadius: "4px",
});

const Hero = ({cover_image, title, description}) => (
    <BackgroundImage fluid={cover_image}
                     backgroundColor={`#A1B5B2`}
    >
        <Flex justifyContent="evenly"
              direction="row"
              height={500}
        >
            <DescriptionBox alignSelf="center"
                            direction="column"
            >
                <Text align="center" as="h1">
                    {title}
                </Text>
                <Description>
                    {description}
                </Description>
            </DescriptionBox>
        </Flex>
    </BackgroundImage>
);

export default Hero