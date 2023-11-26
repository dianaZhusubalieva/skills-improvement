import {BuildOptions} from "./types/config";
import webpack from 'webpack';
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options
    return {
        mode: mode,
        // точка начала сборки проекта
        entry: paths.entry,
        output: {
            // как будет называться главный файл сборки приложения
            filename: "[name].[contenthash].js",
            // путь куда должна происходить сборка (build/dist)
            path: paths.build
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),

    }

}