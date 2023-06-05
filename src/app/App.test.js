import { act, fireEvent, render } from '@testing-library/react';
import App from './App';
import markdownEngine from '../engine/markdown.engine';

describe('<App/>', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('Matches DOM snapshot', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Parses the result from the markdown editor to the result box when Render button is clicked', () => {
    const { getByTestId } = render(<App />);
    const markdownValue = "#Title\n##Lorem ipsum dolor.";
    const expectedResult = markdownEngine.render(markdownValue);

    const editor = getByTestId("editor");
    const result = getByTestId("editor-result");
    const button = getByTestId("render-button");

    act(() => {
      fireEvent.change(editor, { target: { value: markdownValue } });
      fireEvent.click(button);
    });

    expect(result.innerHTML).toEqual(expectedResult);
  });

  it('Removes the render button if the live render toggle is checked', () => {
    const { getByTestId } = render(<App />);

    const liveRenderToggle = getByTestId("live-render-toggle");

    expect(liveRenderToggle.checked).toBe(false);
    expect(getByTestId("render-button")).toBeTruthy();

    act(() => {
      fireEvent.click(liveRenderToggle);
    });

    expect(liveRenderToggle.checked).toBe(true);
    expect(() => getByTestId("render-button")).toThrow();
  });

  it('Renders markdown automatically if live render toggled is checked', () => {
    const { getByTestId } = render(<App />);
    const markdownValue = "#Title\n##Lorem ipsum dolor.";
    const expectedResult = markdownEngine.render(markdownValue);

    const editor = getByTestId("editor");
    const result = getByTestId("editor-result");
    const liveRenderToggle = getByTestId("live-render-toggle");

    act(() => {
      fireEvent.click(liveRenderToggle);
    });

    act(() => {
      fireEvent.change(editor, { target: { value: markdownValue } });
    });

    expect(result.innerHTML).toEqual(expectedResult);
  });

  it('Reads from localStorage cache when rendering the editor for the first time', () => {
    const markdownValue = "#Title\n##Lorem ipsum dolor.";
    const expectedResult = markdownEngine.render(markdownValue);
    window.localStorage.setItem("markdown-cache", markdownValue);

    const { getByTestId } = render(<App />);

    const result = getByTestId("editor-result");

    expect(result.innerHTML).toEqual(expectedResult);    
  });

  it('Updates the localStorage cache when markdown is changed', () => {
    const { getByTestId } = render(<App />);
    const markdownValue = "#Title\n##Lorem ipsum dolor.";

    const editor = getByTestId("editor");
    const button = getByTestId("render-button");

    act(() => {
      fireEvent.change(editor, { target: { value: markdownValue } });
      fireEvent.click(button);
    });

    expect(window.localStorage.getItem("markdown-cache")).toEqual(markdownValue);
  });
});
