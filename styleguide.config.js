const path = require('path');

module.exports = {
    title: 'Cannot Wait',
    serverPort: 3001,
    theme: {
        baseBackground: '#fdfdfc',
        link: '#274e75',
        linkHover: '#90a7bf',
        border: '#e0d2de',
    },
    ribbon: {
        url: 'https://github.com/nhanhoangtrong/react-cannot-wait',
        title: 'Fork me on Github',
    },
    // Customize styleguidist components
    styleguideComponents: {
        LogoRenderer: path.join(__dirname, 'src/styleguidist/LogoRenderer'),
        StyleGuideRenderer: path.join(__dirname, 'src/styleguidist/StyleGuideRenderer'),
    },
    sections: [
        {
            name: 'React 16.3: Official Context API',
            content: 'src/pages/React163ContextAPI.md',
        },
        {
            name: 'React 16.6: Component contextType',
            content: 'src/pages/React166contextType.md',
        },
        {
            name: 'React 16.6: React.lazy',
            content: 'src/pages/React166lazy.md',
        },
        {
            name: 'React 16.6: React.memo',
            content: 'src/pages/React166memo.md',
        },
        {
            name: 'React 16.7(beta): React.useState',
            content: 'src/pages/React167useState.md',
        },
        {
            name: 'React 16.7(beta): React.useEffect',
            content: 'src/pages/React167useEffect.md',
        },
        {
            name: 'React 16.7(beta): React.useContext',
            content: 'src/pages/React167useContext.md',
        },
    ],
    exampleMode: 'expand',
    pagePerSection: true,
    styleguideDir: 'build',
};
