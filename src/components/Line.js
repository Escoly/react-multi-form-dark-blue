import styled, { css } from 'styled-components'

const Line = styled.div`
  height: 1.5px;
  background-color: #004a6b;
  flex: 1;
  transition: all 0.4s;

  ${(props) =>
    props.complete &&
    css`
      background-color: ${(props) => props.accentColor || '#24a19c'};
      height: 2px;
    `}
`

export default Line
