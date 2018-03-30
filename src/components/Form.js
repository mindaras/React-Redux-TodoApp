import React from 'react';
import '../styles/Form.css';
import Cleave from 'cleave.js/react';

const Form = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
    props.type === 'add' ? props.handleAdd() : props.handleEdit();
  }

  function inputChange(e) {
    props.handleChange(e.target.name, e.target.value);
  }

  return (
    <div className={props.state ? 'form-container active' : 'form-container'}>
      <div className="form-close" onClick={props.toggleForm}>X</div>
      <h3 className="form-title">{props.type === 'add' ? 'Add a todo' : 'Edit todo'}</h3>
      <form className="form" onSubmit={handleSubmit} >
        <label className="form-label">
          Time:
          <Cleave name="time" maxLength="5" className="form__input"
                  placeholder="Format: hh:mm"
                  value={props.time}
                  options={{numericOnly: true, delimiter: ':' , blocks: [2, 2]}}
                  autoComplete="off"
                  onChange={inputChange} />
        </label>
        <label className="form-label">
          Task:
          <input name="task" type="text" className="form__input"
                 maxLength="25"
                 placeholder="Short task"
                 value={props.task}
                 autoComplete="off"
                 onChange={inputChange} />
        </label>
        <label className="form-label">
          Image url:
          <input name="img" type="text" className="form__input" placeholder="Default image"
                 value={props.img}
                 autoComplete="off"
                 onChange={inputChange} />
        </label>
        <input type="submit" value="submit" className="form__button" />
      </form>
    </div>
  );
}

export default Form;
