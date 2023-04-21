import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote((prevItems) => {
      return { ...prevItems, [name]: value };
    });
    // console.log(note);
  }
  function onSubmitEvent(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmitEvent}>
        <input
          onChange={onChangeHandler}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={onChangeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={() => {
            props.addNote(note);
            setNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
