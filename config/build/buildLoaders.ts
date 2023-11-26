import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    return [
        {
            test: /\.tsx?$/, // will catch ts & tsx files
            use: ['ts-loader'],// loader allows to use typescript
            exclude: /node_modules/,
        },
    ]
}