import React from 'react';

const Form = ({setInputText, todos , setTodos , inputText ,setStatus}) => {
  //Ici je peux ecrire du code Js et fonction 
    const inputTextHandler = (e) => {
     
      setInputText(e.target.value);
    };
    
    const submitTodoHandle = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random() * 1000},
      ]);
      setInputText("");
    };

    const statusHandler = (e) => {
      setStatus(e.target.value);
    }    
    return(
        <form>
      <input 
      value = {inputText} 
      onChange={inputTextHandler}
      type="text" 
      className="todo-input"
      />
      <button onClick={submitTodoHandle} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};

export default Form;