import styled from 'styled-components'
import { COLORS } from 'global-styles/colors'

export const StyledInput = styled.input`
  padding: .25rem 0;
  border: 0;
  border-bottom: 1px solid ${COLORS.HALL_OF_FAME_GREEN};
  outline: 0;
  background: transparent;
  color: ${COLORS.HALL_OF_FAME_BLACK};
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: .125rem;
  transition: all .5s cubic-bezier(.4, .25, .8, .3);
`
