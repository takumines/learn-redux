import { combineReducers } from "redux"

import { filtersReducer } from "./features/filters/filtersSlice.ts"
import { todosReducer } from "./features/todos/todoSlice.ts"

const rootReducer = combineReducers({
  tools: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
