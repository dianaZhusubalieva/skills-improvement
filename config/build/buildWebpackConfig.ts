import {BuildOptions} from "./types/config";
import webpack from 'webpack';
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options
    return {
        mode: mode,
        // точка начала сборки проекта
        entry: paths.entry,
        output: {
            // как будет называться главный файл сборки приложения
            filename: "[name].[contenthash].js",
            // путь куда должна происходить сборка (build/dist)
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        // чтобы видеть в какой строчке ошибка
        // тк при билде образуется только один исходный файл
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined

    }

}