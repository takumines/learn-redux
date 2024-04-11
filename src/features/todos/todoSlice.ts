import { Todo } from "./type.ts"
import { ADD_TODO, TodoAction, TOGGLE_TODO } from "./action.ts"

const initialState: Todo[] = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" }
]

const generateTodoId = (todos: Todo[]) => {
  const maxId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0
  return maxId + 1
}

export const todosReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state,
          {
            id: generateTodoId(state),
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.map((todo) => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }
    default:
      return state
  }
}
