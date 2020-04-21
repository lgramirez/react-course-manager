import dispatcher from "../appDispatcher";
import * as authorAPI from "../api/authorApi";
import actionTypes from "./actionTypes";

// the below function is an action creator || this function creates an action
export function saveAuthor(author) {
  // we use return because that way we return the promise from saveCourse
  return authorAPI.saveAuthor(author).then((savedAuthor) => {
    // and this is the action
    dispatcher.dispatch({
      actionType: author.id
        ? actionTypes.UPDATE_AUTHOR
        : actionTypes.CREATE_AUTHOR,
      author: savedAuthor,
    });
  });
}

export function loadAuthors() {
  return authorAPI.getAuthors().then((authors) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
      authors: authors,
    });
  });
}

export function deleteAuthor(id) {
  return authorAPI.deleteAuthor(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_AUTHOR,
      id: id,
    });
  });
}
