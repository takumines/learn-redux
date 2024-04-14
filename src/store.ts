import { applyMiddleware, createStore } from "redux"
import rootReducer from "@/src/reducer.ts"
import { print1, print2, print3 } from "@/src/exampleAdons/middleware.ts"

const middlewareEnhancer = applyMiddleware(print1, print2, print3)
const store = createStore(rootReducer, middlewareEnhancer)

export default store
