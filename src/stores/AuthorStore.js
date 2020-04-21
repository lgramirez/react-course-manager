import Dispatcher from "../appDispatcher";
import { EventEmitter } from "events";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
// Paso 3: creamos el estado de nuestro store
let _authors = [];

// Paso 1
class AuthorStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAuthors() {
    return _authors;
  }

  getAuthorById(id) {
    return _authors.find((author) => author.id === parseInt(id));
  }
}

const store = new AuthorStore();

// Paso 2
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      store.emitChange();
      break;
    case actionTypes.UPDATE_AUTHOR:
      _authors = _authors.map((author) =>
        author.id === action.author.id ? action.author : author
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_AUTHORS:
      _authors = action.authors;
      store.emitChange();
      break;
    case actionTypes.DELETE_AUTHOR:
      _authors = _authors.filter((author) => author.id !== action.id);
      store.emitChange();
      break;
    default:
    // nothing to do
  }
});

export default store;
