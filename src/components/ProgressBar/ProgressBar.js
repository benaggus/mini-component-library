/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--padding': '0',
    '--wrapperBorderRadius': 4 + 'px',
    '--barBorderRadius': 4 + 'px',
    '--height': 8 + 'px',
  },
  medium: {
    '--padding': '0',
    '--wrapperBorderRadius': 4 + 'px',
    '--barBorderRadius': 4 + 'px',
    '--height': 12 + 'px',
  },
  large: {
    '--padding': '4px',
    '--wrapperBorderRadius': 8 + 'px',
    '--barBorderRadius': 4 + 'px',
    '--height': 16 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper style={styles} role="progressbar" aria-valuenow={value}>
      <VisuallyHidden>{value}</VisuallyHidden>
      <Bar value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--wrapperBorderRadius);
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(p) => p.value + '%'};
  background-color: ${COLORS.primary};
  height: var(--height);
  border-top-left-radius: var(--barBorderRadius);
  border-bottom-left-radius: var(--barBorderRadius);
  border-top-right-radius: ${(p) =>
    p.value > 99 ? 'calc(var(--barBorderRadius)*' + (p.value - 99) + ')' : 0};
  border-bottom-right-radius: ${(p) =>
    p.value > 99 ? 'calc(var(--barBorderRadius)*' + (p.value - 99) + ')' : 0};
`;

export default ProgressBar;
