import React, { useState } from 'react';
import { CgPlayListAdd } from 'react-icons/cg';

function TodoForm(props) {
  const [input, setInput] = useState('');
  const handelChange = (e) => {
    setInput(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form className="form" onSubmit={handelSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add...."
        value={input}
        name="input"
        onChange={handelChange}
      />
      <button className="form-button" type="submit">
        <CgPlayListAdd />
      </button>
    </form>
  );
}

export default TodoForm;
