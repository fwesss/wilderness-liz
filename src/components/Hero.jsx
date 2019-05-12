import * as React from "react";

import {Flex, FlexItem, Text} from "mineral-ui";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import * as PropTypes from "prop-types";
import colors from "../utils/colors"

const Description = styled(Text)`
    font-size: 18px;
    text-align: center;
`;

const DescriptionBox = styled(FlexItem)`
    margin: 32px;
    padding: 32px;
    background-color: ${colors.brand};
    opacity: 0.85;
    border-radius: 4px;
    align-self: center;
    flex-direction: column;
`;

class Hero extends React.Component {
    render() {
        let {cover_image, title, description, height} = this.props;
        return (
            <BackgroundImage fluid={cover_image}
                             backgroundColor={colors.brand}>
                <Flex justifyContent="evenly"
                      direction="row"
                      height={height}
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
    }
}

Hero.propTypes = {
    cover_image: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    height: PropTypes.any
};

export default Hero