import Dispatcher from "../appDispatcher";
// necesitamos emitir un evento cuando un cambio ocurra, por eso usaremos EventEmitter que esta en node
import { EventEmitter } from "events";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
// Paso 3: creamos el estado de nuestro store
let _courses = [];

// Paso 1
class CourseStore extends EventEmitter {
  // por convencion cada FLUX store debe tener 3 funciones que usa las funciones de EventEmitter
  // (emitter.on, emitter.removeListener and emitter.emit)
  addChangeListener(callback) {
    // esta funcion permite que los componentes en react sean notificados cuando suceda un cambio en el store
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

// necesitamos registrar la store con el dispatcher, para que el store sea notificado cuando el cambio ocurra
// el metodo register recibe una funcion (que recibe una accion) que es ejecutada cuando una accion es despachada, puede ser cualquier accion
// todas las stores son notificadas con cada accion, cualquier accion
// Paso 2
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      // cada vez que ocurre un cambio debemos llamar a emitChange para notificar a react
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map((course) =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter((course) => course.id !== action.courseId);
      store.emitChange();
      break;
    default:
    // nothing to do
  }
});

export default store;
