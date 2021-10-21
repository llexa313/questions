import { createServer } from "miragejs"
import questions from './questions.json';

createServer({
  routes() {
    this.namespace = "api"

    this.get("/questions", () => {
      return questions
    })
  },
})
