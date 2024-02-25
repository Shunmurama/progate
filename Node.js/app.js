// expressを使うためのコード
// 定型分として覚えておく
const express = require('express');
const app = express();

app.get('/top', (req, res) => {
  res.render('/top.ejs');
});

// サーバーを起動するコード
app.listen(3000);