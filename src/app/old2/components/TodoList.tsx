"use client";

import { type Preloaded, useConvexAuth, usePreloadedQuery } from "convex/react";
import type { api } from "../../../../convex/_generated/api";
import { useEffect, useState } from "react";

interface Props {
  preloadedTodos: Preloaded<typeof api.tasks.get>;
}

export function TodoList({ preloadedTodos }: Props) {
  const { isLoading } = useConvexAuth();
  const todosData = usePreloadedQuery(preloadedTodos);
  const [todos, setTodos] = useState(todosData);

  useEffect(() => {
    if (!isLoading) {
      setTodos(todosData);
    }
  }, [todosData, isLoading]);

  return (
    <>
      <h1>some todos:</h1>
      {!isLoading && (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>{todo.text}</li>
          ))}
        </ul>
      )}
      <p>above are my todos</p>
    </>
  );
}
