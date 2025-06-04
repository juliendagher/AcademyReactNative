import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {InCartProduct} from '../InCartProduct';
import {useCartStore} from '../../../stores/cart';
import {ThemeProvider} from '../../../hooks/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import '@testing-library/jest-native/extend-expect';

const mockAsyncStorage = require('@react-native-async-storage/async-storage/jest/async-storage-mock');

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('../../../stores/cart', () => ({
  useCartStore: jest.fn(),
}));

const mockIncrement = jest.fn();
const mockDecrement = jest.fn();
const mockRemove = jest.fn();

const product = {
  id: 'p1',
  name: 'Mock Product',
  quantity: 2,
};

// Wrapper for gesture support
const wrapper = ({children}: {children: React.ReactNode}) => (
  <GestureHandlerRootView>
    <ThemeProvider>{children}</ThemeProvider>
  </GestureHandlerRootView>
);

describe('<InCartProduct />', () => {
  beforeEach(() => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      increment: mockIncrement,
      decrement: mockDecrement,
      remove: mockRemove,
    });
    jest.clearAllMocks();
  });

  it('renders product name and quantity', () => {
    const {getByText} = render(<InCartProduct {...product} />, {wrapper});
    expect(getByText('Mock Product')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
  });

  it('calls increment and decrement functions', () => {
    const {getByText} = render(<InCartProduct {...product} />, {wrapper});
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('-'));
    expect(mockIncrement).toHaveBeenCalledWith('p1');
    expect(mockDecrement).toHaveBeenCalledWith('p1');
  });

  it('calls remove when delete is pressed after swipe', () => {
    const {getByText} = render(<InCartProduct {...product} />, {wrapper});
    act(() => {
      // Directly trigger the button since swipe gestures are tricky in tests
      fireEvent.press(getByText('Delete'));
    });
    expect(mockRemove).toHaveBeenCalledWith('p1');
  });
});
