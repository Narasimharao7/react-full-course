import React, { useState } from "react";
import "../styles.css";

// const tempList = [
//   { id: "sgjhfhmfgjhjg", text: "Hello" },
//   { id: "sgjftsghfhmfg", text: "Hello World" },
// ];

const TodosList = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({});
  const [editing, setEditing] = useState({
    isEditing: false,
    id: "",
  });

  const onChangeInput = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    // console.log(newTodo);
    setList([...list, newTodo]);
    setMessage({ text: "", id: "" });
  };

  const onClickDelete = (id) => {
    let updatedList = list.filter((each) => each.id !== id);
    setList(updatedList);
  };

  const changeEditBtn = (id) => {
    // finding the item in the list with the id, that was clicked...
    let editableItem = list.find((eachItem) => eachItem.id === id);

    setEditing({ ...editing, id: id, isEditing: true });
    setMessage({ ...message, text: editableItem.text, id: editableItem.id });
    // console.log(editableItem);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("before list", list);

    let newTodos = list.map((eachItem) => {
      if (eachItem.id === editing.id) {
        return {
          text: message.text,
          id: editing.id,
        };
      } else {
        return eachItem;
      }
    });
    console.log("AfterList", newTodos);
    setList(newTodos);
    setMessage({
      id: "",
      text: "",
    });
    setEditing({
      id: "",
      isEditing: false,
    });
  };

  const onClickRemove = () => {
    setList([]);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          className="input"
          placeholder="Eg: Wash Clothes today."
          value={message.text}
          onChange={onChangeInput}
        />
        {editing.isEditing ? (
          <button className="button" onClick={handleEdit} type="submit">
            Edit
          </button>
        ) : (
          <button className="button" onClick={handleSubmit} type="submit">
            Add
          </button>
        )}
      </form>
      <hr />
      {list.length === 0 && <h4>There no items in the List.</h4>}
      <ul className="todoList">
        {list.map((eachItem) => {
          const { id, text } = eachItem;
          return (
            <li key={id} className="todoItem">
              <span className="text">{text}</span>
              <div className="buttons">
                <button className="button" onClick={() => changeEditBtn(id)}>
                  Edit
                </button>
                <button className="button" onClick={() => onClickDelete(id)}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {list.length !== 0 && (
        <button className="button" onClick={onClickRemove}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default TodosList;
