import axios from "axios";

export default class TodoService {
  static async getAllTodos(limit = 5, page) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
}
