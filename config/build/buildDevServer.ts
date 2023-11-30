import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        // for SPA, allows to proxy requests through a specified index.html page
        historyApiFallback: true
    }
}