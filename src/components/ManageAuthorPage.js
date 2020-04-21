import React, { useState, useEffect } from "react";
import AuthorForm from "./AuthorForm";
import AuthorStore from "../stores/AuthorStore";
import * as authorActions from "../actions/authorActions";
import { toast } from "react-toastify";
import PageNotFound from "./PageNotFound";

const ManageAuthorPage = (props) => {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState(AuthorStore.getAuthors());
  const [author, setAuthor] = useState({
    id: "",
    name: "",
  });

  useEffect(() => {
    AuthorStore.addChangeListener(onChange);
    const id = props.match.params.id;
    if (authors.length === 0) {
      authorActions.loadAuthors();
    } else if (id) {
      setAuthor(AuthorStore.getAuthorById(id));
    }
    return () => AuthorStore.removeChangeListener(onChange);
  }, [authors.length, props.match.params.id]);

  function onChange() {
    setAuthors(AuthorStore.getAuthors());
  }

  function handleChange(event) {
    const updatedAuthor = {
      ...author,
      [event.target.name]: event.target.value,
    };
    setAuthor(updatedAuthor);
  }

  function formIsValid() {
    const _errors = {};

    if (!author.name) _errors.name = "Name is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    authorActions.saveAuthor(author).then(() => props.history.push("/authors"));
    toast.success("Author Saved.");
  }

  if (author === undefined) return <PageNotFound />;
  else {
    return (
      <>
        <h2>Manage Author</h2>
        <AuthorForm
          errors={errors}
          author={author}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </>
    );
  }
};

export default ManageAuthorPage;
