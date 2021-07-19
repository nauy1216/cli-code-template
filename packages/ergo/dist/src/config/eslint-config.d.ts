export declare namespace env {
    const browser: boolean;
    const es6: boolean;
    const jest: boolean;
}
export declare namespace globals {
    const document: string;
    const navigator: string;
    const window: string;
}
export declare const parser: string;
export declare namespace parserOptions {
    const ecmaVersion: number;
    namespace ecmaFeatures {
        const jsx: boolean;
    }
    const sourceType: string;
}
export declare const plugins: string[];
declare const _extends: string[];
export { _extends as extends };
export declare const rules: {
    "no-var": string;
    "accessor-pairs": (string | {
        setWithoutGet: boolean;
        enforceForClassMembers: boolean;
    })[];
    "array-bracket-spacing": string[];
    "array-callback-return": (string | {
        allowImplicit: boolean;
        checkForEach: boolean;
    })[];
    "arrow-spacing": (string | {
        before: boolean;
        after: boolean;
    })[];
    "block-spacing": string[];
    "brace-style": (string | {
        allowSingleLine: boolean;
    })[];
    camelcase: (string | {
        allow: string[];
        properties: string;
        ignoreGlobals: boolean;
    })[];
    "comma-dangle": (string | {
        arrays: string;
        objects: string;
        imports: string;
        exports: string;
        functions: string;
    })[];
    "comma-spacing": (string | {
        before: boolean;
        after: boolean;
    })[];
    "comma-style": string[];
    "computed-property-spacing": (string | {
        enforceForClassMembers: boolean;
    })[];
    "constructor-super": string;
    curly: string[];
    "default-case-last": string;
    "dot-location": string[];
    "dot-notation": (string | {
        allowKeywords: boolean;
    })[];
    "eol-last": string;
    eqeqeq: (string | {
        null: string;
    })[];
    "func-call-spacing": string[];
    "generator-star-spacing": (string | {
        before: boolean;
        after: boolean;
    })[];
    indent: (string | number | {
        SwitchCase: number;
        VariableDeclarator: number;
        outerIIFEBody: number;
        MemberExpression: number;
        FunctionDeclaration: {
            parameters: number;
            body: number;
        };
        FunctionExpression: {
            parameters: number;
            body: number;
        };
        CallExpression: {
            arguments: number;
        };
        ArrayExpression: number;
        ObjectExpression: number;
        ImportDeclaration: number;
        flatTernaryExpressions: boolean;
        ignoreComments: boolean;
        ignoredNodes: string[];
        offsetTernaryExpressions: boolean;
    })[];
    "key-spacing": (string | {
        beforeColon: boolean;
        afterColon: boolean;
    })[];
    "keyword-spacing": (string | {
        before: boolean;
        after: boolean;
    })[];
    "lines-between-class-members": (string | {
        exceptAfterSingleLine: boolean;
    })[];
    "multiline-ternary": string[];
    "new-cap": (string | {
        newIsCap: boolean;
        capIsNew: boolean;
        properties: boolean;
    })[];
    "new-parens": string;
    "no-array-constructor": string;
    "no-async-promise-executor": string;
    "no-caller": string;
    "no-case-declarations": string;
    "no-class-assign": string;
    "no-compare-neg-zero": string;
    "no-cond-assign": string;
    "no-const-assign": string;
    "no-constant-condition": (string | {
        checkLoops: boolean;
    })[];
    "no-control-regex": string;
    "no-debugger": string;
    "no-delete-var": string;
    "no-dupe-args": string;
    "no-dupe-class-members": string;
    "no-dupe-keys": string;
    "no-duplicate-case": string;
    "no-useless-backreference": string;
    "no-empty": (string | {
        allowEmptyCatch: boolean;
    })[];
    "no-empty-character-class": string;
    "no-empty-pattern": string;
    "no-eval": string;
    "no-ex-assign": string;
    "no-extend-native": string;
    "no-extra-bind": string;
    "no-extra-boolean-cast": string;
    "no-extra-parens": string[];
    "no-fallthrough": string;
    "no-floating-decimal": string;
    "no-func-assign": string;
    "no-global-assign": string;
    "no-implied-eval": string;
    "no-import-assign": string;
    "no-invalid-regexp": string;
    "no-irregular-whitespace": string;
    "no-iterator": string;
    "no-labels": (string | {
        allowLoop: boolean;
        allowSwitch: boolean;
    })[];
    "no-lone-blocks": string;
    "no-loss-of-precision": string;
    "no-misleading-character-class": string;
    "no-prototype-builtins": string;
    "no-useless-catch": string;
    "no-mixed-operators": (string | {
        groups: string[][];
        allowSamePrecedence: boolean;
    })[];
    "no-mixed-spaces-and-tabs": string;
    "no-multi-spaces": string;
    "no-multi-str": string;
    "no-multiple-empty-lines": (string | {
        max: number;
        maxEOF: number;
    })[];
    "no-new": string;
    "no-new-func": string;
    "no-new-object": string;
    "no-new-symbol": string;
    "no-new-wrappers": string;
    "no-obj-calls": string;
    "no-octal": string;
    "no-octal-escape": string;
    "no-proto": string;
    "no-redeclare": (string | {
        builtinGlobals: boolean;
    })[];
    "no-regex-spaces": string;
    "no-return-assign": string[];
    "no-self-assign": (string | {
        props: boolean;
    })[];
    "no-self-compare": string;
    "no-sequences": string;
    "no-shadow-restricted-names": string;
    "no-sparse-arrays": string;
    "no-tabs": string;
    "no-template-curly-in-string": string;
    "no-this-before-super": string;
    "no-throw-literal": string;
    "no-trailing-spaces": string;
    "no-undef": string;
    "no-undef-init": string;
    "no-unexpected-multiline": string;
    "no-unmodified-loop-condition": string;
    "no-unneeded-ternary": (string | {
        defaultAssignment: boolean;
    })[];
    "no-unreachable": string;
    "no-unreachable-loop": string;
    "no-unsafe-finally": string;
    "no-unsafe-negation": string;
    "no-unused-expressions": (string | {
        allowShortCircuit: boolean;
        allowTernary: boolean;
        allowTaggedTemplates: boolean;
    })[];
    "no-unused-vars": (string | {
        args: string;
        caughtErrors: string;
        ignoreRestSiblings: boolean;
        vars: string;
    })[];
    "no-use-before-define": (string | {
        functions: boolean;
        classes: boolean;
        variables: boolean;
    })[];
    "no-useless-call": string;
    "no-useless-computed-key": string;
    "no-useless-constructor": string;
    "no-useless-escape": string;
    "no-useless-rename": string;
    "no-useless-return": string;
    "no-void": string;
    "no-whitespace-before-property": string;
    "no-with": string;
    "object-curly-newline": (string | {
        multiline: boolean;
        consistent: boolean;
    })[];
    "object-curly-spacing": string[];
    "object-property-newline": (string | {
        allowMultiplePropertiesPerLine: boolean;
    })[];
    "one-var": (string | {
        initialized: string;
    })[];
    "operator-linebreak": (string | {
        overrides: {
            "?": string;
            ":": string;
            "|>": string;
        };
    })[];
    "padded-blocks": (string | {
        blocks: string;
        switches: string;
        classes: string;
    })[];
    "prefer-const": (string | {
        destructuring: string;
    })[];
    "prefer-promise-reject-errors": string;
    "prefer-regex-literals": (string | {
        disallowRedundantWrapping: boolean;
    })[];
    "quote-props": string[];
    quotes: (string | {
        avoidEscape: boolean;
        allowTemplateLiterals: boolean;
    })[];
    "rest-spread-spacing": string[];
    semi: string[];
    "semi-spacing": (string | {
        before: boolean;
        after: boolean;
    })[];
    "space-before-blocks": string[];
    "space-before-function-paren": (string | number)[];
    "space-in-parens": string[];
    "space-infix-ops": string;
    "space-unary-ops": (string | {
        words: boolean;
        nonwords: boolean;
    })[];
    "spaced-comment": (string | {
        line: {
            markers: string[];
        };
        block: {
            balanced: boolean;
            markers: string[];
            exceptions: string[];
        };
    })[];
    "symbol-description": string;
    "template-curly-spacing": string[];
    "template-tag-spacing": string[];
    "unicode-bom": string[];
    "use-isnan": (string | {
        enforceForSwitchCase: boolean;
        enforceForIndexOf: boolean;
    })[];
    "valid-typeof": (string | {
        requireStringLiterals: boolean;
    })[];
    "wrap-iife": (string | {
        functionPrototypeMethods: boolean;
    })[];
    "yield-star-spacing": string[];
    yoda: string[];
    "import/export": string;
    "import/first": string;
    "import/no-absolute-path": (string | {
        esmodule: boolean;
        commonjs: boolean;
        amd: boolean;
    })[];
    "import/no-duplicates": string;
    "import/no-named-default": string;
    "import/no-webpack-loader-syntax": string;
    "node/handle-callback-err": string[];
    "node/no-callback-literal": string;
    "node/no-deprecated-api": string;
    "node/no-exports-assign": string;
    "node/no-new-require": string;
    "node/no-path-concat": string;
    "node/process-exit-as-throw": string;
    "promise/param-names": string;
};
export declare const overrides: never[];
