import styled from 'styled-components';
import {
  CompactPopupCss,
  PopupCss,
  PopupPropsBase,
} from 'components/DropDowns/styledCss/dropDown.styles';

export type IconDropDownVariant = 'Filter' | 'Add' | 'DropDown';

type PopupProps = PopupPropsBase & {
  compact?: boolean;
};

export const Popup = styled.div<PopupProps>`
  top: ${props => (props.compact ? '26px' : '30px')};
  ${CompactPopupCss}
  ${PopupCss}
`;
