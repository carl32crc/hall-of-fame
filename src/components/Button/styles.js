import styled from 'styled-components'

import { COLORS } from 'global-styles/colors'

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 0.35em 1.2em;
  border-radius: 0.12em;
  font-weight: 300;
  background-color: ${COLORS.HALL_OF_FAME_GREEN};
  color: ${COLORS.HALL_OF_FAME_BLACK};
  font-size: 14px;
  transition: all 0.2s;
  &:hover {
    background-color: ${COLORS.HALL_OF_FAME_WHITE};
  }
`
