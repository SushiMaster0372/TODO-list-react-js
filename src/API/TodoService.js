import axios from "axios";

export default class TodoService {
  static async getAllTodos(limit = 5) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          _limit: limit,
        },
      }
    );
    return response;
  }
}
