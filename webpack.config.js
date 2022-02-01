const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // * 어떤 작업을 할지 지정하는 mode ... development(기본값), production, none 선택 가능
  mode: 'development',
  // * 시작 지점 알려주는 entry
  // entry: './source/index.js', // index.js파일 하나만 번들링 한다면
  // index.js파일과 about.js를 번들링 하고 싶다면? -> {이름: 파일 주소}
  entry: {
    index: './source/index.js',
    about: './source/about.js',
  },
  output: {
    // * 만들어질 파일이 어디에 저장될지 지정하는 path
    // __dirname: webpack.config.js의 파일 경로를 가르키는 약속된 변수
    // resolve를 사용해 __dirname의 주소 + 그 하위 주소에 public 폴더를 알려줌
    path: path.resolve(__dirname, 'public'),
    // * 만들어질 파일 이름 지정하는 filename
    // filename: 'index_bundle.js', // 하나의 파일로만 결과물이 나옴
    filename: '[name]_bundle.js', // entry에 지정한 이름을 사용해 2개의 번들 파일이 생성됨
  },
  module: {
    rules: [
      {
        // 해당 조건에 맞는 파일을 발견하면 use 키값에 해당하는 로더를 사용해라
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // 뒤쪽에 있는 로더가 먼저 실행됨 ... css-loader, style-loader라고 쓰면 안됨
        // css-loader: 웹팩을 동작시켰을 때 확장자가 css인 파일을 만나면 웹팩이 알아서 css파일을 웹팩 안으로 로드시켜줌
        // style-loader: css-loader를 통해 가져온 css코드를 웹페이지 내에 style 태그로 주입해주는 로더
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // * 템플릿으로 삼을 파일을 알려주는 template
      template: './source/index.html',
      // * 어떤 js파일을 가져와 사용할 것인지 알려주는 chunks
      chunks: ['index'],
      // * 생성할 파일 이름을 알려주는 filename
      filename: './index.html',
    }),
  ],
};
