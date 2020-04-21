import React, { useState, useEffect } from "react";
import AuthorStore from "../stores/AuthorStore";
import { loadAuthors, deleteAuthor } from "../actions/authorActions";
import { Link } from "react-router-dom";
import AuthorsList from "./AuthorsList";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState(AuthorStore.getAuthors());

  useEffect(() => {
    AuthorStore.addChangeListener(onChange);
    if (AuthorStore.getAuthors().length === 0) loadAuthors();
    return () => {
      AuthorStore.removeChangeListener(onChange);
    };
  }, [authors.length]);

  function onChange() {
    setAuthors(AuthorStore.getAuthors());
  }

  return (
    <>
      <h2>Authors</h2>
      <Link className="btn btn-primary" to="/author">
        Add Author
      </Link>
      <AuthorsList authors={authors} deleteAuthor={deleteAuthor} />
    </>
  );
}
