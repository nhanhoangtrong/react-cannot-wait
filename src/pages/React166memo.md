
React.memo is PureComponent for function component. The following is an exanple of using React.memo to create a component which only rendered when shallow `props` changed.

```js
const FuncComponent = ({ text }) => {
    console.log("Component's rendering");

    return (
        <div>
            Render with text: '{text}'.
        </div>
    );
};

const MemoComponent = React.memo(FuncComponent);

class ExampleWrapper extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            number: 0,
            text: 'This is an unchange texting',
        };
    }

    render() {
        const { number, text } = this.state;

        return (
            <div>
                <p>Current: {number}</p>
                <FuncComponent text={text} />
                <MemoComponent text={text} />

                <button onClick={() => this.setState(({ number }) => ({ number: 0 }))}>Dumb change it</button>
            </div>
        );
    }
}

<ExampleWrapper />
```

Or we can create a custom comparison function which will return `true` to mark should be re-render or not.

```js
const areEqual = (prevProps, nextProps) => prevProps.text === nextProps.text;

const FuncComponent = ({ number, text }) => {
    console.log("Component's rendering");

    return (
        <div>
            Render with text: { text } and { number }
        </div>
    );
};

const MemoComponent = React.memo(FuncComponent, areEqual);

class ExampleWrapper extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            number: 0,
            text: 'This is another example text',
        };
    }

    render() {
        const { number, text } = this.state;
        return (
            <div>
                <p>Current: {number}</p>
                <FuncComponent text={text} number={number} />
                <MemoComponent text={text} number={number} />

                <button onClick={() => this.setState(({ number }) => ({ number: number + 1 }))}>Dumb change it</button>
            </div>
        );
    }
}

<ExampleWrapper />
```
