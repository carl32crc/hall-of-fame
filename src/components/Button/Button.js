import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const buttonPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const Button = (props) => <StyledButton {...props}> {props.children} </StyledButton>

Button.propTypes = buttonPropTypes

export {
  Button
}
