function EditorCheckbox({ label, value, onChange, testId }) {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} data-testid={testId} />
      {label}
    </label>
  );
}

export default EditorCheckbox;

