import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Quantifier from './Quantifier';

describe('Quantifier', () => {
  // Tests that clicking the "-" button reduces the value by 1 and calls handleUpdateQuantity with "decrease" operation
  it('should reduce value by 1 and call handleUpdateQuantity with "decrease" operation when "-" button is clicked', () => {
    const productId = '123';
    const handleUpdateQuantity = jest.fn();
    const removeProductCallback = jest.fn();
    const { getByRole } = render(
      <Quantifier
        productId={productId}
        handleUpdateQuantity={handleUpdateQuantity}
        removeProductCallback={removeProductCallback}
      />,
    );
    const minusButton = getByRole('button', { name: '-' });
    fireEvent.click(minusButton);
    expect(handleUpdateQuantity).toHaveBeenCalledWith(productId, 'decrease');
    expect(getByRole('spinbutton')).toHaveValue(0);
  });

  // Tests that clicking the "+" button increases the value by 1 and calls handleUpdateQuantity with "increase" operation
  it('should increase value by 1 and call handleUpdateQuantity with "increase" operation when "+" button is clicked', () => {
    const productId = '123';
    const handleUpdateQuantity = jest.fn();
    const removeProductCallback = jest.fn();
    const { getByRole } = render(
      <Quantifier
        productId={productId}
        handleUpdateQuantity={handleUpdateQuantity}
        removeProductCallback={removeProductCallback}
      />,
    );
    const plusButton = getByRole('button', { name: '+' });
    fireEvent.click(plusButton);
    expect(handleUpdateQuantity).toHaveBeenCalledWith(productId, 'increase');
    expect(getByRole('spinbutton')).toHaveValue(2);
  });

  // Tests that changing the value in the input field updates the value state and calls setValue with the new value
  it('should update value state and call setValue with new value when input field is changed', () => {
    const productId = '123';
    const handleUpdateQuantity = jest.fn();
    const removeProductCallback = jest.fn();
    const { getByRole } = render(
      <Quantifier
        productId={productId}
        handleUpdateQuantity={handleUpdateQuantity}
        removeProductCallback={removeProductCallback}
      />,
    );
    const inputField = getByRole('spinbutton');
    fireEvent.change(inputField, { target: { value: '5' } });
    expect(inputField).toHaveValue(5);
  });

  // Tests that when the value is 1 and "-" button is clicked, removeProductCallback is called with the productId
  it('should call removeProductCallback with productId when value is 1 and "-" button is clicked', () => {
    const productId = '123';
    const handleUpdateQuantity = jest.fn();
    const removeProductCallback = jest.fn();
    const { getByRole } = render(
      <Quantifier
        productId={productId}
        handleUpdateQuantity={handleUpdateQuantity}
        removeProductCallback={removeProductCallback}
      />,
    );
    const minusButton = getByRole('button', { name: '-' });
    fireEvent.click(minusButton);
    expect(removeProductCallback).toHaveBeenCalledWith(productId);
  });

  // Tests that when the value is 0 and "-" button is clicked, removeProductCallback is called with the productId
  it('should call removeProductCallback with productId when value is 0 and "-" button is clicked', () => {
    const productId = '123';
    const handleUpdateQuantity = jest.fn();
    const removeProductCallback = jest.fn();
    const { getByRole } = render(
      <Quantifier
        productId={productId}
        handleUpdateQuantity={handleUpdateQuantity}
        removeProductCallback={removeProductCallback}
      />,
    );
    const minusButton = getByRole('button', { name: '-' });
    fireEvent.click(minusButton);
    expect(removeProductCallback).toHaveBeenCalledWith(productId);
  });

  // Tests that setValue is called with a negative value
  it('should call setValue with a negative value when "-" button is clicked and value is 0', () => {
    const productId = '123';
    const handleUpdateQuantity = jest.fn();
    const removeProductCallback = jest.fn();
    const { getByRole } = render(
      <Quantifier
        productId={productId}
        handleUpdateQuantity={handleUpdateQuantity}
        removeProductCallback={removeProductCallback}
      />,
    );
    const minusButton = getByRole('button', { name: '-' });
    fireEvent.click(minusButton);
    expect(getByRole('spinbutton')).toHaveValue(-1);
  });
});
