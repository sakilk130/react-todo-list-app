import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [lists, setList] = useState([]);

  const addList = (list) => {
    if (!list.text || /^s*$/.test(list.text)) {
      return;
    }
    const newList = [list, ...lists];
    setList(newList);
    console.log(list, ...lists);
  };

  const editList = (listid, newvalue) => {
    if (!newvalue.text || /^s*$/.test(newvalue.text)) {
      return;
    }
    setList((prev) =>
      prev.map((item) => (item.id === listid ? newvalue : item))
    );
  };

  const deleteList = (id) => {
    const deleteA = [...lists].filter((list) => list.id !== id);
    setList(deleteA);
  };

  const completeList = (id) => {
    let editLists = lists.map((list) => {
      if (list.id === id) {
        list.isComplete = !list.isComplete;
      }
      return list;
    });
    setList(editLists);
  };

  return (
    <div>
      <TodoForm onSubmit={addList} />
      <Todo
        lists={lists}
        completeList={completeList}
        deleteList={deleteList}
        editList={editList}
      />
    </div>
  );
}

export default TodoList;
