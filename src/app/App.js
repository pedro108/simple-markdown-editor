import { styled } from "styled-components";

const EditorContainer = styled.div`
  border: 1px solid black;
  background-color: #CCC;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem;
`;

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

const EditorButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

const EditorPrimaryButton = styled.button`
  background-color: #1DB954;
  color: white;
  text-transform: uppercase;
  border: 1px solid #191414;
  font-weight: bold;
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;
`;

function App() {
  return (
    <EditorContainer>
      <EditorWrapper>
        <textarea className="editor__editor" />
        <div className="editor__result"></div>
      </EditorWrapper>
      <EditorButtons>
        <EditorPrimaryButton type="button">Render</EditorPrimaryButton>
      </EditorButtons>
    </EditorContainer>
  );
}

export default App;
