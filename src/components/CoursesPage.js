import React, { useState, useEffect } from "react";
import CourseStore from "../stores/CourseStore";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

export default function CoursesPage() {
  const [courses, setCourses] = useState(CourseStore.getCourses());

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

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CoursesList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}
