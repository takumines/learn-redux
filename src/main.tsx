import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/src/App.tsx"
import "@/src/index.css"

import "@/src/api/server"


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
