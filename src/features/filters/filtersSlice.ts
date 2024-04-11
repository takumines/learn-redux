import { CHANGE_FILTER, FilterAction } from "./action.ts"
import { TodoFilter } from "./type.ts"

const initialState: TodoFilter = {
  status: "All",
  colors: []
}


export const filtersReducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return {
        ...state,
        status: action.payload
      }

    }
    default:
      return state
  }
}
