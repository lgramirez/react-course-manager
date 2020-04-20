import dispatcher from "../appDispatcher";
import * as courseAPI from "../api/courseApi";
import actionTypes from "./actionTypes";

// the below function is an action creator || this function creates an action
export function saveCourse(course) {
  // we use return because that way we return the promise from saveCourse
  return courseAPI.saveCourse(course).then((savedCourse) => {
    // and this is the action
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseAPI.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
    });
  });
}

export function deleteCourse(courseId) {
  return courseAPI.deleteCourse(courseId).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      courseId: courseId,
    });
  });
}
