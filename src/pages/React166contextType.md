In React 16.6.0 a new component class property called `contextType` which will help us build context consumer much more easier, in an elegant way.

```js
const MyContext = React.createContext({
    num: 0,
    incr: () => {},
});

class MyNumberConsumer extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <div>
                <p>Received value: {this.context.num}</p>
                <button onClick={this.context.incr}>incr</button>
            </div>
        );
    }
}

/** Assign context type */
MyNumberConsumer.contextType = MyContext;

class MyContextProvider extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);

        this.state = { current: 0 };

        this.incr = this.incr.bind(this);
    }
    incr() {
        this.setState({ current: this.state.current+1, });
    }
    render() {
        const { current } = this.state;
        return (
            <MyContext.Provider value={{num: current, incr: this.incr, }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

/** So we only need to pass the provider */
<MyContextProvider>
    {/* And then using the consumer somewhere down the tree */}
    <MyNumberConsumer />
</MyContextProvider>
```
