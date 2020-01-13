// ref: https://umijs.org/config/
const pathName = './';

export default {
  treeShaking: true,
  base: pathName,
  publicPath: pathName,
  history: 'hash',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'kitten',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
