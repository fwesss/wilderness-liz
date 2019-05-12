import * as React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";
import {Box, Text} from "mineral-ui";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import colors from "../utils/colors";

const ContentThumbFigure = styled(Box)`
    position: relative;
    margin: 0 1%;
    text-align: center;
`;

const ImgContainer = styled(Box)`
    overflow: hidden;
`;

const ContentThumbImg = styled(Img)`
    position: relative;
    display: block;
    min-height: 100%;
    max-width: none;
    opacity: 0.8;
    transition: opacity 1s, transform 1s;
    backface-visibility: hidden;
    @media (hover: hover) {
        &:hover {
            transform: scale3d(1.1, 1.1, 1);
        }
    }
`;

const ContentType = styled(Text)`
    margin-top: 2vh;
    font-size: 1.5em;
`;

const Blog = styled(Link)`
    color: ${colors.pink[8]};
`;

const Trips = styled(Link)`
    color: ${colors.yellow[8]};
`;

export default class ContentThumb extends React.Component {
    render() {
        let {cover_image, title, description, link, content_type, date, height} = this.props;
        return (
            <ContentThumbFigure as="figure">
                <ImgContainer height={height}>
                    <Link to={link}>
                        <ContentThumbImg fluid={cover_image}/>
                    </Link>
                </ImgContainer>
                <ContentType as="h3">
                    {content_type === "blog-post" ?
                        <Blog to={"/blog"}>Blog</Blog> :
                        <Trips to={"/trips"}>Trip</Trips>}
                </ContentType>
                <Text as="h2">
                    <Link to={link}>
                        {title}
                    </Link>
                </Text>
                <Text appearance="mouse">
                    {date}
                </Text>
                <Text>
                    {description}
                </Text>
            </ContentThumbFigure>
        );
    }
}

ContentThumb.propTypes = {
    cover_image: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.number,
    link: PropTypes.string,
    content_type: PropTypes.string,
    date: PropTypes.string
};