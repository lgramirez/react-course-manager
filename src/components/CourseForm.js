import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import AuthorStore from "../stores/AuthorStore";
import { loadAuthors } from "../actions/authorActions";
import SelectInput from "./common/SelectInput";

export default function CourseForm(props) {
  const [authors, setAuthors] = useState(AuthorStore.getAuthors());

  useEffect(() => {
    AuthorStore.addChangeListener(onChangeAuthors);
    if (AuthorStore.getAuthors().length === 0) loadAuthors();
    return () => {
      AuthorStore.removeChangeListener(onChangeAuthors);
    };
  }, [authors.length]);

  function onChangeAuthors() {
    setAuthors(AuthorStore.getAuthors());
  }

  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        label="Title"
        id="title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        error={props.errors.title}
      />

      <SelectInput
        label="Author"
        name="authorId"
        id="author"
        onChange={props.onChange}
        value={String(props.course.authorId) || ""}
        authors={authors}
        error={props.errors.authorId}
      />

      <TextInput
        label="Category"
        id="category"
        onChange={props.onChange}
        name="category"
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
