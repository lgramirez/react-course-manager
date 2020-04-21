import React, { useState, useEffect } from "react";
import CourseStore from "../stores/CourseStore";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import AuthorStore from "../stores/AuthorStore";
import { loadAuthors } from "../actions/authorActions";

export default function CoursesPage() {
  const [courses, setCourses] = useState(CourseStore.getCourses());
  const [authors, setAuthors] = useState(AuthorStore.getAuthors());

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    if (CourseStore.getCourses().length === 0) {
      loadCourses();
    }
    return () => CourseStore.removeChangeListener(onChange);
  }, [courses.length]);

  function onChange() {
    setCourses(CourseStore.getCourses());
  }

  useEffect(() => {
    AuthorStore.addChangeListener(onChangeAuthors);
    if (AuthorStore.getAuthors().length === 0) {
      loadAuthors();
    }
    return () => AuthorStore.removeChangeListener(onChangeAuthors);
  }, [authors.length]);

  function onChangeAuthors() {
    setAuthors(AuthorStore.getAuthors());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CoursesList
        courses={courses}
        deleteCourse={deleteCourse}
        authors={authors}
        getAuthorById={AuthorStore.getAuthorById}
      />
    </>
  );
}
