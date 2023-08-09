import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <DropDownWrapper>
      <DropDown value={value} onChange={onChange}>
        {children}
      </DropDown>
      <DropDownLabel>
        {displayedValue}
        <DropDownIcon id="chevron-down" strokeWidth={2} size={24} />
      </DropDownLabel>
    </DropDownWrapper>
  );
};

const DropDown = styled.select`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  appearance: none;
`;
const DropDownWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};
  &:focus-within {
    outline: 2px solid;
  }
`;

const DropDownLabel = styled.div`
  padding: 12px 16px;
  font-size: 1rem;
  ${DropDown}:hover + & {
    color: ${COLORS.black};
  }
`;

const DropDownIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
`;

export default Select;
