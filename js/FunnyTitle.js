var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/icon.png");
        document.title = 'ヽ(●-`Д´-)ノ | JINLK BLOG';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/icon.png");
        document.title ='( • ̀ω•́ ) 歡迎回來!  '+OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});