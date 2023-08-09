import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--padding': '4px 0px 4px 24px',
    '--border-bottom': '1px solid ' + COLORS.black,
    '--font-size': 0.875 + 'rem',
  },
  large: {
    '--padding': '8px 0px 8px 36px',
    '--border-bottom': '2px solid ' + COLORS.black,
    '--font-size': 1.125 + 'rem',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  return (
    <InputWrapper width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon id={icon} size={size === 'small' ? 16 : 24} />
      <InputText style={styles} placeholder={placeholder} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: ${(p) => p.width + 'px'};
  color: ${COLORS.gray700};
`;

const InputIcon = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const InputText = styled.input`
  width: 100%;
  font-size: var(--font-size);
  border: none;
  padding: var(--padding);
  background: none;
  border-bottom: var(--border-bottom);
  font-weight: 700;
  &:focus {
    outline-offset: 4px;
  }
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
