export const ADD_TODO = "todos/todoAdded"
export const TOGGLE_TODO = "todos/todoToggled"
export const CHANGE_FILTER = "filters/statusFilterChanged"

type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: string;
}

type ToggleTodoAction = {
  type: typeof TOGGLE_TODO;
  payload: number;
}

type ChangeFilterAction = {
  type: typeof CHANGE_FILTER;
  payload: string;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | ChangeFilterAction
