import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import BaseInput from '../BaseInput';

const mockCallback = jest.fn(e => e);

const setup = () => {
  const utils = render(
    <BaseInput
      name="firstName"
      label="First Name"
      type="text"
      onChange={mockCallback}
    />
  );
  const input = utils.getByTestId('baseInput');
  const label = utils.getByTestId('baseInputLabel');
  return {
    input,
    label,
    ...utils,
  };
};

afterEach(cleanup);

test('Should call mockCallback on text input', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'Hello!' } });
  fireEvent.change(input, { target: { value: 'World!' } });
  expect(mockCallback.mock.calls.length).toBe(2);
});

test('Should contain proper inner html and htmlFor attribute', () => {
  const { label } = setup();
  expect(label.innerHTML).toBe('First Name');
  expect(label.htmlFor).toBe('firstName');
});

test('Should match snapshot', () => {
  const output = renderer.create(
    <BaseInput
      name="firstName"
      label="First Name"
      type="text"
      onChange={() => {}}
    />
  );
  expect(output.toJSON()).toMatchSnapshot();
});
