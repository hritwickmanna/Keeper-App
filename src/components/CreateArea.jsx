import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [state, setState] = useState(false);

  function currentState() {
    setState(true);
  }

  return (
    <div>
      <form className="create-note">
        {state ? (
          <input
            name="title"
            onChange={handleChange}
            onClick={currentState}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={currentState}
          value={note.content}
          placeholder="Take a note..."
          rows={state ? 3 : 1}
        />
        <Zoom in={state ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
