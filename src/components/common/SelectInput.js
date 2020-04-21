import React from "react";
import PropTypes from "prop-types";

export default function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor="author">{props.label}</label>
      <div className="field">
        <select
          name={props.name}
          id={props.id}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        >
          <option value="" />
          {props.authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  error: "",
};
