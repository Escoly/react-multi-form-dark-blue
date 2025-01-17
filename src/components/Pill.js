import styled, { css } from 'styled-components'

const Pill = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: #004a6b;
  transition: all 0.4s;

  ${(props) =>
    props.label &&
    css`
    &:after {
      position: absolute;
      content: '${props.label}';
      width: max-content;
      color: ${(props) =>
        props.active || props.complete
          ? props.textColor || props.textColor
          : props.textColor};
      font-weight: ${(props) => (props.active ? 600 : 400)};
      text-transform: capitalize;
      font-size: 11px;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
    }
  `}

  ${(props) =>
    props.active &&
    css`
      width: 20px;
      height: 20px;
      background-color: ${props.accentColor || props.accentColor};

      &:before {
        position: absolute;
        content: '';
        background-color: #fff;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}

  ${(props) =>
    props.complete &&
    css`
      width: 20px;
      height: 20px;
      background-color: ${props.accentColor || props.accentColor};

      &:before {
        position: absolute;
        content: '✓';
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`

export default Pill
