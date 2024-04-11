export const ADD_TODO = "todos/todoAdded"
export const TOGGLE_TODO = "todos/todoToggled"

type AddTodoAction = {
  type: typeof ADD_TODO;
  payload: string;
}

type ToggleTodoAction = {
  type: typeof TOGGLE_TODO;
  payload: number;
}


export type TodoAction = AddTodoAction | ToggleTodoAction
