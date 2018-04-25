// не заморачивайтесь, эти 2 строки скопированы из документации
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

// >>> НАЧАЛО КОДА СЕРВЕРА
app.get('/randomnum', function (req, res) {
 const randomImg = ['https://malteze.net/images/sampledata/poroda/2/karman_7565748475.jpg','http://bipbap.ru/wp-content/uploads/2017/10/Japanese_Spitz.jpg','http://www.makeitinny.com/wp-content/uploads/2016/04/%D1%81%D0%BE%D0%B1%D0%B0%D1%87%D0%BA%D0%B8-%D0%B2%D0%B5%D1%81%D0%BD%D0%BE%D0%B9-4.jpg','https://img-fotki.yandex.ru/get/11/192610752.33/0_195377_7946426b_orig.jpg','http://www.youloveit.ru/uploads/posts/2014-06/1403271590_youloveit_ru_sobachki_i_shenochki_s_cvetami_v_zubah02.jpg','https://s00.yaplakal.com/pics/pics_original/0/5/5/4963550.png','https://www.sunhome.ru/i/wallpapers/80/sobachki-v7.960x540.jpg','https://ochepyatki.ru/upfiles/albums/3964/f_104925.jpg','https://telegraf.com.ua/files/2017/01/00000007.jpg','http://vashasobaka.com.ua/wp-content/uploads/2014/12/small03.jpg','http://petstime.ru/sites/default/files/styles/article-500/public/field/image/little-dog-male-1.jpg?itok=gqoHPJ1i' ];
    const randomNum = Math.floor(Math.random() * randomImg.length);
    res.send({ message: randomImg[randomNum]});
});
// >>> КОНЕЦ КОДА СЕРВЕРА

// не заморачивайтесь, эти 3 строки скопированы из документации
app.listen(3000, function () {
  console.log('Example app listening on http://localhost:3000/randomnum');
});
