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
            filename: "[name].js",
            // путь куда должна происходить сборка (build/dist)
            path: paths.build
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        // чтобы видеть в какой строчке ошибка
        // тк при билде образуется только один исходный файл
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined

    }

}