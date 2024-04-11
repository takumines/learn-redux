export type Todo = {
  id: number
  text: string
  completed: boolean
  color?: string
}

export type TodoFilter = {
  status: "All" | "Active" | "Completed"
  colors: string[]
}
