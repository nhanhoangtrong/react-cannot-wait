This is an example for React.useState in function component. React.useState get an initial value as param and return current state, the function to update state.

```js
const Counter = () => {
    const [ count, setCount ] = React.useState(0);

    return (
        <div>
            <p>Current: {count}</p>
            <button onClick={() => setCount(count + 1)}>incr</button>
        </div>
    );
};

<Counter />
```

We can use the lazy initialization by passing a function as param, so the state initialization can be start right after first time rendering

```js
const Counter = () => {
    const [ count, setCount ] = React.useState(() => 0);

    return (
        <div>
            <p>Current: {count}</p>
            <button onClick={() => setCount(count + 1)}>incr</button>
        </div>
    );
};

<Counter />
```