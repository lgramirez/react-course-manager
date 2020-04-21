import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

export default function AuthorForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        label="ID"
        id="id"
        onChange={props.onChange}
        name="id"
        value={String(props.author.id)}
        error={props.errors.id}
        disabled
      />

      <TextInput
        label="Name"
        id="name"
        onChange={props.onChange}
        name="name"
        value={props.author.name}
        error={props.errors.name}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
