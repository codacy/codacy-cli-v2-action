// [eslint-plugin-import] Error: Duplicate imports
/*eslint es-x/no-modules: off */
import React from 'react';
import { useState } from 'react';

// [eslint-plugin-unused-imports] Error: Unused import
import { useEffect } from 'react';

// [eslint-plugin-n] Error: Missing require (file doesn't exist)
import fs from 'node:fs';
const missing = require('./non-existent-file.js');

// [eslint-plugin-mocha] Error: Exclusive test (.only is forbidden)
describe('My Test Suite', () => {
    it.only('should fail linting', () => {
        // ...
    });
});

function App() {
    // [eslint-plugin-react-hooks] Error: Hooks must be at top level
    if (true) {
        const [count, setCount] = useState(0);
    }

    return (
        <div>Hello World</div>
    );
}

export default App;