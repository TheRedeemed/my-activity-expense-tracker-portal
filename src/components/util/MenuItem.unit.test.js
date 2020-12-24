import React from 'react';
import { render } from '@testing-library/react';
import MenuItem from './MenuItem';

const mockFunc = jest.fn()

it('Display a menu item with a given icon and text', () => {
    const {getByTestId, getByText} = render(<MenuItem iconName='dollar' displayText='Menu Item' func = {mockFunc} />);
    expect(getByTestId('menu-item-icon')).toBeInTheDocument();
    expect(getByText('Menu Item')).toBeInTheDocument();
});