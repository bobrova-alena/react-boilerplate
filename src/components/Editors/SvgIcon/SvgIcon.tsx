import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { theme } from 'src/theme';
import React from 'react';
import { SpaceProps, space } from 'styled-system';

type StyledSvgIconProps = SpaceProps & {
  status?: 'success' | 'error' | 'none' | 'indication';
  size?: string;
};

export type SvgIconProps = StyledSvgIconProps & {
  name: string;
};

const getColor = (props: StyledSvgIconProps) => {
  switch (props.status) {
    case 'error':
      return theme.colors.red;
    case 'success':
      return theme.colors.accent;
    case 'indication':
      return theme.colors.white;
    default:
      return theme.colors.baseColor;
  }
};

const StyledSvgIcon = styled(ReactSVG)`
  .accent {
    fill: ${(props: StyledSvgIconProps) => getColor(props)};
  }

  > div, svg {
    width: ${props => props.size || 'unset'};
    height: ${props => props.size || 'unset'};
  }
  
  ${space}
`;

export const SvgIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <StyledSvgIcon
      src={`/svg/${props.name}.svg`}
      status={props.status}
      size={props.size}
      margin={props.margin}
    />
  );
};
