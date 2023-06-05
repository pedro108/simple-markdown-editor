import styled from "styled-components";

const EditorWrapper = styled.div`
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 1rem;

  .editor__editor {
    width: 100%;
  }

  .editor__result {
    border: 1px solid black;
    background-color: white;
    width: 100%;
  }
`;

export default EditorWrapper;
