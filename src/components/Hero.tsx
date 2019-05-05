import * as React from "react";

import {Flex, FlexItem, Text} from "mineral-ui";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const Description = styled(Text)`
    font-size: 20px;
    text-align: center;
`;

const DescriptionBox = styled(FlexItem)`
    padding: 32px;
    background-color: #A1B5B2;
    opacity: 0.85;
    border-radius: 4px;
    align-self: center;
    flex-direction: column;
`;

interface HeroProps {
    cover_image: any;
    title: string;
    description: string;
}

const Hero = ({cover_image, title, description}: HeroProps) => (
    <BackgroundImage fluid={cover_image}
                     backgroundColor={`#A1B5B2`}
    >
        <Flex justifyContent="evenly"
              direction="row"
              height={500}
        >
            <DescriptionBox>
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