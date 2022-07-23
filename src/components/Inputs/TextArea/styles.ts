import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import styled, { css } from 'styled-components';
import { theme } from 'src/theme';

export type TextAreaMode =
  | 'normal'
  | 'inbuilt'
  | 'compact'
  | 'rounded'
  | 'without-borders';

export type StyledTextAreaProps = LayoutProps &
  SpaceProps & {
    mode?: TextAreaMode;
    flexGrow?: number;
  };

const RoundedTextAreaCss = css`
  padding: ${theme.space.base12};
  line-height: 18px;
  margin-top: 6px;
  border: 1px solid ${theme.colors.altoGray};
  border-radius: 5px;

  :focus-visible {
    outline: none;
    border-color: ${theme.colors.accent40};
  }

  :hover {
    border-color: ${theme.colors.accent40};
  }
`;

const WithoutBordersTextAreaCss = css`
  padding: 5px 0px 0px 0px;
  line-height: 24px;
  border: none;

  :focus-visible {
    outline: none;
  }
`;

const CompactTextAreaCss = css`
  padding-top: 1px;
  padding-bottom: 8px;
  line-height: 18px;
  margin-top: 6px;
  border: 1px solid transparent;
  border-bottom-color: ${theme.colors.altoGray};

  :focus-visible {
    outline: none;
    border-color: ${theme.colors.accent40};
    border-radius: 5px;
  }

  :hover {
    border-color: ${theme.colors.accent40};
    border-radius: 5px;
  }
`;

const TextAreaCss = css`
  padding: 4px 0px 0px 0px;
  line-height: 24px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
  border-bottom-color: ${theme.colors.altoGray};

  :focus-visible {
    outline: none;
    border-color:${theme.colors.accent40};
  }

  :hover {
    border-color:${theme.colors.accent40};
  }
`;

const InbuiltTextAreaCss = css`
  border: 1px solid transparent;
  padding-top: 1px;
  line-height: 24px;

  :focus-visible {
    outline: none;
  }
`;

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  ${props => props.mode === 'compact' && CompactTextAreaCss};
  ${props => props.mode === 'inbuilt' && InbuiltTextAreaCss};
  ${props => props.mode === 'rounded' && RoundedTextAreaCss};
  ${props => props.mode === 'without-borders' && WithoutBordersTextAreaCss};
  ${props =>
    props.mode !== 'compact' &&
    props.mode !== 'inbuilt' &&
    props.mode !== 'rounded' &&
    props.mode !== 'without-borders' &&
    TextAreaCss};
  
  font-family: ${theme.font.family};
  font-size: ${theme.fontSizes.base};
  resize: none;
  flex-grow: ${props => props.flexGrow};
  
  ::placeholder {
    color: ${theme.colors.lightGray60};
  }

  ${layout}
  ${space}
`;
