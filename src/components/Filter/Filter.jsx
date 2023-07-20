import React from 'react';
import { FormContainer, Input, Label } from "components/Form/Form.styled";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {

const value = useSelector(selectFilter);
const dispatch = useDispatch();

const handleFilterChange = (e) => {
    const normalizedValue = e.target.value.toLowerCase();
    dispatch(changeFilter(normalizedValue));
  };

  return (
    <FormContainer>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        value={value}
        onChange={handleFilterChange}
      />
    </FormContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;