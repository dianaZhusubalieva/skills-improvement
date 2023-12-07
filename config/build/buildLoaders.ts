import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    // to load svg files
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                babelrcRoots: ["../*"],
            },
        },
    };

    // to load jpeg, png files
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    // ts-loader can transpile jsx also, if no tsx- we would've to download babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // will catch ts & tsx files
        use: ["ts-loader"], // loader allows to use typescript
        exclude: /node_modules/,
    };
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // give unique classes after build only for module css files not for all .scss files
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]"
                            : "[hash:base64:8]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [typescriptLoader, cssLoaders, svgLoader, fileLoader, babelLoader];
}
