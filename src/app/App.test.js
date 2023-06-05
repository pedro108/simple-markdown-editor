import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  it('Matches DOM snapshot', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Copies the result from the editor to the result box when Render button is clicked', () => {
    const { getByTestId } = render(<App />);
    const testValue = "Lorem ipsum dolor.";

    const editor = getByTestId("editor");
    const result = getByTestId("editor-result");
    const button = getByTestId("render-button");

    fireEvent.change(editor, { target: { value: testValue } });
    fireEvent.click(button);

    console.log(result.innerHTML);
    expect(result.innerHTML).toEqual(testValue);
  });
});

