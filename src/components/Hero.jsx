import * as React from "react";
import PropTypes from "prop-types";

import {Text, Box} from "mineral-ui";
import Img from "gatsby-image";
import "./Hero.css";
import styled from "@emotion/styled";


export default class Hero extends React.Component {
    render() {
        let {cover_image, title, description, height} = this.props;
        return (
            <Box as="figure" className="effect-julia" height={height}>
                <Img fluid={cover_image}/>
                <figcaption>
                    <Text as="h2">
                        {title}
                    </Text>
                    <Text as="p">
                        {description}
                    </Text>
                </figcaption>
            </Box>
        );
    }
}

Hero.propTypes = {
    cover_image: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.number
};