import React, { ForwardedRef, useEffect, useMemo, useRef, useState } from 'react';
import { Container } from 'components/DropDowns/styledCss/dropDown.styles';
import { SvgButton } from 'components/Editors/SvgButton';
import { List } from 'components/Editors/List';
import { useForwardedRef } from 'src/hooks/useForwardedRef';
import { KeyValueItem } from 'src/services/filterService/api';
import { IconDropDownVariant, Popup } from './styles';

export type IconDropDownProps = {
  items?: Array<KeyValueItem>;
  selectedKey?: string;
  width?: string;
  onSelection?: (key?: string) => void;
  marginTop?: string;
  marginRight?: string;
  padding?: string;
  readonly?: boolean;
  clearAllowed?: boolean;
  compact?: boolean;
  variant?: IconDropDownVariant;
  iconMarginLeft?: string;
  icon?: string;
  iconSize?: string;
  filtrationAllowed?: boolean;
};

export const IconDropDown = React.forwardRef(
  (props: IconDropDownProps, ref: ForwardedRef<HTMLElement>): JSX.Element => {
    const [showPopup, setShowPopup] = useState(false);
    const containerRef = useForwardedRef(ref);
    const popupRef = useRef<HTMLDivElement>(null);
    const iconName = useMemo(() => props.icon ?? 'expand', [props.icon]);

    useEffect(() => {
      document.addEventListener('mousedown', handleClick);

      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFilterClick = () => {
      if (!props.readonly) {
        setShowPopup(!showPopup);
      }
    };

    const onItemClick = (key?: string) => {
      if (props.onSelection) {
        props.onSelection(key);
      }
      setShowPopup(false);
      popupRef.current?.scroll(0, 0);
    };

    const handleClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        containerRef.current !== null &&
        !(containerRef.current as HTMLElement).contains(e.target)
      ) {
        setShowPopup(false);
      }
    };

    const closePopup = () => {
      setShowPopup(false);
    };

    return (
      <Container
        ref={containerRef}
        marginTop={props.marginTop}
        marginRight={props.marginRight}>
        <SvgButton
          name={iconName}
          size={props.iconSize ?? '13px'}
          marginLeft={props.iconMarginLeft ?? '5px'}
          onClick={onFilterClick}
        />
        <Popup visible={showPopup} ref={popupRef} compact={props.compact}>
          <List
            selectedKey={props.selectedKey}
            onSelect={onItemClick}
            compact={props.compact}
            minWidth={'150px'}
            clearAllowed={props.clearAllowed}
            items={props.items}
            onInfoClick={closePopup}
            filtrationAllowed={props.filtrationAllowed}
          />
        </Popup>
      </Container>
    );
  }
);

IconDropDown.displayName = 'IconDropDown';
