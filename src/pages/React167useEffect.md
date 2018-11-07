React.useEffect accepts a function which will be run just like componentDidMount lifecycle for function component, which could let us use DOM APIs in more consistent and safety way. If the effect uses or creates some resources, the passed function also could return a function which will be called to clean up the effect to prevent memory leaks (like componentWillUnmount lifecycle).

### Side effects safety

```js
const TitleTrigger = ({ docTitle }) => {
    React.useEffect(() => {
        console.log('Change title to:', docTitle);
        document.title = docTitle;
    });

    return (
        <p>Current title: {docTitle}</p>
    );
};

<div>
    <TitleTrigger docTitle="Hello" />
    <TitleTrigger docTitle="Hello World" />
</div>
```

### Handle DOM events

```js

const ResizeListener = () => {
    // Initialize width and height of window
    const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);
    const windowResizeListener = () => {
        setSize([window.innerWidth, window.innerHeight]);
    };

    React.useEffect(() => {
        // Register the listener
        console.log('register listener');
        window.addEventListener('resize', windowResizeListener);

        // Return a function will call after component
        return () => {
            console.log('unregister listener');
            window.removeEventListener('resize', windowResizeListener);
        };
    });

    return <p>Current Window Size: {size[0]}px x {size[1]}px </p>;
};
<div>
    <ResizeListener />
    <ResizeListener />
</div>
``` 