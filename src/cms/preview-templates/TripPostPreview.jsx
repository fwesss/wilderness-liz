import React from 'react'
import PropTypes from 'prop-types'
import {TripPostTemplate} from '../../templates/trip-page'

const TripPostPreview = ({entry, widgetFor}) => (
    <TripPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
        coverImage={entry.getIn(['data', 'coverImage'])}
    />
);

TripPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default TripPostPreview
