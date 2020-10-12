import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

function Todo({ lists, completeList, deleteList }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  return lists.map((list, i) => (
    <div className={list.isComplete ? 'list-row complete' : 'list-row'} key={i}>
      <div key={list.id} onClick={() => completeList(list.id)}>
        {list.text}
      </div>
      <div className="icons">
        {/* <FaEdit onClick={() => editList((id: list.id), (value: list.input))} /> */}
        <MdDeleteForever
          className="delete-icon"
          onClick={() => deleteList(list.id)}
        />
      </div>
    </div>
  ));
}

export default Todo;
