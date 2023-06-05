import { useCallback, useState } from "react";

import EditorButtons from "./components/EditorButtons";
import EditorContainer from "./components/EditorContainer";
import EditorPrimaryButton from "./components/EditorPrimaryButton";
import EditorWrapper from "./components/EditorWrapper";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [result, setResult] = useState("");

  const handleChangeMarkdown = useCallback((e) => {
    setMarkdown(e.target.value);
  }, [setMarkdown]);

  const handleRenderButton = useCallback(() => {
    setResult(markdown);
  });

  return (
    <EditorContainer>
      <EditorWrapper>
        <textarea
          className="editor__editor"
          value={markdown}
          onChange={handleChangeMarkdown}
          data-testid="editor"
        />
        <div
          className="editor__result"
          data-testid="editor-result"
        >
          {result}
        </div>
      </EditorWrapper>
      <EditorButtons>
        <EditorPrimaryButton
          type="button"
          onClick={handleRenderButton}
          data-testid="render-button"
        >Render</EditorPrimaryButton>
      </EditorButtons>
    </EditorContainer>
  );
}

export default App;
