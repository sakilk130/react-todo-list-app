import React, { useState, useEffect, useRef } from 'react';
import { CgPlayListAdd } from 'react-icons/cg';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputFocus = useRef();
  useEffect(() => {
    inputFocus.current.focus();
  });

  const handelChange = (e) => {
    setInput(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000 + 1),
      text: input,
    });
    setInput('');
  };

  return (
    <form className="form" onSubmit={handelSubmit}>
      {props.edit ? (
        <>
          <input
            className="input edit"
            type="text"
            placeholder="Edit..."
            value={input}
            name="text"
            onChange={handelChange}
            ref={inputFocus}
          />
          <button className="form-button edit" type="submit">
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            className="input"
            type="text"
            placeholder="Add...."
            value={input}
            name="text"
            onChange={handelChange}
            ref={inputFocus}
          />
          <button className="form-button" type="submit">
            <CgPlayListAdd />
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
