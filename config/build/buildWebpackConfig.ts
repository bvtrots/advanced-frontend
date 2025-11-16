import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildWebpackConfig(options:BuildOptions): webpack.Configuration{
    const {mode, paths} = options;

    return  {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.entry,
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve:buildResolvers(),
        module: {
            rules: buildLoaders(),
        },
    };
}