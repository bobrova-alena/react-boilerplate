import styled, { css } from 'styled-components';
import { theme } from 'src/theme';
import { ReactSVG } from 'react-svg';

type StyledSvgIconMode = 'Normal' | 'Rotation';
export type Position = 'Normal' | 'Rotated';

export type StyledSvgIconProps = {
  variant?: 'primary' | 'danger' | 'red' | 'accent';
  disabled?: boolean;
  size?: string;
  marginleft?: string;
  marginright?: string;
  marginbottom?: string;
  margintop?: string;
  mode?: StyledSvgIconMode;
  iconposition?: Position;
};

type ContainerProps = {
  position?: string;
  right?: string;
  top?: string;
};

export const Container = styled.div<ContainerProps>`
  position: ${props => props.position ?? 'relative'};
  right: ${props => props.right ?? 'unset'};
  top: ${props => props.top ?? 'unset'};
`;

const getColor = (props: StyledSvgIconProps) => {
  if (props.variant === 'red') {
    return props.disabled ? theme.colors.lightGray40 : theme.colors.red;
  } else if (props.variant === 'accent') {
    return props.disabled ? theme.colors.accent60 : theme.colors.accent;
  }

  return props.disabled ? theme.colors.lightGray40 : theme.colors.lightGray;
};

const getHoverColor = (props: StyledSvgIconProps) => {
  switch (props.variant) {
    case 'danger':
    case 'red':
      return props.disabled ? theme.colors.lightGray40 : theme.colors.red;
    default:
      return props.disabled ? theme.colors.lightGray40 : theme.colors.accent;
  }
};

const RotationCss = css`
  transition-duration: 0.4s;
  transition-property: transform;
`;

const TransformCss = css`
  transform: rotate(180deg);
`;

export const StyledSvgIcon = styled(ReactSVG)`
  margin-left: ${props => (props.marginleft ? props.marginleft : 'unset')};
  margin-right: ${props => (props.marginright ? props.marginright : 'unset')};
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : 'unset')};
  margin-top: ${props => (props.margintop ? props.margintop : 'unset')};
  
  .accent {
    fill: ${(props: StyledSvgIconProps) => getColor(props)};
  }
  
  &:hover {
    .accent {
      fill: ${(props: StyledSvgIconProps) => getHoverColor(props)};
    }
    cursor: ${props => (props.disabled ? 'unset' : 'pointer')};
    pointer-events: ${props => (props.disabled ? 'none' : 'unset')};
  }

  > div, svg {
    width: ${props => props.size || 'unset'};
    height: ${props => props.size || 'unset'};
  }

  ${props => props.mode === 'Rotation' && RotationCss};
  ${props => props.iconposition === 'Rotated' && TransformCss};
`;
