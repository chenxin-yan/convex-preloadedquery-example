"use client";

import { type Preloaded, useConvexAuth, usePreloadedQuery } from "convex/react";
import type { api } from "../../../../convex/_generated/api";

interface Props {
  preloadedTodos: Preloaded<typeof api.tasks.get>;
}

export function TodoList({ preloadedTodos }: Props) {
  const { isLoading } = useConvexAuth();
  const todos = usePreloadedQuery(preloadedTodos, { skip: isLoading });

  return (
    <>
      <h1>some todos:</h1>
      <ul>
        {todos ? (
          todos.map((todo) => <li key={todo._id}>{todo.text}</li>)
        ) : (
          <p>loading...</p>
        )}
      </ul>
      <p>above are my todos</p>
    </>
  );
}
