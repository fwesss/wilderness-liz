import * as React from "react";

import {Text, Box} from "mineral-ui";
import Img from "gatsby-image";
import "./Hero.css";

export default class Hero extends React.Component {
    render() {
        let {cover_image, title, description, height} = this.props;
        return (
            <Box as="figure" className="effect-steve" height={height}>
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