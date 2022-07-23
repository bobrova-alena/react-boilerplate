import React, { useState } from 'react';
import { Plug } from '../../Layout/Plug';
import { Tooltip } from '../../Editors/Tooltip';
import { Container, Position, StyledSvgIcon, StyledSvgIconProps } from './styles';

export type SvgButtonProps = StyledSvgIconProps & {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  hidden?: boolean;
  marginLeft?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  tooltip?: string;
  wideTooltip?: boolean;
  position?: string;
  right?: string;
  top?: string;
  iconPosition?: Position;
};

export const SvgButton = (props: SvgButtonProps): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnter = () => {
    setShowTooltip(true);
  };
  const onMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      {!props.hidden ? (
        <Container
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          top={props.top}
          right={props.right}
          position={props.position}>
          <StyledSvgIcon
            src={`/svg/${props.name}.svg`}
            variant={props.variant}
            disabled={props.disabled}
            onClick={props.onClick}
            size={props.size}
            marginleft={props.marginLeft}
            marginright={props.marginRight}
            marginbottom={props.marginBottom}
            margintop={props.marginTop}
            mode={props.mode}
            iconposition={props.iconPosition}
          />
          {props.tooltip && (
            <Tooltip visible={showTooltip} wide={props.wideTooltip}>
              {props.tooltip}
            </Tooltip>
          )}
        </Container>
      ) : (
        <Plug
          width={props.size}
          height={props.size}
          marginLeft={props.marginLeft}
          marginRight={props.marginRight}
          marginBottom={props.marginBottom}
          marginTop={props.marginTop}
        />
      )}
    </>
  );
};
