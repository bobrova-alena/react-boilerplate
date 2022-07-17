import { theme } from '../../../theme';

export type StyledButtonVariant = 'primary' | 'secondary' | 'tertiary';

type StyledButtonProps = {
  disabled?: boolean;
  raised?: boolean;
  variant?: StyledButtonVariant;
};

export const getColor = (props: StyledButtonProps): string => {
  switch (props.variant) {
    case 'secondary':
      return props.disabled ? theme.colors.accent40 : theme.colors.accent;
    case 'tertiary':
      return props.disabled ? theme.colors.lightGray : theme.colors.baseColor;
    default:
      return theme.colors.white;
  }
};

export const getBackground = (props: StyledButtonProps): string => {
  switch (props.variant) {
    case 'secondary':
      return props.raised ? theme.colors.white : theme.colors.accent08;
    case 'tertiary':
      return props.disabled ? theme.colors.white : theme.colors.porcelain;
    default:
      return props.disabled ? theme.colors.accent40 : theme.colors.accent;
  }
};

export const getHoveredBackground = (props: StyledButtonProps): string => {
  switch (props.variant) {
    case 'secondary':
      return props.disabled ? theme.colors.white : theme.colors.accent08;
    case 'tertiary':
      return props.disabled ? theme.colors.white : theme.colors.porcelain;
    default:
      return props.disabled ? theme.colors.accent40 : theme.colors.accent;
  }
};

export const getBoxShadow = (props: StyledButtonProps): string => {
  const raised = props.raised && !props.disabled;
  if (props.variant === 'primary' || !props.variant) {
    return raised ? `0px 8px 8px ${theme.colors.accent16}` : 'none';
  }

  return raised ? theme.shadow.base : 'none';
};
