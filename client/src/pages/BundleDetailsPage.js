import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class BundleDetailsPage extends Component {
    render() {
        return (
            <div>
                BundleDetailsPage Page
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BundleDetailsPage);
