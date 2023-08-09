import TodoStatus from './TodoStatus';

let _todoItemId = 0;

export default class TodoItem {
  constructor(text) {
    _todoItemId += 1;

    const now = new Date();

    this._id = _todoItemId;
    this._text = text;
    this._date = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;
    this._status = TodoStatus.Todo;
  }

  // -------------------------------------------------------------------------------------------------------------------

  get id() {
    return this._id;
  }

  // -------------------------------------------------------------------------------------------------------------------

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }

  // -------------------------------------------------------------------------------------------------------------------

  get date() {
    return this._date;
  }

  // -------------------------------------------------------------------------------------------------------------------

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }
}
