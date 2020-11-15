import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './styles'

const titlePropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>

Title.propTypes = titlePropTypes

export {
  Title
}
