import { TodoFilter } from "@/src/features/filters/type.ts"
import { CHANGE_FILTER, FilterAction } from "@/src/features/filters/action.ts"


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
