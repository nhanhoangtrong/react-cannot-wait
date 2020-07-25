import React, { Suspense } from "react";
import dracula from "react-syntax-highlighter/styles/hljs/dracula";

const codeString = `
import React, { Suspense } from 'react';
import { docco } from 'react-syntax-highlighter/styles/hljs';

const codeString = \`
function logger() {
    console.log(...arguments);
}

logger('Hello World!');
\`;

const ReactSyntaxHighlighter = React.lazy(() => import('react-syntax-highlighter'));

const Wrapper = ({}) => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ReactSyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </ReactSyntaxHighlighter>
            </Suspense>
        </div>
    );
};

export default Wrapper;
`;

const ReactSyntaxHighlighter = React.lazy(() =>
  import("react-syntax-highlighter")
);

const Wrapper = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactSyntaxHighlighter language="javascriptreact" style={dracula}>
          {codeString}
        </ReactSyntaxHighlighter>
      </Suspense>
    </div>
  );
};

export default Wrapper;
