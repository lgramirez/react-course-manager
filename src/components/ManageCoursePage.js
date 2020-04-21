import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import CourseStore from "../stores/CourseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";
import PageNotFound from "./PageNotFound";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(CourseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path /courses/:slug
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(CourseStore.getCourseBySlug(slug));
    }
    return () => CourseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(CourseStore.getCourses());
  }

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => props.history.push("/courses"));
    toast.success("Course Saved.");
  }

  if (course === undefined) return <PageNotFound />;
  else {
    return (
      <>
        <h2>Manage Course</h2>
        <CourseForm
          errors={errors}
          course={course}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </>
    );
  }
};

export default ManageCoursePage;
