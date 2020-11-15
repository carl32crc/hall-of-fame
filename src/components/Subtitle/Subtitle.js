import React from 'react'
import PropTypes from 'prop-types'
import { StyledSubtitle } from './styles'

const subtitlePropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const Subtitle = ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>

Subtitle.propTypes = subtitlePropTypes

export {
  Subtitle
}
