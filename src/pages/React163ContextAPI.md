This example create a theme context which will be changed by a consumer

```js
const THEMES = {
    darkMoon: {
        name: 'Dark Moon',
        fgColor: '#fafafa',
        bgColor: '#adadad',
    },
    lightMoon: {
        name: 'Light Moon',
        bgColor: '#fafafa',
        fgColor: '#adadad',
    },
};

const ThemeContext = React.createContext({
    // Default value for this context
    ...THEMES.darkMoon,
    changeTheme: () => {},
});

class ThemeProvider extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            currentTheme: 'darkMoon',
        };

        this.onThemeChange = this.onThemeChange.bind(this);
    }

    onThemeChange(theme) {
        this.setState({
            currentTheme: theme,
        });
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                ...THEMES[this.state.currentTheme],
                changeTheme: this.onThemeChange,
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

<ThemeProvider>
    <ThemeContext.Consumer>
        {({ name, bgColor, fgColor, changeTheme }) => (
            <div style={{ padding: 20, backgroundColor: bgColor, color: fgColor, }}>
                <div>You are using <strong>{name}</strong></div>
                <p>Plastic denim Kowloon woman car kanji warehouse network sub-orbital-ware assault papier-mache face forwards weathered. Long-chain hydrocarbons woman Chiba towards car youtube paranoid man euro-pop post-Shibuya shanty town. Nano-franchise papier-mache weathered spook realism 3D-printed bomb smart. Pen dolphin kanji math-RAF neon crypto-sentient warehouse Tokyo drugs modem savant euro-pop tower carbon paranoid. Pre-decay smart-artisanal computer soul-delay pen tower market. Legba apophenia drugs alcohol concrete bomb cyber-beef noodles Shibuya fetishism tattoo A.I. gang marketing. Pre-industrial grade katana semiotics city man euro-pop tube silent.</p>
                <div>
                    <select name="select-theme" onChange={(e) => {
                        changeTheme(e.target.value);
                    }}>
                        {Object.keys(THEMES).map((theme) => <option key={theme} value={theme}>{THEMES[theme].name}</option>)}
                    </select>
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
</ThemeProvider>

```
