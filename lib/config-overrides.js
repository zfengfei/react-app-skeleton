
const path = require('path');
const {override, fixBabelImports, addWebpackAlias} = require('customize-cra');

module.exports = override(
    fixBabelImports(
        "import",
        {libraryName: "antd", libraryDirectory: "es", style: true}
    ),
    addWebpackAlias({
        _asset_: path.resolve(__dirname, 'src/asset/'),
        _conf_: path.resolve(__dirname, 'src/conf/'),
        _util_: path.resolve(__dirname, 'src/util/'),
        _common_: path.resolve(__dirname, 'src/view/common/'),
        _layout_: path.join(__dirname, 'src/view/layout/'),
        _page_: path.resolve(__dirname, 'src/view/page/')
    })
);

// const {injectBabelPlugin} = require('react-app-rewired');
// module.exports = function override(config, env){
//     config = injectBabelPlugin(
//         [
//             'import',
//             {libraryName: 'antd', libraryDirectory: 'lib', style: 'css'}
//         ],
//         config
//     );

//     //sass style
//     const rule_sass = {
//         test: /(\.sass|\.scss)/,
//         use: [
//             'style-loader',
//             'css-loader',
//             'sass-loader'
//         ]
//     };

//     //typescript file
//     const rule_ts = {
//         test: /\.ts$/,
//         use: 'ts-loader'
//     };

//     config.module['rules'].push(rule_sass);
//     config.module['rules'].push(rule_ts);

//     config.resolve.alias = {
//         _asset_: path.resolve(__dirname, 'src/asset/'),
//         _conf_: path.resolve(__dirname, 'src/conf/'),
//         _util_: path.resolve(__dirname, 'src/util/'),
//         _common_: path.resolve(__dirname, 'src/view/common/'),
//         _layout_: path.join(__dirname, 'src/view/layout/'),
//         _page_: path.resolve(__dirname, 'src/view/page/')
//     };

//     return config;
// };
