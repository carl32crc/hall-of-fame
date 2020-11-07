import React from 'react'
import PropTypes from 'prop-types'

const titlePropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const Title = ({ children }) => <h1>{children}</h1>

Title.propTypes = titlePropTypes
