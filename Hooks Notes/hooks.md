🔥 What are Hooks?

Introduced in React 16.8.

Allow you to use state and other React features in functional components (before hooks, only class components had state/lifecycle).

Hooks = functions that hook into React internals.

1️⃣ useState — State Management
📝 What it does:

Lets you add state to a functional component.

Example:
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count = state, setCount = updater

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

📌 Notes (useState)

✅ Initial value is used only once (on first render).

✅ Updating state causes re-render.

✅ State updates are asynchronous. Use updater function when new value depends on previous:

setCount(prev => prev + 1);


✅ Can store numbers, strings, objects, arrays.

2️⃣ useEffect — Side Effects
📝 What it does:

Handles side effects: API calls, subscriptions, DOM manipulations, timers.

Example:
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted or Count Updated");
    const timer = setInterval(() => setCount(c => c + 1), 1000);

    return () => clearInterval(timer); // cleanup
  }, []); // dependency array
}

📌 Notes (useEffect)

✅ Runs after render.

✅ Dependency Array:

[] → run once (on mount).

[count] → run when count changes.

No array → run on every render.

✅ Cleanup is important for timers, event listeners, subscriptions.

3️⃣ useContext — Context API
📝 What it does:

Provides a way to pass data through component tree without prop drilling.

Example:
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <h1>Theme is {theme}</h1>;
}

📌 Notes (useContext)

✅ Avoids deeply nested props.

✅ Works great for themes, auth, language.

❌ But too many contexts = messy, use with care.

4️⃣ useRef — References
📝 What it does:

Gives direct access to DOM elements or stores mutable values without re-rendering.

Example:
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

📌 Notes (useRef)

✅ ref.current is mutable.

✅ Changing it does not cause re-render.

✅ Great for timers, previous values, or uncontrolled form elements.

5️⃣ useMemo — Performance Optimization
📝 What it does:

Memoizes a value (avoids expensive recalculations).

Example:
import { useMemo, useState } from "react";

function ExpensiveCalc({ num }) {
  const squared = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return <h1>{squared}</h1>;
}

📌 Notes (useMemo)

✅ Runs only when dependencies change.

✅ Useful for expensive computations.

❌ Don’t overuse — adds complexity.

6️⃣ useCallback — Memoized Functions
📝 What it does:

Prevents functions from being re-created on every render.

Example:
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(c => c + 1), []);

  return <button onClick={increment}>Count: {count}</button>;
}

📌 Notes (useCallback)

✅ Keeps same function instance between renders.

✅ Good for passing functions to child components (avoids unnecessary re-renders).

7️⃣ useReducer — Complex State Logic
📝 What it does:

Manages complex state using reducer function (similar to Redux).

Example:
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

📌 Notes (useReducer)

✅ Better than useState when state logic is complex.

✅ Useful for forms, toggles, and Redux-like state.

8️⃣ useLayoutEffect

Like useEffect, but fires synchronously after DOM mutations.

Use when you need to measure DOM before painting.

⚠️ Only use when you need layout measurements → otherwise stick to useEffect.

9️⃣ useImperativeHandle

Customizes the instance value exposed when using ref with forwardRef.

Rarely needed, used in component libraries.

🔟 Custom Hooks

👉 A custom hook is just a function that starts with use and uses other hooks.

Example:
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}


Usage:

function App() {
  const width = useWindowWidth();
  return <h1>Window width: {width}</h1>;
}

📌 Notes (Custom Hooks)

✅ Helps reuse logic (API calls, auth, form handling).

✅ Must always start with use.

✅ Follows the Rules of Hooks:

Only call hooks at top level.

Only call hooks in React functions (components or custom hooks).

✅ Summary Notes

useState → local state.

useEffect → side effects (API calls, subscriptions).

useContext → avoid prop drilling.

useRef → refs/mutable values without re-render.

useMemo → cache computed values.

useCallback → cache functions.

useReducer → complex state logic.

useLayoutEffect → sync side effects (rare).

Custom Hooks → logic reuse.