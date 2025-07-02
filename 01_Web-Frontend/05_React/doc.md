Here's an extensive, topic-wise guide for a React with TypeScript interview, generated in Markdown format.

-----

# React with TypeScript Interview Guide (Extensive Topic-Wise)

This document provides a comprehensive guide to React concepts specifically tailored for a TypeScript environment, commonly encountered in technical interviews. It covers fundamental principles, advanced patterns, and best practices for building robust and scalable React applications with TypeScript.

## Table of Contents

1.  [Fundamentals of React & TypeScript Integration](https://www.google.com/search?q=%231-fundamentals-of-react--typescript-integration)
2.  [Components in React (with TypeScript)](https://www.google.com/search?q=%232-components-in-react-with-typescript)
3.  [JSX/TSX (with TypeScript)](https://www.google.com/search?q=%233-jsxtsx-with-typescript)
4.  [State Management (with TypeScript)](https://www.google.com/search?q=%234-state-management-with-typescript)
5.  [Event Handling (with TypeScript)](https://www.google.com/search?q=%235-event-handling-with-typescript)
6.  [Conditional & List Rendering](https://www.google.com/search?q=%236-conditional--list-rendering)
7.  [React Hooks (with TypeScript)](https://www.google.com/search?q=%237-react-hooks-with-typescript)
8.  [Advanced React Patterns (with TypeScript)](https://www.google.com/search?q=%238-advanced-react-patterns-with-typescript)
9.  [Performance Optimization (with TypeScript)](https://www.google.com/search?q=%239-performance-optimization-with-typescript)
10. [Error Handling in React (with TypeScript)](https://www.google.com/search?q=%2310-error-handling-in-react-with-typescript)
11. [Routing (Basic Concepts)](https://www.google.com/search?q=%2311-routing-basic-concepts)
12. [Testing React Components (with TypeScript)](https://www.google.com/search?q=%2312-testing-react-components-with-typescript)
13. [Project Setup & Tooling](https://www.google.com/search?q=%2313-project-setup--tooling)
14. [Common Patterns & Best Practices](https://www.google.com/search?q=%2314-common-patterns--best-practices)
15. [Common Interview Questions & Scenarios](https://www.google.com/search?q=%2315-common-interview-questions--scenarios)

-----

## 1\. Fundamentals of React & TypeScript Integration

  * **What is React?**
      * A JavaScript library for building user interfaces.
      * Declarative, component-based approach.
      * Uses a Virtual DOM for efficient UI updates.
      * Unidirectional data flow.
  * **What is TypeScript? (Briefly)**
      * Superset of JavaScript that adds static typing.
      * Compiles to plain JavaScript.
      * Provides compile-time error checking, improved tooling, and better code maintainability.
  * **Why use React with TypeScript? (Benefits)**
      * **Enhanced Type Safety:** Catches common runtime errors (e.g., `TypeError`, `ReferenceError`) related to incorrect prop types, state types, or API responses *during development*.
      * **Improved Developer Experience (DX):**
          * Better autocompletion and IntelliSense in IDEs.
          * Easier refactoring with confidence.
          * Self-documenting code through explicit types.
      * **Better Code Quality & Maintainability:** Clearer contracts for component props, state, and context, making large codebases easier to understand and manage.
      * **Scalability:** Essential for large applications with multiple developers, reducing miscommunication and increasing robustness.
      * **Safer API Integrations:** Ensures that data consumed from APIs matches the expected types, reducing bugs.
      * **Easier Onboarding:** New team members can understand data structures more quickly.
  * **How does TypeScript work with React? (Transpilation)**
      * `.tsx` files (TypeScript JSX) are used for React components.
      * The TypeScript compiler (`tsc`) or a bundler's TypeScript loader (e.g., `ts-loader` in Webpack, `esbuild` in Vite) transpiles `.tsx` into `.jsx` or `.js` (depending on `jsx` and `target` compiler options in `tsconfig.json`).
      * Type checks happen during this transpilation phase. The resulting JavaScript is then executed by the browser.

-----

## 2\. Components in React (with TypeScript)

  * **Functional Components (Preferred in modern React):**
      * Defined as JavaScript functions that return JSX.
      * Use Hooks for state and side effects.
      * **Typing Props:**
          * Define an `interface` or `type` for component props.
          * Pass the prop type to the functional component (e.g., `React.FC<Props>`).
          * `React.FC` (or `FunctionComponent`) provides implicit `children` prop and `displayName`. However, explicitly typing `children` using `PropsWithChildren` is often preferred for more control and avoiding implicit `any` issues with `children`.
        <!-- end list -->
        ```typescript
        // Option 1: Direct interface (Recommended)
        interface WelcomeProps {
            name: string;
            age?: number; // Optional prop
            isActive: boolean;
            children?: React.ReactNode; // Explicitly type children if used
        }

        const Welcome = ({ name, age, isActive, children }: WelcomeProps) => {
            return (
                <div>
                    <h1>Hello, {name}!</h1>
                    {age && <p>You are {age} years old.</p>}
                    <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
                    {children}
                </div>
            );
        };

        // Option 2: Using React.FC (older/less preferred, as it implicitly types children)
        // import React from 'react';
        // interface WelcomeProps {
        //     name: string;
        //     age?: number;
        //     isActive: boolean;
        // }
        // const Welcome: React.FC<WelcomeProps> = ({ name, age, isActive, children }) => {
        //     return ( /* ... */ );
        // };

        // Option 3: Using PropsWithChildren (explicit and flexible)
        import React, { PropsWithChildren } from 'react';
        interface WelcomeProps {
            name: string;
            age?: number;
            isActive: boolean;
        }
        const WelcomeWithChildren = ({ name, age, isActive, children }: PropsWithChildren<WelcomeProps>) => {
            return ( /* ... */ );
        };
        ```
  * **Class Components (Legacy, but good to know):**
      * ES6 classes that extend `React.Component`.
      * Manage state in `this.state` and use lifecycle methods.
      * **Typing Props & State:**
          * Pass types as generic arguments to `React.Component<Props, State>`.
        <!-- end list -->
        ```typescript
        import React, { Component } from 'react';

        interface MyClassComponentProps {
            title: string;
        }

        interface MyClassComponentState {
            count: number;
        }

        class MyClassComponent extends Component<MyClassComponentProps, MyClassComponentState> {
            constructor(props: MyClassComponentProps) {
                super(props);
                this.state = {
                    count: 0,
                };
            }

            render() {
                return (
                    <div>
                        <h2>{this.props.title}</h2>
                        <p>Count: {this.state.count}</p>
                    </div>
                );
            }
        }
        ```
  * **Component Composition:**
      * Combining smaller, independent components to build larger UIs.
      * `children` prop: Passing JSX between component tags. Type with `React.ReactNode`.

-----

## 3\. JSX/TSX (with TypeScript)

  * **JSX Overview:**
      * JavaScript XML: A syntax extension for JavaScript.
      * Allows writing HTML-like syntax directly within JavaScript.
      * Transpiled into `React.createElement()` calls.
  * **TSX (`.tsx` files):**
      * JSX with TypeScript capabilities.
      * Enables type checking within JSX expressions.
  * **Embedding Expressions:** Use curly braces `{}` to embed JavaScript expressions within JSX.
    ```tsx
    const user = { firstName: 'Jane', lastName: 'Doe' };
    const element = <h1>Hello, {user.firstName} {user.lastName}!</h1>;
    ```
  * **Type Checking in TSX:**
      * TypeScript ensures that the props you pass to a component match its defined prop types.
      * It also checks the types of values used in JSX expressions.
    <!-- end list -->
    ```tsx
    // Using the Welcome component from section 2
    <Welcome name="Alice" isActive={true} />
    // <Welcome name="Bob" isActive="yes" /> // Error: Type 'string' is not assignable to type 'boolean'.
    ```
  * **Fragment (`<></>` or `<React.Fragment>`):**
      * Allows returning multiple elements from a component without adding an extra DOM node.
      * Useful for list rendering or avoiding unnecessary wrappers.

-----

## 4\. State Management (with TypeScript)

  * **Component Local State (`useState` Hook - for Functional Components):**
      * **Typing `useState`:** TypeScript usually infers the type from the initial value. You can explicitly provide it for better clarity or if the initial value is `null`/`undefined` but the state will later hold a specific type.
    <!-- end list -->
    ```typescript
    import React, { useState } from 'react';

    // Inference:
    const Counter = () => {
        const [count, setCount] = useState(0); // count inferred as number
        return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
    };

    // Explicit typing (e.g., for potentially null values):
    interface UserProfile {
        id: string;
        name: string;
        email: string;
    }
    const UserDisplay = () => {
        const [user, setUser] = useState<UserProfile | null>(null); // user can be UserProfile or null
        const [isLoading, setIsLoading] = useState<boolean>(true); // explicit boolean

        // ... later, after fetching data
        // setUser({ id: '1', name: 'John Doe', email: 'john@example.com' });

        if (isLoading) return <p>Loading user...</p>;
        if (!user) return <p>No user data.</p>;

        return (
            <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        );
    };
    ```
  * **Prop Drilling:**
      * Passing props down through multiple layers of child components.
      * Can become cumbersome in deep component trees.
      * Consider Context API or state management libraries for deep data passing.
  * **Context API (for global/shared state - with TypeScript):**
      * Provides a way to pass data through the component tree without having to pass props down manually at every level.
      * **Typing Context:**
          * Define the type of the context value.
          * Provide an initial value (or `undefined` with checks) when creating the context.
          * Type the `useContext` hook.
        <!-- end list -->
        ```typescript
        // context/ThemeContext.ts
        import React, { createContext, useContext, useState, ReactNode } from 'react';

        type Theme = 'light' | 'dark';

        interface ThemeContextType {
            theme: Theme;
            toggleTheme: () => void;
        }

        // Provide a default value that matches the context type.
        // Or null/undefined if you guarantee a provider will wrap it,
        // then use non-null assertion or checks in useContext.
        const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

        interface ThemeProviderProps {
            children: ReactNode;
        }

        export const ThemeProvider = ({ children }: ThemeProviderProps) => {
            const [theme, setTheme] = useState<Theme>('light');

            const toggleTheme = () => {
                setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
            };

            return (
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                    {children}
                </ThemeContext.Provider>
            );
        };

        export const useTheme = () => {
            const context = useContext(ThemeContext);
            if (context === undefined) {
                throw new Error('useTheme must be used within a ThemeProvider');
            }
            return context;
        };

        // Usage in a component:
        // const MyComponent = () => {
        //     const { theme, toggleTheme } = useTheme();
        //     return ( /* ... */ );
        // };
        ```
  * **External State Management Libraries (Redux, Zustand, Jotai, Recoil, TanStack Query, etc.):**
      * **Redux (with Redux Toolkit & RTK Query):**
          * **Typing Reducers/Actions:** Use `createSlice` from Redux Toolkit which simplifies typing.
          * Define `RootState` and `AppDispatch` types.
          * **Typing Selectors:** Explicitly type selector return values.
          * `useSelector` and `useDispatch` hooks need to be typed.
        <!-- end list -->
        ```typescript
        // Example for RTK Query endpoint:
        // export const apiSlice = createApi({
        //     reducerPath: 'api',
        //     baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
        //     endpoints: (builder) => ({
        //         getPosts: builder.query<Post[], void>({ // <ResultType, ArgType>
        //             query: () => 'posts',
        //         }),
        //     }),
        // });
        // export const { useGetPostsQuery } = apiSlice;
        ```
      * **Zustand:** Lightweight, hook-based state management. Very easy to type.
        ```typescript
        import { create } from 'zustand';

        interface BearState {
            bears: number;
            increasePopulation: () => void;
            removeAllBears: () => void;
        }

        const useBearStore = create<BearState>()((set) => ({
            bears: 0,
            increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
            removeAllBears: () => set({ bears: 0 }),
        }));
        ```
      * **TanStack Query (React Query):** For server-state management. Types API responses for queries and mutations.

-----

## 5\. Event Handling (with TypeScript)

  * **Typing Event Handlers:**
      * React provides synthetic event types (e.g., `React.MouseEvent`, `React.ChangeEvent`, `React.FormEvent`).
      * You can infer the type directly from the JSX attribute (`onClick`, `onChange`).
      * Explicitly type for clarity, especially when passing handlers down.
    <!-- end list -->
    ```typescript
    import React from 'react';

    const MyForm = () => {
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log("Form submitted!");
        };

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log("Input value:", event.target.value);
        };

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            console.log("Button clicked at:", event.clientX, event.clientY);
        };

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
        );
    };
    ```
  * **Common Event Types:**
      * `React.MouseEvent<HTMLElement>` (for `onClick`, `onMouseOver`, etc.)
      * `React.ChangeEvent<HTMLInputElement>` (for `onChange` on inputs)
      * `React.ChangeEvent<HTMLSelectElement>` (for `onChange` on selects)
      * `React.FormEvent<HTMLFormElement>` (for `onSubmit` on forms)
      * `React.KeyboardEvent<HTMLElement>` (for `onKeyDown`, `onKeyUp`, etc.)

-----

## 6\. Conditional & List Rendering

  * **Conditional Rendering:**
      * **`if` statements:** Inside component functions before `return`.
      * **Ternary operator (`condition ? true : false`):** In JSX.
      * **Logical `&&` operator:** Renders element only if condition is true.
    <!-- end list -->
    ```tsx
    interface AuthProps {
        isLoggedIn: boolean;
        userName?: string;
    }

    const AuthStatus = ({ isLoggedIn, userName }: AuthProps) => {
        if (isLoggedIn) {
            return <h2>Welcome, {userName || 'Guest'}!</h2>;
        }
        return <p>Please log in.</p>;
    };

    const StatusDisplay = ({ isLoggedIn }: AuthProps) => (
        <div>
            {isLoggedIn ? <p>Online</p> : <p>Offline</p>}
            {isLoggedIn && <button>Logout</button>}
        </div>
    );
    ```
  * **List Rendering:**
      * Use `Array.prototype.map()` to render a list of items.
      * **`key` prop:** Essential for efficient updates and to help React identify which items have changed, are added, or are removed.
          * Keys should be unique *among siblings*.
          * Prefer stable IDs over array indices if items can be reordered, added, or removed.
      * **Typing Lists:** Type the array of objects.
    <!-- end list -->
    ```tsx
    interface Item {
        id: string;
        name: string;
        price: number;
    }

    interface ItemListProps {
        items: Item[];
    }

    const ItemList = ({ items }: ItemListProps) => {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        );
    };
    ```

-----

## 7\. React Hooks (with TypeScript)

  * **`useState` (covered in State Management).**
  * **`useEffect`:**
      * Performs side effects in functional components (data fetching, DOM manipulation, subscriptions, timers).
      * **Clean-up function:** Returned from `useEffect` to clean up resources (e.g., clear timers, unsubscribe from events).
      * **Dependency Array:** Controls when the effect re-runs.
          * `[]`: Runs once after initial render.
          * `[dep1, dep2]`: Runs on initial render and when `dep1` or `dep2` change.
          * (no array): Runs after every render (use with caution).
      * **Typing `useEffect`:** No specific type arguments for `useEffect` itself; it infers based on the callback.
    <!-- end list -->
    ```typescript
    import React, { useState, useEffect } from 'react';

    const Timer = () => {
        const [seconds, setSeconds] = useState(0);

        useEffect(() => {
            // This runs once on mount
            const intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);

            // This cleanup function runs on unmount or before the effect re-runs
            return () => clearInterval(intervalId);
        }, []); // Empty dependency array means it runs once

        return <p>Seconds: {seconds}</p>;
    };

    interface Post {
        id: number;
        title: string;
        body: string;
    }
    const PostFetcher = ({ postId }: { postId: number }) => {
        const [post, setPost] = useState<Post | null>(null);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            setLoading(true);
            setError(null);
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data: Post) => { // Cast to Post type
                    setPost(data);
                })
                .catch(err => {
                    setError(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, [postId]); // Re-run effect when postId changes

        if (loading) return <p>Loading post...</p>;
        if (error) return <p>Error: {error}</p>;
        if (!post) return <p>No post found.</p>;

        return (
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        );
    };
    ```
  * **`useContext` (covered in State Management).**
  * **`useReducer`:**
      * An alternative to `useState` for more complex state logic that involves multiple sub-values or when the next state depends on the previous one.
      * Ideal for global state management when combined with Context API.
      * **Typing `useReducer`:** Type the `state` and `action` in the reducer function.
    <!-- end list -->
    ```typescript
    import React, { useReducer } from 'react';

    interface CounterState {
        count: number;
    }

    type CounterAction =
        | { type: 'increment'; payload?: number }
        | { type: 'decrement'; payload?: number }
        | { type: 'reset' };

    const initialState: CounterState = { count: 0 };

    function reducer(state: CounterState, action: CounterAction): CounterState {
        switch (action.type) {
            case 'increment':
                return { count: state.count + (action.payload || 1) };
            case 'decrement':
                return { count: state.count - (action.payload || 1) };
            case 'reset':
                return { count: initialState.count };
            default:
                // TypeScript's exhaustive checking with never type for discriminated unions
                const exhaustiveCheck: never = action;
                throw new Error(`Unhandled action type: ${exhaustiveCheck}`);
        }
    }

    const CounterReducer = () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <div>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>Increment by 5</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        );
    };
    ```
  * **`useRef`:**
      * Returns a mutable `ref` object whose `.current` property is initialized to the passed argument (`initialValue`).
      * Useful for accessing DOM elements directly, storing mutable values that don't trigger re-renders.
      * **Typing `useRef`:**
          * Provide the DOM element type (e.g., `HTMLInputElement`) or a generic type.
          * Initialize with `null` and handle potential `null` values.
    <!-- end list -->
    ```typescript
    import React, { useRef, useEffect } from 'react';

    const FocusInput = () => {
        // Type the ref for an HTML input element
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            // Check if .current is not null before using it
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, []);

        const handleClick = () => {
            if (inputRef.current) {
                alert(`Input value: ${inputRef.current.value}`);
            }
        };

        return (
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={handleClick}>Get Value</button>
            </div>
        );
    };

    const MutableCounter = () => {
        const countRef = useRef(0); // Stores a mutable value without triggering re-render

        const increment = () => {
            countRef.current++;
            console.log("Count (ref):", countRef.current);
        };

        return <button onClick={increment}>Increment Ref</button>;
    };
    ```
  * **`useMemo`:**
      * Memorizes a calculated value. Only re-calculates if dependencies change.
      * Prevents expensive computations on every render.
      * **Typing `useMemo`:** Inferred, but explicit type can be useful.
    <!-- end list -->
    ```typescript
    import React, { useMemo } from 'react';

    interface Item { id: number; value: number; }
    const ExpensiveCalculation = ({ items }: { items: Item[] }) => {
        const total = useMemo(() => {
            console.log('Calculating total...');
            return items.reduce((sum, item) => sum + item.value, 0);
        }, [items]); // Recalculate only if 'items' array reference changes

        return <p>Total value: {total}</p>;
    };
    ```
  * **`useCallback`:**
      * Memorizes a function definition. Only returns a new function instance if dependencies change.
      * Prevents unnecessary re-renders of child components that receive callbacks as props (especially useful with `React.memo`).
      * **Typing `useCallback`:** Inferred.
    <!-- end list -->
    ```typescript
    import React, { useState, useCallback, memo } from 'react';

    interface ButtonProps {
        onClick: () => void;
        children: React.ReactNode;
    }

    // Memoized child component to prevent unnecessary re-renders
    const MyButton = memo(({ onClick, children }: ButtonProps) => {
        console.log('MyButton rendered');
        return <button onClick={onClick}>{children}</button>;
    });

    const ParentComponent = () => {
        const [count, setCount] = useState(0);
        const [otherState, setOtherState] = useState(false);

        // This function will only be recreated if `count` changes
        const handleClick = useCallback(() => {
            setCount(prevCount => prevCount + 1);
        }, []); // No dependencies means it's created once

        // This function will only be recreated if `count` changes
        const handleAnotherClick = useCallback(() => {
            console.log('Current count:', count);
        }, [count]); // Depends on `count`

        return (
            <div>
                <p>Count: {count}</p>
                <MyButton onClick={handleClick}>Increment Count</MyButton>
                <MyButton onClick={handleAnotherClick}>Log Count</MyButton>
                <button onClick={() => setOtherState(!otherState)}>Toggle Other State ({String(otherState)})</button>
            </div>
        );
    };
    ```
  * **Custom Hooks:**
      * Functions that start with `use` and allow you to reuse stateful logic across components.
      * **Typing Custom Hooks:** Define types for parameters, return values, and any internal state.
    <!-- end list -->
    ```typescript
    import { useState, useEffect } from 'react';

    interface WindowSize {
        width: number;
        height: number;
    }

    function useWindowSize(): WindowSize {
        const [windowSize, setWindowSize] = useState<WindowSize>({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        useEffect(() => {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowSize;
    }

    // Usage:
    // const MyComponent = () => {
    //     const { width, height } = useWindowSize();
    //     return <p>Window size: {width}x{height}</p>;
    // };
    ```

-----

## 8\. Advanced React Patterns (with TypeScript)

  * **Refs (`useRef`, `forwardRef`, `useImperativeHandle`):**
      * **`useRef`:** (covered in Hooks).
      * **`forwardRef`:** Allows a parent component to pass a `ref` down to a child component, enabling the parent to access the child's underlying DOM element or another instance.
          * **Typing `forwardRef`:**
            ```typescript
            import React, { forwardRef, useRef, useImperativeHandle } from 'react';

            interface MyInputProps {
                placeholder: string;
            }

            // Define the ref type for the component
            type MyInputRef = HTMLInputElement;

            const MyInput = forwardRef<MyInputRef, MyInputProps>(({ placeholder }, ref) => {
                return (
                    <input type="text" ref={ref} placeholder={placeholder} />
                );
            });

            // Parent component using MyInput
            const ParentComponentWithInput = () => {
                const inputRef = useRef<MyInputRef>(null);

                const handleClick = () => {
                    if (inputRef.current) {
                        inputRef.current.focus();
                        inputRef.current.value = "Focused!";
                    }
                };

                return (
                    <div>
                        <MyInput ref={inputRef} placeholder="Type something..." />
                        <button onClick={handleClick}>Focus Input</button>
                    </div>
                );
            };

            // useImperativeHandle: For exposing specific methods/properties via ref
            interface CustomHandle {
                focus: () => void;
                clear: () => void;
            }

            const CustomInput = forwardRef<CustomHandle, MyInputProps>(({ placeholder }, ref) => {
                const internalInputRef = useRef<HTMLInputElement>(null);

                useImperativeHandle(ref, () => ({
                    focus: () => {
                        internalInputRef.current?.focus();
                    },
                    clear: () => {
                        if (internalInputRef.current) {
                            internalInputRef.current.value = '';
                        }
                    }
                }));

                return <input type="text" ref={internalInputRef} placeholder={placeholder} />;
            });
            ```
  * **Portals (`ReactDOM.createPortal`):**
      * Renders children into a DOM node that exists outside the DOM hierarchy of the parent component.
      * Useful for modals, tooltips, notifications, etc., to avoid z-index or overflow issues.
      * **Typing Portals:** No specific TypeScript types for `createPortal` itself, but ensure the target DOM node is correctly typed.
    <!-- end list -->
    ```typescript
    import React from 'react';
    import ReactDOM from 'react-dom';

    interface ModalProps {
        children: React.ReactNode;
        isOpen: boolean;
        onClose: () => void;
    }

    const Modal = ({ children, isOpen, onClose }: ModalProps) => {
        if (!isOpen) return null;

        // Ensure the portalRoot element exists in your index.html
        const portalRoot = document.getElementById('modal-root');
        if (!portalRoot) {
            console.error("Modal root element not found!");
            return null;
        }

        return ReactDOM.createPortal(
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                    {children}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>,
            portalRoot
        );
    };

    // Usage:
    // const App = () => {
    //     const [isModalOpen, setIsModalOpen] = useState(false);
    //     return (
    //         <div>
    //             <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    //             <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    //                 <h2>This is a Modal!</h2>
    //                 <p>Content rendered via a Portal.</p>
    //             </Modal>
    //             {/* <div id="modal-root"></div> in public/index.html */}
    //         </div>
    //     );
    // };
    ```
  * **Error Boundaries (Class Components only):**
      * Catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.
      * **Typing Error Boundaries:** Generic for `Props` and `State`.
    <!-- end list -->
    ```typescript
    import React, { Component, ReactNode } from 'react';

    interface ErrorBoundaryProps {
        children: ReactNode;
        fallback: ReactNode;
    }

    interface ErrorBoundaryState {
        hasError: boolean;
        error: Error | null;
    }

    class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
        constructor(props: ErrorBoundaryProps) {
            super(props);
            this.state = { hasError: false, error: null };
        }

        static getDerivedStateFromError(error: Error): ErrorBoundaryState {
            // Update state so the next render will show the fallback UI.
            return { hasError: true, error };
        }

        componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
            // You can also log the error to an error reporting service
            console.error("Uncaught error:", error, errorInfo);
        }

        render() {
            if (this.state.hasError) {
                return this.props.fallback;
            }
            return this.props.children;
        }
    }

    // Usage:
    // <ErrorBoundary fallback={<div>Something went wrong.</div>}>
    //     <BuggyComponent />
    // </ErrorBoundary>
    ```
  * **Render Props:**
      * A pattern where a component receives a function as a prop, and that function dictates what to render.
      * Enables reusable logic without coupling UI.
      * **Typing Render Props:** Type the function prop.
    <!-- end list -->
    ```typescript
    import React, { useState, ReactNode } from 'react';

    interface MouseTrackerProps {
        render: (position: { x: number; y: number }) => ReactNode;
    }

    const MouseTracker = ({ render }: MouseTrackerProps) => {
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

        const handleMouseMove = (event: React.MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        return (
            <div style={{ height: '200px', border: '1px solid black' }} onMouseMove={handleMouseMove}>
                {render(mousePosition)}
            </div>
        );
    };

    // Usage:
    // <MouseTracker render={(pos) => <p>Mouse is at {pos.x}, {pos.y}</p>} />
    ```
  * **Higher-Order Components (HOCs):**
      * Functions that take a component as an argument and return a new component with enhanced props/behavior.
      * Pre-Hooks pattern for reusable logic. Can be complex to type.
      * **Typing HOCs:** Requires careful use of generics, `keyof`, `Omit`, and `ComponentType`.
    <!-- end list -->
    ```typescript
    import React, { ComponentType, useState } from 'react';

    interface WithLoadingProps {
        isLoading: boolean;
    }

    function withLoading<P extends object>(
        WrappedComponent: ComponentType<P & WithLoadingProps> // Original props + HOC's props
    ) {
        return function WithLoading(props: P) {
            const [isLoading, setIsLoading] = useState(true);

            // Simulate loading
            React.useEffect(() => {
                const timer = setTimeout(() => setIsLoading(false), 2000);
                return () => clearTimeout(timer);
            }, []);

            return <WrappedComponent {...props as P} isLoading={isLoading} />;
        };
    }

    interface MyComponentProps {
        message: string;
    }

    const MyComponent = ({ message, isLoading }: MyComponentProps & WithLoadingProps) => {
        if (isLoading) return <p>Loading...</p>;
        return <div>{message}</div>;
    };

    const MyComponentWithLoading = withLoading(MyComponent);

    // Usage:
    // <MyComponentWithLoading message="Data loaded!" />
    ```

-----

## 9\. Performance Optimization (with TypeScript)

  * **`React.memo` (for Functional Components):**
      * A HOC that memorizes a component. Prevents re-rendering if its props have not changed (shallow comparison).
      * **Typing `memo`:** No special TypeScript concerns; it works with typed functional components naturally.
    <!-- end list -->
    ```typescript
    import React, { memo } from 'react';

    interface DisplayProps {
        value: string;
    }

    const MemorizedDisplay = memo(({ value }: DisplayProps) => {
        console.log('MemorizedDisplay rendered');
        return <p>Display: {value}</p>;
    });

    // Parent usage: If `data.value` doesn't change, MemorizedDisplay won't re-render.
    // <MemorizedDisplay value={data.value} />
    ```
  * **`useMemo` & `useCallback` (covered in Hooks):**
      * Memorize values and functions respectively to prevent unnecessary recalculations and re-creation of function instances, which helps `React.memo` work effectively.
  * **Lazy Loading & Code Splitting (`React.lazy` & `Suspense`):**
      * Splits the application bundle into smaller chunks, loading them on demand.
      * Improves initial load time.
      * `React.lazy` takes a function that returns a Promise, which resolves to a module with a default export.
      * `Suspense` is used to display a fallback UI while lazy components are loading.
      * **Typing Lazy Components:** Use `typeof import('./path')` for type safety.
    <!-- end list -->
    ```tsx
    import React, { Suspense, lazy } from 'react';

    // Lazily load MyLazyComponent. Ensure it has a default export.
    const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

    // If MyLazyComponent has specific props, you can type it like this:
    // const MyLazyComponent = lazy(() => import('./MyLazyComponent')) as React.LazyExoticComponent<React.ComponentType<MyLazyComponentProps>>;


    const App = () => {
        return (
            <div>
                <h1>App Header</h1>
                <Suspense fallback={<div>Loading component...</div>}>
                    <MyLazyComponent />
                </Suspense>
            </div>
        );
    };
    ```
  * **Virtualization (e.g., `react-window`, `react-virtualized`):**
      * Renders only the visible portion of a large list or table, significantly improving performance for long lists.
  * **Profiling (React DevTools):**
      * Use the React Developer Tools to identify performance bottlenecks (e.g., excessive re-renders, long render times).

-----

## 10\. Error Handling in React (with TypeScript)

  * **JavaScript `try...catch`:** For synchronous code errors.
  * **Error Boundaries (covered in Advanced Patterns):** For catching errors in the render phase, lifecycle methods, and constructors of child components.
  * **`Promise.catch()` and `async/await` `try...catch`:** For handling errors in asynchronous operations (e.g., data fetching in `useEffect`).
  * **Global Error Logging:**
      * Use `window.onerror` or dedicated error monitoring services (Sentry, Bugsnag) for unhandled errors.

-----

## 11\. Routing (Basic Concepts)

  * **Client-Side Routing:** Navigating between different views of a single-page application without full page reloads.
  * **Popular Libraries:** `React Router`, `Next.js` built-in routing.
  * **Core Concepts:**
      * `BrowserRouter` (or `HashRouter`).
      * `Routes` (or `Switch` for older versions).
      * `Route` (path matching).
      * `Link` (for navigation).
      * `useNavigate`, `useParams`, `useLocation` (hooks from `react-router-dom`).
  * **Typing with React Router (v6+):**
      * `useParams`: Type the shape of the parameters.
      * `useLocation`: Access `state` property if passing state.
    <!-- end list -->
    ```typescript
    import { useParams, useNavigate } from 'react-router-dom';

    interface UserDetailParams {
        userId: string; // From route path like /users/:userId
    }

    const UserDetailPage = () => {
        // useParams returns an object with string values. Type assertion might be needed
        // if you want stricter types, or check for existence.
        const { userId } = useParams<UserDetailParams>(); // userId is string | undefined

        const navigate = useNavigate();

        if (!userId) {
            return <p>User ID is missing.</p>;
        }

        return (
            <div>
                <h1>User Detail for ID: {userId}</h1>
                <button onClick={() => navigate('/users')}>Back to Users</button>
            </div>
        );
    };
    ```

-----

## 12\. Testing React Components (with TypeScript)

  * **Why Test?** Ensures code quality, prevents regressions, improves confidence, facilitates refactoring.
  * **Testing Libraries:**
      * **Jest:** Test runner, assertion library, mocking framework. Configured for TypeScript (e.g., with `ts-jest` or `@babel/preset-typescript`).
      * **React Testing Library (RTL):** Recommended for testing React components.
          * Focuses on testing user-facing behavior rather than implementation details.
          * Uses `screen` queries (`getByRole`, `getByText`, `findBy`, `queryBy`).
          * Simulates user interactions (`fireEvent`).
      * **Cypress/Playwright:** For End-to-End (E2E) testing.
  * **Types of Tests in React:**
      * **Unit Tests:** Test individual components or small functions in isolation.
      * **Integration Tests:** Test how multiple components interact together.
      * **Snapshot Tests:** Compare the rendered output of a component against a previously saved snapshot. Useful for detecting accidental UI changes.
  * **Setting up Jest & RTL with TypeScript:**
      * `jest.config.js` or `package.json` config.
      * `tsconfig.json` including `jest-dom` types.
  * **Typing Mocks:** When mocking modules or functions, provide explicit types for the mocked implementations.
    ```typescript
    // Example: Mocking a custom hook
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import MyComponent from './MyComponent';
    import { useAuth } from './useAuth';

    // Mock the useAuth hook explicitly
    jest.mock('./useAuth', () => ({
        useAuth: jest.fn(),
    }));

    // Cast the mock to JestMockedFunction to access its specific methods
    const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

    describe('MyComponent', () => {
        it('renders authenticated state correctly', () => {
            mockUseAuth.mockReturnValue({ // Define the mock return value
                isAuthenticated: true,
                user: { id: '1', name: 'Test User' },
                login: jest.fn(),
                logout: jest.fn(),
            });

            render(<MyComponent />);
            expect(screen.getByText(/Welcome, Test User/i)).toBeInTheDocument();
        });

        it('calls logout on button click', async () => {
            const mockLogout = jest.fn();
            mockUseAuth.mockReturnValue({
                isAuthenticated: true,
                user: { id: '1', name: 'Test User' },
                login: jest.fn(),
                logout: mockLogout,
            });

            render(<MyComponent />);
            await userEvent.click(screen.getByRole('button', { name: /logout/i }));
            expect(mockLogout).toHaveBeenCalledTimes(1);
        });
    });
    ```

-----

## 13\. Project Setup & Tooling

  * **Creating a React TypeScript Project:**
      * **Create React App (CRA):** `npx create-react-app my-app --template typescript` (legacy, slower).
      * **Vite:** `npm create vite@latest my-app --template react-ts` (recommended for new projects due to speed).
      * **Next.js:** `npx create-next-app@latest --typescript` (for full-stack/SSR/SSG apps).
  * **`tsconfig.json` for React:**
      * **`"jsx": "react-jsx"`** (or `"react"` for older versions/CRA). This tells TypeScript how to compile JSX. `react-jsx` is the modern default, no need to `import React` in every file.
      * **`"lib"`:** Include `dom` and the target ES version (e.g., `es2020`).
      * **`"allowSyntheticDefaultImports": true`** and **`"esModuleInterop": true`** for better import compatibility.
      * **`"strict": true`** (highly recommended for full type safety).
      * Consider `"noImplicitAny"`, `"strictNullChecks"`, etc.
  * **ESLint and Prettier:**
      * **ESLint:** Use `@typescript-eslint/parser` and plugins like `@typescript-eslint/eslint-plugin`, `eslint-plugin-react`, `eslint-plugin-react-hooks`.
      * **Prettier:** Integrates seamlessly with TypeScript and JSX.
  * **Vite Configuration (`vite.config.ts`):**
      * Uses `@vitejs/plugin-react` for React support.
      * Typically uses `esbuild` for faster transpilation.

-----

## 14\. Common Patterns & Best Practices

  * **Atomic Design/Component Structure:** Organizing components by their reusability and complexity (Atoms, Molecules, Organisms, Templates, Pages).
  * **Container vs. Presentational Components (Older Pattern):**
      * **Presentational (Dumb):** Concerned with *how* things look. Receive data and callbacks via props. Often functional components.
      * **Container (Smart):** Concerned with *how* things work. Manage state, fetch data, pass data to presentational components.
      * (Less strict with Hooks, as functional components can now manage state).
  * **Prop Drilling vs. Context/State Management:** Understand when to use simple prop passing versus global state solutions.
  * **Composition over Inheritance:** React strongly favors component composition for reusability.
  * **Single Responsibility Principle:** Each component should ideally do one thing well.
  * **Accessibility (A11y):**
      * Use semantic HTML.
      * Provide `alt` text for images.
      * Handle keyboard navigation.
      * Use `aria-*` attributes when semantic HTML is insufficient.
  * **Immutability in State Updates:** Always create new array/object references when updating state (e.g., `[...arr, newItem]`, `{ ...obj, prop: value }`). Never directly mutate `state`.
  * **Clean-up Functions in `useEffect`:** Always provide a cleanup function for effects that set up subscriptions, timers, or event listeners.
  * **Strict Mode (`<React.StrictMode>`):**
      * Helps identify potential problems in an application (e.g., deprecated lifecycle methods, unexpected side effects).
      * Runs checks only in development mode.
  * **When to use `any` (and when to avoid it):**
      * **Avoid:** As a default for unknown data.
      * **Use sparingly:** For deeply nested third-party data where types are hard to define, or when quickly prototyping. Always aim to replace it later.
      * Prefer `unknown` over `any` for incoming uncertain data.
  * **Typing API Responses:** Define interfaces/types for expected API data structures. Use type guards or validation libraries (e.g., Zod, Yup) for runtime validation of incoming data.

-----

## 15\. Common Interview Questions & Scenarios

  * **"Why did you choose TypeScript for your React project?"**
  * **"How do you type functional components' props and state?"**
  * **"Explain `React.FC` vs. direct interface for typing props."**
  * **"How do you type `useState` when the initial value is null?"**
  * **"How do you type event handlers in React with TypeScript?"**
  * **"What are the benefits of using `useReducer` over `useState`? How do you type its actions and state?"**
  * **"Explain `useRef` and how you type it when accessing DOM elements."**
  * **"When would you use `useMemo` and `useCallback`? How do they help performance?"**
  * **"What are Custom Hooks? How do you type them?"**
  * **"How do you type Context API providers and consumers?"**
  * **"Explain the concept of `forwardRef` and how to use it with TypeScript."**
  * **"What are Portals and when would you use them?"**
  * **"What are Error Boundaries? Why are they useful?"**
  * **"How do you type the `children` prop?"**
  * **"Describe a situation where TypeScript helped you catch a bug in a React application."**
  * **"How do you handle routing in a React TypeScript application?"**
  * **"Discuss your approach to testing React components with TypeScript using Jest and React Testing Library."**
  * **"How do you configure `tsconfig.json` for a React project?"**
  * **"What are some common TypeScript utility types (`Partial`, `Omit`, `Pick`) and how can they be useful in React props/state?"**
  * **"How do you ensure type safety when dealing with API responses in React?"**
  * **Coding Scenarios:**
      * Create a simple counter component using `useState` and typed state/props.
      * Implement a data-fetching component using `useEffect` with appropriate types for loading, error, and data states.
      * Create a reusable input component with `forwardRef` and expose a `focus` method via `useImperativeHandle`.
      * Write a custom hook that encapsulates some common logic and type it.
      * Refactor a small component from JavaScript to TypeScript, identifying implicit `any` types.
      * Demonstrate using `useReducer` for a simple form state management with discriminated actions.
      * Set up a mock for a hook or a service in a test and ensure it's typed correctly.

-----