import { preloadQuery } from "convex/nextjs";
import { getAuthToken } from "@/lib/convex";
import { api } from "../../../convex/_generated/api";
import { AuthenticatedContent } from "./components/AuthenticatedContent";
import { TodoList } from "./components/TodoList";

const OldPage = async () => {
  const token = await getAuthToken();
  const preloadedTodos = await preloadQuery(api.tasks.get, {}, { token });

  return (
    <AuthenticatedContent>
      <TodoList preloadedTodos={preloadedTodos} />
    </AuthenticatedContent>
  );
};

export default OldPage;
