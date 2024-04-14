import { combineReducers } from "redux"

import { todosReducer } from "@/src/features/todos"
import { filtersReducer } from "@/src/features/filters"

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
