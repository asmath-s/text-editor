import { usePlateEditorRef } from "@udecode/plate";
import { useEventPlateId } from "@udecode/plate";

const useMyPlateEditorRef = (id) => usePlateEditorRef(id);

const SaveButton = () => {
  const editor = useMyPlateEditorRef(useEventPlateId());
  const getSaveValue = () => {
    console.info("editor.children", editor.children);
  };

  return (
    <>
      <button onClick={getSaveValue}>test</button>
    </>
  );
};

export default SaveButton;
