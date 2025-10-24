import { getAuthToken } from "@/lib/convex";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";
import { TodoList } from "./components/TodoList";

const NewPage = async () => {
  const token = await getAuthToken();
  const preloadedTodos = await preloadQuery(api.tasks.get, {}, { token });

  return <TodoList preloadedTodos={preloadedTodos} />;
};

export default NewPage;
