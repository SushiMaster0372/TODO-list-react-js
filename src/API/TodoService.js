import axios from "axios";

export default class TodoService {
  static async getAllTodos() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response;
  }
}
