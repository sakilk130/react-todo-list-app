import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

function Todo({ lists, completeList }) {
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
        <FaEdit />
        <MdDeleteForever />
      </div>
    </div>
  ));
}

export default Todo;
