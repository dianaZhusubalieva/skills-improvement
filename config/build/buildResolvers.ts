import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        // ---for absolute paths---
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles : ['index'], // to make index - main file of the module
        alias: {}
        //
    }
}