import { useCallback, useEffect, useState } from "react";

import EditorButtons from "./components/EditorButtons";
import EditorCheckbox from "./components/EditorCheckbox";
import EditorContainer from "./components/EditorContainer";
import EditorPrimaryButton from "./components/EditorPrimaryButton";
import EditorWrapper from "./components/EditorWrapper";

import markdownEngine from "../engine/markdown.engine";
import useCachedState from "../hooks/useCachedState";

function App() {
  const [markdown, setMarkdown] = useCachedState("markdown-cache", "");
  const [result, setResult] = useState(markdownEngine.render(markdown));
  const [liveRender, setLiveRender] = useState(false);

  const handleChangeMarkdown = useCallback((e) => {
    setMarkdown(e.target.value);
  }, [setMarkdown]);

  const handleRenderButton = useCallback(() => {
    setResult(markdownEngine.render(markdown));
  });

  const toggleLiveRender = useCallback(() => {
    setLiveRender(!liveRender);
  }, [liveRender, setLiveRender]);

  useEffect(() => {
    if(liveRender) {
      setResult(markdownEngine.render(markdown));
    }
  }, [markdown, liveRender]);

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
          dangerouslySetInnerHTML={{__html: result}}
        />
      </EditorWrapper>
      <EditorButtons>
        {!liveRender && (
          <EditorPrimaryButton
          type="button"
          onClick={handleRenderButton}
          data-testid="render-button"
        >Render</EditorPrimaryButton>
        )}
      </EditorButtons>
      <EditorCheckbox
        label="Live render"
        value={liveRender}
        onChange={toggleLiveRender}
        testId="live-render-toggle"
      />
    </EditorContainer>
  );
}

export default App;
