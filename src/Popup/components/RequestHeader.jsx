import React from "react";

export default function RequestHeader(props) {

  function handleNameChange(e) {
    e.preventDefault();
    props.editHeader(props.id, e.target.value, props.value);
  }

  function handleValueChange(e) {
    e.preventDefault();
    props.editHeader(props.id, props.name, e.target.value);
  }


  const editingTemplate = (
    <form className="stack-small">
      <div className="form-group flex">
        <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            checked={props.enabled}
            onChange={() => props.toggleHeaderEnabled(props.id)}
          />
          <label className="request-header-label" htmlFor={props.id} />

        </div>
        <input
          id={props.id + '-name'}
          className="request-header-text"
          type="text"
          value={props.name}
          onChange={handleNameChange}
        />
        <input
          id={props.id + '-value'}
          className="request-header-text"
          type="text"
          value={props.value}
          onChange={handleValueChange}
        />
        <div className="btn-group ml-10">
          <button
            type="button"
            className="btn btn__danger w-50"
            onClick={() => props.deleteHeader(props.id)}
          >
            Del
          </button>
      </div>
      </div>
    </form>
  );

  return <li className="request-header">{editingTemplate}</li>;
}
