import React, { useState } from "react";
export default function InputTodo() {
  const [title, setTitle] = useState();
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };
  return (
    <>
      <div className="form-container">
        How are you doing?
        <div>
          <span className="rounded-box1">Good</span>
          <span className="rounded-box2">Bad</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    </>
  );
}
