import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AuthorsList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>ID</th>
          <th>Author Name</th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map((author) => {
          return (
            <tr key={author.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    props.deleteAuthor(author.id);
                    toast.success("Deleted");
                  }}
                >
                  X
                </button>
              </td>
              <td>{author.id}</td>
              <td>
                <Link to={`/author/${author.id}`}>{author.name}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

AuthorsList.propTypes = {
  deleteAuthor: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

AuthorsList.defaultProps = {
  authors: [],
};
