import { Todo, TodoFilter } from "./todo/types/todo.ts"
import { ADD_TODO, CHANGE_FILTER, TodoAction, TOGGLE_TODO } from "./todo/action.ts"

const initialState: { todos: Todo[], filters: TodoFilter } = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" }
  ],
  filters: {
    status: "All",
    colors: []
  }
}

const generateTodoId = (todos: Todo[]) => {
  const maxId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0
  return maxId + 1
}

export const appReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: generateTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
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
    case CHANGE_FILTER: {
      return {
        ...state.filters,
        status: action.payload
      }

    }
    default:
      return state
  }
}
