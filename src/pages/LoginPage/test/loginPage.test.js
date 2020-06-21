import React from 'react';
import { render, fireEvent, wait, act } from '@testing-library/react';
import 'mutationobserver-shim';
import LoginPage from '../LoginPage';

global.MutationObserver = window.MutationObserver;

test('display wrong email error',  async() => {
     const {getByTestId} = render(<LoginPage />);

    fireEvent.change(getByTestId('email'), {
        target: {value: 'wrong email'},
    })

    act(() => {
        fireEvent.click(getByTestId('submit'))
    })

    await wait(() =>
      expect(getByTestId('emailError')).toBeTruthy()
    )
})

test('display wrong password format error',  async() => {
    const {getByTestId} = render(<LoginPage />);

    fireEvent.change(getByTestId('password'), {
        target: {value: 'wrong email'},
    })

     act(() => {
        fireEvent.click(getByTestId('submit'))
    })
    await wait(() =>
      expect(getByTestId('passwordError')).toBeTruthy()
    )
})
