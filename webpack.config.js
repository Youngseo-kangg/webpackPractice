const path = require('path');

module.exports = {
  // * 어떤 작업을 할지 지정하는 mode ... development(기본값), production, none 선택 가능
  mode: 'development',
  // * 시작 지점 알려주는 entry
  entry: './source/index.js',
  output: {
    // * 만들어질 파일이 어디에 저장될지 지정하는 path
    // __dirname: webpack.config.js의 파일 경로를 가르키는 약속된 변수
    // resolve를 사용해 __dirname의 주소 + 그 하위 주소에 public 폴더를 알려줌
    path: path.resolve(__dirname, 'public'),
    // * 만들어질 파일 이름 지정하는 filename
    filename: 'index_bundle.js',
  },
};
