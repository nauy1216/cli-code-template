export default packageConfigs;
declare const packageConfigs: {
    input: string;
    external: never[];
    plugins: any[];
    output: any;
    onwarn: (msg: any, warn: any) => void;
    treeshake: {
        moduleSideEffects: boolean;
    };
}[];
