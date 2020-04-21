import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function CoursesList(props) {
  if (props.courses.length > 0) {
    if (props.authors.length > 0) {
      props.courses.map((course) => {
        return (course.authorName = props.getAuthorById(course.authorId).name);
      });
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Tittle</th>
          <th>Author Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    props.deleteCourse(course.id);
                    toast.success("Deleted");
                  }}
                >
                  X
                </button>
              </td>
              <td>
                <Link to={`/course/${course.slug}`}>{course.title}</Link>
              </td>
              <td>{course.authorName}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CoursesList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  getAuthorById: PropTypes.func.isRequired,
};

CoursesList.defaultProps = {
  courses: [],
};
