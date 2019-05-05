import React from 'react'
import Layout from '../components/Layout'
import InstagramCarousel from '../components/InstagramCarousel'
import HighlightRoll from "../components/HighlightRoll";
import {Box} from "mineral-ui";

export const IndexPageTemplate = () => (
    <Layout>
        <Box>
            <header>
                <HighlightRoll/>
            </header>

            <main id="page-wrap">
                <div>
                    <InstagramCarousel/>
                </div>
            </main>
        </Box>
    </Layout>
);

export default IndexPageTemplate