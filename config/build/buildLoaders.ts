import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    // ts-loader can transpile jsx also, if no tsx- we would've to download babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // will catch ts & tsx files
        use: ['ts-loader'],// loader allows to use typescript
        exclude: /node_modules/,
    };
    const cssLoaders = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };
    return [
        typescriptLoader,
        cssLoaders
    ]
}