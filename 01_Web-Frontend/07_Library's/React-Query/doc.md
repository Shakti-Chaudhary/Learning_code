Here's an extensive, topic-wise guide for a TanStack Query (formerly React Query) interview, focusing heavily on its usage with TypeScript, presented in Markdown format.

-----

# TanStack Query (React Query) Interview Guide (Extensive Topic-Wise)

This document provides a comprehensive guide to TanStack Query (React Query) concepts, specifically tailored for a TypeScript environment, commonly encountered in technical interviews. It covers fundamental principles, advanced patterns, and best practices for managing server state in modern React applications.

## Table of Contents

1.  [Fundamentals of TanStack Query](https://www.google.com/search?q=%231-fundamentals-of-tanstack-query)
2.  [Core Concepts: Queries](https://www.google.com/search?q=%232-core-concepts-queries)
3.  [Core Concepts: Mutations](https://www.google.com/search?q=%233-core-concepts-mutations)
4.  [QueryClient & QueryClientProvider](https://www.google.com/search?q=%234-queryclient--queryclientprovider)
5.  [Cache Management & Invalidation](https://www.google.com/search?q=%235-cache-management--invalidation)
6.  [TypeScript Integration with TanStack Query](https://www.google.com/search?q=%236-typescript-integration-with-tanstack-query)
7.  [Advanced Query Patterns](https://www.google.com/search?q=%237-advanced-query-patterns)
8.  [Error Handling](https://www.google.com/search?q=%238-error-handling)
9.  [DevTools](https://www.google.com/search?q=%239-devtools)
10. [Testing TanStack Query Logic](https://www.google.com/search?q=%2310-testing-tanstack-query-logic)
11. [Common Patterns & Best Practices](https://www.google.com/search?q=%2311-common-patterns--best-practices)
12. [Common Interview Questions & Scenarios](https://www.google.com/search?q=%2312-common-interview-questions--scenarios)

-----

## 1\. Fundamentals of TanStack Query

  * **What is TanStack Query (React Query)?**
      * A powerful library for managing **server state** in React applications.
      * It's often referred to as a "server-state management library" rather than a general-purpose state management library (like Redux or Zustand).
      * Handles asynchronous data fetching, caching, synchronization, and updating server data.
  * **Why use TanStack Query? (Key Problems Solved)**
      * **Eliminates Manual Data Fetching:** Replaces the need for `useEffect` + `useState` boilerplate for data fetching, loading states, and error handling.
      * **Caching & Deduplication:** Caches fetched data automatically and deduplicates identical requests, preventing unnecessary network calls.
      * **Background Re-fetching:** Intelligently re-fetches stale data in the background (e.g., on window focus, network reconnect, or after mutations), keeping UI data fresh.
      * **Data Synchronization:** Ensures data across different components using the same query key stays synchronized.
      * **Optimistic Updates:** Simplifies implementing optimistic UI updates for mutations, improving user experience.
      * **Pagination & Infinite Scrolling:** Provides built-in patterns for common data loading scenarios.
      * **Performance:** Reduces perceived loading times and improves overall application responsiveness.
      * **TypeScript-First:** Built from the ground up with robust TypeScript support.
  * **Core Concepts:**
      * **Queries:** Declarative way to fetch data (GET requests).
      * **Mutations:** Imperative way to create, update, or delete data on the server (POST, PUT, DELETE requests).
      * **QueryClient:** The central instance that manages the query cache and communicates with your React components.
      * **Query Cache:** Stores the results of your queries and their metadata (stale time, last updated, etc.).
      * **Stale-while-revalidate:** A caching strategy where old data is immediately shown while new data is fetched in the background. Once the new data arrives, the UI updates. This provides a smooth user experience.
      * **Query Keys:** Unique identifiers (arrays) for your queries, crucial for caching, re-fetching, and invalidation.

-----

## 2\. Core Concepts: Queries

  * **`useQuery` Hook:**
      * The primary hook for fetching data.
      * Takes a **Query Key** (array) and a **Query Function** (a promise-returning function).
      * Returns an object with various states (`data`, `isLoading`, `isError`, `error`, `isSuccess`, `isFetching`, `status`, etc.).
    <!-- end list -->
    ```typescript
    import { useQuery } from '@tanstack/react-query';

    interface Post {
        id: number;
        title: string;
        body: string;
    }

    // 1. Define your query function
    const fetchPosts = async (): Promise<Post[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    };

    const PostsList = () => {
        // 2. Use the useQuery hook
        const { data: posts, isLoading, isError, error } = useQuery<Post[], Error>({
            queryKey: ['posts'], // Unique query key (array)
            queryFn: fetchPosts, // Function that fetches the data
        });

        if (isLoading) return <div>Loading posts...</div>;
        if (isError) return <div>Error: {error?.message}</div>;

        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    {posts?.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        );
    };
    ```
  * **Query Keys:**
      * An array used to uniquely identify a query in the cache.
      * Can be simple strings (`['posts']`) or include variables for dynamic data (`['post', postId]`).
      * The order of elements in the array matters.
      * Crucial for invalidation and matching cached data.
    <!-- end list -->
    ```typescript
    // For a list of users: ['users']
    // For a specific user: ['user', userId]
    // For filtered users: ['users', { status: 'active', role: 'admin' }]
    ```
  * **Query Functions:**
      * A function that must return a Promise that resolves to the data or throws an error.
      * Can receive a `QueryContext` object as its first argument, containing `queryKey`, `signal`, `meta`.
  * **Query Options:**
      * **`staleTime`:** How long data is considered "fresh" (not stale). Defaults to `0`. While fresh, subsequent `useQuery` calls won't re-fetch.
      * **`cacheTime`:** How long inactive (unused) queries remain in the cache. Defaults to `5 * 60 * 1000` (5 minutes). After `cacheTime`, the query is garbage collected.
      * **`refetchOnWindowFocus`:** Whether to re-fetch when the window regains focus. Defaults to `true`.
      * **`retry`:** Number of times to retry failed queries. Defaults to `3`.
      * **`enabled`:** A boolean that controls whether the query should run. Useful for dependent queries or conditional fetching.
      * **`select`:** A function to transform or select a subset of the data returned by the query function.
    <!-- end list -->
    ```typescript
    const { data: userTitles } = useQuery<User[], Error, string[]>({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 5 * 1000, // Data considered fresh for 5 seconds
        cacheTime: 10 * 60 * 1000, // Keep in cache for 10 minutes even if inactive
        select: (users) => users.map(user => user.title), // Select only titles
        enabled: !!isAuthenticated, // Only fetch if user is authenticated
    });
    ```
  * **Query States:**
      * **`status`:** `"loading"` (first fetch), `"error"`, `"success"`.
      * **`isLoading`:** `status === 'loading'`.
      * **`isError`:** `status === 'error'`.
      * **`isSuccess`:** `status === 'success'`.
      * **`isFetching`:** `true` if the query is currently fetching (even if data is already present and stale). Useful for showing a small indicator.
      * **`isStale`:** `true` if the cached data is stale.
  * **`useQueries`:**
      * For fetching multiple queries in parallel.
      * Takes an array of query options.
      * Returns an array of query results.
    <!-- end list -->
    ```typescript
    import { useQueries } from '@tanstack/react-query';

    const { data } = useQueries({
        queries: [
            { queryKey: ['post', 1], queryFn: () => fetch(`/api/posts/1`).then(res => res.json()) },
            { queryKey: ['post', 2], queryFn: () => fetch(`/api/posts/2`).then(res => res.json()) },
        ],
    });
    // data is an array of results: [post1Data, post2Data]
    ```
  * **`useInfiniteQuery`:**
      * For handling infinite scrolling or "load more" pagination patterns.
      * `queryFn` receives `pageParam` to fetch the next page.
      * `getNextPageParam` and `getPreviousPageParam` determine the parameters for the next/previous fetches.
      * Returns `data.pages` (an array of pages) and `fetchNextPage`/`fetchPreviousPage`.

-----

## 3\. Core Concepts: Mutations

  * **`useMutation` Hook:**
      * Used for creating, updating, or deleting data on the server.
      * Returns a tuple `[mutate, { isLoading, isError, isSuccess, data, error }]`.
      * `mutate` is the function you call to trigger the mutation.
    <!-- end list -->
    ```typescript
    import { useMutation, useQueryClient } from '@tanstack/react-query';

    interface NewTodo {
        title: string;
        completed: boolean;
    }

    interface Todo {
        id: number;
        title: string;
        completed: boolean;
    }

    const addTodo = async (newTodo: NewTodo): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
        });
        if (!response.ok) {
            throw new Error('Failed to add todo');
        }
        return response.json();
    };

    const TodoForm = () => {
        const queryClient = useQueryClient();
        const [title, setTitle] = React.useState('');

        const { mutate, isLoading, isError, isSuccess, error } = useMutation<Todo, Error, NewTodo>({
            mutationFn: addTodo,
            // Invalidate the 'todos' query after a successful mutation
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['todos'] });
            },
        });

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if (title.trim()) {
                mutate({ title, completed: false });
                setTitle('');
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Todo'}
                </button>
                {isError && <div>Error: {error?.message}</div>}
                {isSuccess && <div>Todo added successfully!</div>}
            </form>
        );
    };
    ```
  * **Mutation Options:**
      * **`onMutate`:** Called before the mutation function is fired. Useful for optimistic updates. Receives the same variables as the mutation function.
      * **`onError`:** Called if the mutation fails.
      * **`onSuccess`:** Called if the mutation succeeds.
      * **`onSettled`:** Called regardless of success or failure.
      * These callbacks receive the mutation's `data`, `error`, `variables`, and `context` (from `onMutate`).
  * **Optimistic Updates (Detailed Explanation):**
      * The core idea is to update the UI *before* the server confirms the mutation. If the mutation fails, the UI is rolled back.
      * Steps:
        1.  **`onMutate`:** Snapshot the current query data (for rollback). Optimistically update the query cache (using `queryClient.setQueryData`).
        2.  **`onError`:** If mutation fails, rollback the cache using the snapshot.
        3.  **`onSettled`:** Invalidate the relevant query to re-fetch the true data from the server, ensuring synchronization.
    <!-- end list -->
    ```typescript
    import { useMutation, useQueryClient } from '@tanstack/react-query';

    interface Todo { id: number; title: string; completed: boolean; }
    interface UpdateTodoPayload { id: number; completed: boolean; }

    const updateTodoStatus = async ({ id, completed }: UpdateTodoPayload): Promise<Todo> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed }),
        });
        if (!response.ok) { throw new Error('Failed to update todo'); }
        return response.json();
    };

    const TodoItem = ({ todo }: { todo: Todo }) => {
        const queryClient = useQueryClient();

        const { mutate } = useMutation<Todo, Error, UpdateTodoPayload, Todo[] | undefined>({
            mutationFn: updateTodoStatus,
            // Context is the data returned by onMutate
            onMutate: async (newTodo) => {
                // Cancel any outgoing refetches for the todos query
                await queryClient.cancelQueries({ queryKey: ['todos'] });

                // Snapshot the previous value
                const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

                // Optimistically update to the new value
                queryClient.setQueryData<Todo[]>(['todos'], (old) =>
                    old?.map(t => (t.id === newTodo.id ? { ...t, ...newTodo } : t))
                );

                return previousTodos; // Return context for onError
            },
            onError: (err, newTodo, context) => {
                // If the mutation fails, use the context for rollback
                queryClient.setQueryData(['todos'], context);
            },
            onSettled: () => {
                // Always refetch after error or success to ensure data is in sync
                queryClient.invalidateQueries({ queryKey: ['todos'] });
            },
        });

        const handleToggleComplete = () => {
            mutate({ id: todo.id, completed: !todo.completed });
        };

        return (
            <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
                <button onClick={handleToggleComplete}>
                    {todo.completed ? 'Undo' : 'Complete'}
                </button>
            </li>
        );
    };
    ```
  * **Invalidation of Queries after Mutations:**
      * Crucial for keeping the UI in sync with server changes.
      * Use `queryClient.invalidateQueries({ queryKey: ['your', 'query', 'key'] })` in `onSuccess` or `onSettled` callbacks of `useMutation`.

-----

## 4\. QueryClient & QueryClientProvider

  * **`QueryClient`:**
      * The instance that holds the cache and manages queries and mutations.
      * You create a new `QueryClient` instance at the root of your application.
  * **`QueryClientProvider`:**
      * A React Context Provider that makes the `QueryClient` instance available to all components wrapped within it.
      * You wrap your entire application (or the part that needs queries) with it.
  * **Setting up the Client:**
    ```typescript
    // App.tsx or index.tsx
    import React from 'react';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Optional

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5, // Default stale time for all queries: 5 minutes
                refetchOnWindowFocus: false, // Don't refetch on window focus by default
            },
        },
    });

    const App = () => {
        return (
            <QueryClientProvider client={queryClient}>
                {/* Your application components */}
                <MyComponentThatUsesQueries />
                <ReactQueryDevtools initialIsOpen={false} /> {/* Optional DevTools */}
            </QueryClientProvider>
        );
    };
    ```
  * **Default Options:**
      * You can set global default options for all queries and mutations when creating the `QueryClient`.
  * **Accessing the Client (`useQueryClient`):**
      * Hook to get the `QueryClient` instance within any component.
      * Used for manual cache interactions (invalidation, setting data).
    <!-- end list -->
    ```typescript
    import { useQueryClient } from '@tanstack/react-query';

    const MyComponent = () => {
        const queryClient = useQueryClient();

        const handleRefetch = () => {
            // Manually invalidate and refetch all 'posts' queries
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        };

        return <button onClick={handleRefetch}>Refetch Posts</button>;
    };
    ```

-----

## 5\. Cache Management & Invalidation

  * **Importance of Query Keys:** The unique identifier for cached data. Without consistent keys, caching and invalidation won't work correctly.
  * **`queryClient.invalidateQueries`:**
      * Marks queries as "stale," triggering a background re-fetch for any active components using those queries.
      * Takes a query key (partial or exact match).
      * `queryClient.invalidateQueries({ queryKey: ['posts'] })` // Invalidates all 'posts' queries
      * `queryClient.invalidateQueries({ queryKey: ['post', 1] })` // Invalidates specific post
      * `queryClient.invalidateQueries({ queryKey: ['posts'], exact: true })` // Only exact match for ['posts']
      * `queryClient.invalidateQueries({ queryKey: ['posts'], refetchType: 'none' })` // Mark stale but don't re-fetch immediately
  * **`queryClient.setQueryData` (Manual Updates):**
      * Directly updates the data in the cache for a specific query key.
      * Useful for immediate UI updates without a network request (e.g., after an optimistic update, or when data is already available locally).
      * Signature: `setQueryData(queryKey, updater)` where `updater` can be a new value or a function that receives the old value.
    <!-- end list -->
    ```typescript
    // Example: Add a new todo to the cache manually after successful mutation
    queryClient.setQueryData<Todo[]>(['todos'], (oldTodos) => {
        return oldTodos ? [...oldTodos, newTodo] : [newTodo];
    });
    ```
  * **`queryClient.removeQueries`:**
      * Removes queries from the cache. Use with caution, as subsequent `useQuery` calls will re-fetch data from scratch.
  * **`queryClient.resetQueries`:**
      * Resets queries to their initial state, effectively clearing their data and re-fetching them.

-----

## 6\. TypeScript Integration with TanStack Query

TanStack Query is built with TypeScript, offering excellent type inference. However, explicit typing for generics is often crucial for robust applications.

  * **Typing `useQuery`:**
      * Use generics to specify the `data` type, `error` type, and optionally the `queryFn` return type if it differs from the `data` type.
      * `useQuery<TData, TError, TQueryFnData, TQueryKey>`
          * `TData`: The type of the data returned by the `useQuery` hook (`data`).
          * `TError`: The type of the error object (`error`).
          * `TQueryFnData`: The type of the data returned by the `queryFn` (often same as `TData`).
          * `TQueryKey`: The type of your query key array (usually inferred).
    <!-- end list -->
    ```typescript
    import { useQuery } from '@tanstack/react-query';

    interface User { id: number; name: string; email: string; }

    const fetchUserById = async (userId: number): Promise<User> => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!res.ok) throw new Error('User not found');
        return res.json();
    };

    const UserProfile = ({ userId }: { userId: number }) => {
        // Explicitly type the data (User) and error (Error)
        const { data: user, isLoading, isError, error } = useQuery<User, Error>({
            queryKey: ['user', userId],
            queryFn: () => fetchUserById(userId), // `queryFn`'s return type is inferred
            enabled: !!userId, // Only run if userId is valid
        });

        if (isLoading) return <div>Loading user...</div>;
        if (isError) return <div>Error: {error.message}</div>; // 'error' is now typed as Error
        if (!user) return null; // Or handle as no data

        return (
            <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </div>
        );
    };
    ```
  * **Typing `useMutation`:**
      * Use generics to specify the `data` type, `error` type, `variables` type (arguments to `mutate`), and `context` type (optional, for `onMutate` rollback).
      * `useMutation<TData, TError, TVariables, TContext>`
          * `TData`: The type of the data returned by the `mutationFn`.
          * `TError`: The type of the error object.
          * `TVariables`: The type of the argument passed to the `mutate` function.
          * `TContext`: The type of the `context` object returned by `onMutate`.
    <!-- end list -->
    ```typescript
    import { useMutation } from '@tanstack/react-query';

    interface Product { id: number; name: string; price: number; }
    interface CreateProductPayload { name: string; price: number; }

    const createProduct = async (product: CreateProductPayload): Promise<Product> => {
        const res = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json' },
        });
        if (!res.ok) throw new Error('Failed to create product');
        return res.json();
    };

    const ProductCreator = () => {
        // TData: Product, TError: Error, TVariables: CreateProductPayload, TContext: undefined (no onMutate context here)
        const { mutate, isLoading, isError, error, data } = useMutation<Product, Error, CreateProductPayload>({
            mutationFn: createProduct,
            onSuccess: (newProduct) => {
                console.log('Product created:', newProduct.name);
            },
        });

        const handleSubmit = (name: string, price: number) => {
            mutate({ name, price }); // 'name' and 'price' are type-checked
        };

        return (/* ... */);
    };
    ```
  * **Typing Query Functions and Mutation Functions:**
      * Explicitly type their arguments and return values. This helps `useQuery`/`useMutation` infer types correctly.
    <!-- end list -->
    ```typescript
    // Query Function with context typing
    import { QueryFunctionContext } from '@tanstack/react-query';

    interface Post { id: number; title: string; }

    const fetchPostById = async ({ queryKey }: QueryFunctionContext<[string, number]>): Promise<Post> => {
        const [, postId] = queryKey; // queryKey is inferred as [string, number]
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!res.ok) throw new Error('Post not found');
        return res.json();
    };

    // Mutation Function
    interface UpdatePostPayload { id: number; title: string; }
    interface UpdatedPost { id: number; title: string; body: string; }

    const updatePost = async (payload: UpdatePostPayload): Promise<UpdatedPost> => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' },
        });
        if (!res.ok) throw new Error('Failed to update post');
        return res.json();
    };
    ```
  * **Custom Hooks Wrapping `useQuery`/`useMutation`:**
      * A common pattern for reusable data fetching logic.
      * Ensure the custom hook exposes the same return types as `useQuery`/`useMutation`.
    <!-- end list -->
    ```typescript
    import { useQuery } from '@tanstack/react-query';

    // Same User and fetchUserById as before

    export const useUser = (userId: number | null) => {
        // Returns the same type signature as useQuery for convenience
        return useQuery<User, Error>({
            queryKey: ['user', userId],
            queryFn: () => fetchUserById(userId!), // Assert userId is not null here due to 'enabled'
            enabled: userId !== null, // Query only runs if userId is not null
        });
    };

    // Usage:
    // const { data: user, isLoading } = useUser(selectedUserId);
    ```

-----

## 7\. Advanced Query Patterns

  * **Dependent Queries:**
      * A query that depends on the result of another query.
      * Use the `enabled` option to conditionally run the dependent query.
    <!-- end list -->
    ```typescript
    const { data: user } = useQuery<User>({ queryKey: ['user', userId], queryFn: fetchUserById });
    const { data: userPosts } = useQuery<Post[]>({
        queryKey: ['userPosts', user?.id],
        queryFn: () => fetchUserPosts(user!.id), // Assumed fetchUserPosts exists
        enabled: !!user, // Only run this query if 'user' data is available
    });
    ```
  * **Paginated Queries:**
      * Use `useQuery` with dynamic query keys and an `onSuccess` or `select` function to manage pagination state.
      * Or, if using a cursor-based approach, `useInfiniteQuery` is more suitable.
  * **Initial Data:**
      * Provide data that is immediately available for a query, avoiding a loading spinner on the first render.
      * Can be a static value or a function that fetches data (e.g., from a server-side render, or a non-query-managed cache).
      * `initialDataUpdatedAt` for controlling staleness of initial data.
  * **Placeholder Data:**
      * Displays temporary data while the actual query is fetching.
      * Useful for showing a "skeleton" or blurred content.
      * Similar to `initialData` but doesn't persist in the cache.
  * **Prefetching:**
      * Fetch data *before* a user navigates to a new page or interacts with an element.
      * Use `queryClient.prefetchQuery`.
    <!-- end list -->
    ```typescript
    const MyLink = ({ postId, children }: { postId: number; children: React.ReactNode }) => {
        const queryClient = useQueryClient();
        const handleMouseEnter = () => {
            queryClient.prefetchQuery({ queryKey: ['post', postId], queryFn: () => fetchPostById(postId) });
        };
        return <Link to={`/posts/${postId}`} onMouseEnter={handleMouseEnter}>{children}</Link>;
    };
    ```
  * **Query Invalidation on Mount (with `refetchOnMount`):**
      * Defaults to `true`. Can be set to `false` if you want to avoid re-fetching on every mount when data is merely stale.

-----

## 8\. Error Handling

  * **Global Error Handling:**
      * Use `queryClient` default options `queries.onError` and `mutations.onError`.
      * This allows you to implement a global error notification system (e.g., a toast or snackbar).
    <!-- end list -->
    ```typescript
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // Global error handler for queries
                onError: (error: any) => {
                    console.error('Global Query Error:', error.message);
                    // showToast(error.message, 'error');
                },
                retry: 3, // Retry failed queries 3 times
            },
            mutations: {
                // Global error handler for mutations
                onError: (error: any) => {
                    console.error('Global Mutation Error:', error.message);
                    // showToast(error.message, 'error');
                },
            },
        },
    });
    ```
  * **Per-Query/Mutation Error Handling:**
      * Use the `isError` flag and `error` object returned by `useQuery`/`useMutation` in your components.
      * Use `onError` callbacks for specific mutations.
  * **`retry` and `retryDelay`:**
      * Options for `useQuery` to control how many times a failed query should retry and with what delay.

-----

## 9\. DevTools

  * **TanStack Query Devtools (`@tanstack/react-query-devtools`):**
      * An invaluable tool for debugging your queries and mutations.
      * Provides a visual interface to see cached data, query states (stale, fetching), mutation history, and perform invalidations manually.
      * Only for development builds.
    <!-- end list -->
    ```tsx
    import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

    // ... in your App component
    <QueryClientProvider client={queryClient}>
        {/* Your app */}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    ```

-----

## 10\. Testing TanStack Query Logic

  * **Testing Query Functions / Mutation Functions:**
      * These are pure async functions; test them like any other async function, mocking `fetch` or using `msw`.
    <!-- end list -->
    ```typescript
    // __tests__/api.test.ts
    import { fetchPosts } from '../src/api/posts'; // Assuming this is your queryFn
    import { rest } from 'msw';
    import { setupServer } from 'msw/node';

    const server = setupServer(
        rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
            return res(ctx.json([{ id: 1, title: 'Test Post', body: '...' }]));
        })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    describe('fetchPosts', () => {
        it('should fetch posts correctly', async () => {
            const posts = await fetchPosts();
            expect(posts).toEqual([{ id: 1, title: 'Test Post', body: '...' }]);
        });

        it('should throw an error on failed fetch', async () => {
            server.use(
                rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
                    return res(ctx.status(500));
                })
            );
            await expect(fetchPosts()).rejects.toThrow('Failed to fetch posts');
        });
    });
    ```
  * **Testing Components using `useQuery` / `useMutation`:**
      * Wrap components in a `QueryClientProvider` with a test `QueryClient`.
      * Mock API calls using `msw` for reliable and realistic testing.
      * Use `renderHook` from `@testing-library/react-hooks` (if still needed, though `RTL` is often sufficient) for testing custom hooks.
      * Use `waitFor` and `findBy` queries from `React Testing Library` to wait for data to load.
    <!-- end list -->
    ```typescript
    // __tests__/PostsList.test.tsx
    import { render, screen, waitFor } from '@testing-library/react';
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
    import { rest } from 'msw';
    import { setupServer } from 'msw/node';
    import PostsList from '../src/components/PostsList'; // The component from section 2

    const server = setupServer(
        rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
            return res(ctx.json([{ id: 1, title: 'First Post', body: '...' }]));
        })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    describe('PostsList', () => {
        const queryClient = new QueryClient(); // Create a new client for each test

        const renderComponent = () =>
            render(
                <QueryClientProvider client={queryClient}>
                    <PostsList />
                </QueryClientProvider>
            );

        it('should show loading state initially', () => {
            renderComponent();
            expect(screen.getByText(/Loading posts.../i)).toBeInTheDocument();
        });

        it('should display posts after successful fetch', async () => {
            renderComponent();
            await waitFor(() => {
                expect(screen.getByText(/First Post/i)).toBeInTheDocument();
            });
            expect(screen.queryByText(/Loading posts.../i)).not.toBeInTheDocument();
        });

        it('should display error message on failed fetch', async () => {
            server.use(
                rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
                    return res(ctx.status(500));
                })
            );
            renderComponent();
            await waitFor(() => {
                expect(screen.getByText(/Error: Failed to fetch posts/i)).toBeInTheDocument();
            });
            expect(screen.queryByText(/Loading posts.../i)).not.toBeInTheDocument();
        });
    });
    ```

-----

## 11\. Common Patterns & Best Practices

  * **Custom Hooks for Queries/Mutations:**
      * Encapsulate query keys and logic into reusable custom hooks (e.g., `useUser`, `useCreateProduct`). This improves readability, reusability, and maintainability.
      * Demonstrated in TypeScript section.
  * **Co-locating Logic:**
      * Keep query functions, mutation functions, and their corresponding custom hooks together, often in a `hooks` or `api` folder within a feature.
  * **When to use TanStack Query vs. RTK Query vs. Other State Management:**
      * **TanStack Query:** Excellent for *server state*. Handles caching, re-fetching, deduplication, optimistic updates for data coming from an API. It's not a replacement for *client state* (e.g., UI theme, form values that aren't being synced).
      * **RTK Query:** Google's opinionated, batteries-included data fetching layer built on Redux Toolkit. Similar benefits to TanStack Query but tightly coupled with Redux. Choose if you're already in a Redux ecosystem or prefer its opinionated structure.
      * **Redux/Zustand/Jotai:** For managing complex *client state* that doesn't originate from a server, or for derived client-side calculations, or for very specific global state patterns. Can be combined with TanStack Query.
      * **`useState`/`useReducer`:** For component-local UI state.
  * **Data Transformation (`select`):**
      * Use the `select` option in `useQuery` to transform or filter data *after* it's fetched and cached, preventing unnecessary re-renders of components that only need a subset.
  * **Query Key Management:**
      * Establish clear conventions for your query keys. Nested arrays are powerful for specificity.
      * Consider creating a `queryKeys.ts` file to centralize and export query key arrays.
  * **Stale-while-revalidate strategy:** Embrace it\! Don't fight it. Allow stale data to be shown immediately for a faster UX.
  * **Error Boundaries:** Wrap components that perform data fetching in `Error Boundaries` to catch rendering errors from failed queries and display fallback UI.
  * **Suspense Integration:** TanStack Query has experimental (or opt-in, depending on version) support for React Suspense for data fetching, allowing for declarative loading states.

-----

## 12\. Common Interview Questions & Scenarios

  * **"What is TanStack Query, and what problems does it aim to solve?"**
  * **"Explain the core concept of 'server state' vs. 'client state'."**
  * **"What are Query Keys and why are they important in TanStack Query?"**
  * **"Describe the lifecycle of a query from 'loading' to 'success', including 'stale' and 'fetching' states."**
  * **"What's the difference between `staleTime` and `cacheTime`?"**
  * **"How do you perform data mutations with TanStack Query? Explain the `useMutation` hook."**
  * **"Walk me through the process of implementing an optimistic update with `useMutation`."**
  * **"How do you invalidate query caches after a successful mutation?"**
  * **"When would you use `queryClient.setQueryData` instead of `invalidateQueries`?"**
  * **"How does TanStack Query handle error retries and global error handling?"**
  * **"Explain how to type `useQuery` and `useMutation` hooks effectively with TypeScript."**
  * **"What are custom hooks in the context of TanStack Query, and why are they useful?"**
  * **"How would you implement dependent queries (e.g., fetch user details, then fetch their posts)?"**
  * **"What are `initialData` and `placeholderData`? When would you use them?"**
  * **"Compare and contrast TanStack Query with Redux Toolkit Query. When would you choose one over the other?"**
  * **"How do you test components that use TanStack Query hooks?"**
  * **"What is prefetching, and how can you use it to improve user experience?"**
  * **Coding Scenarios:**
      * Create a component that fetches a list of items using `useQuery`, displaying loading, error, and success states. Ensure proper TypeScript typing.
      * Implement a form that uses `useMutation` to create a new item, and invalidates the list query on success. Include optimistic updates if possible.
      * Create a custom hook that wraps a `useQuery` call for fetching specific user data.
      * Demonstrate a dependent query: first fetch a `userId` from one query, then use that `userId` to fetch user details in a second query.
      * Write a basic test for a component using `useQuery`, mocking the API call using `msw`.
      * Show how to use `useInfiniteQuery` for a simple infinite scroll.

-----