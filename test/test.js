function anonymous(_data) {
    var htmlCode = '';
    with (_data || {}) {
        htmlCode += '<div id=\"phrsListTab\" class=\"trans-wrapper clearfix\">';
        var word = _data.word, baseTrans = word.baseTrans;
        if (baseTrans["pic-dict"]) {
            htmlCode += '\n        ';
            (function (_data) {
                htmlCode += '               ';
                var pics = _data["picdict-pics"];
                (function (_data) {
                    htmlCode += '<ul>\n    <li>21</li>\n    <li>22 ';
                    (function (_data) {
                        htmlCode += '<div>hohohohohohohohohoho</div>';
                    })(_data);
                    htmlCode += '</li>\n    <li>23</li>\n    <li>24</li>\n</ul>';
                })(_data);
                htmlCode += '\n<div class=\"selected-container\">\n    <a class=\"selected_img\" href=\"#\">\n        <img src=\"';
                htmlCode += pics[0].url;
                htmlCode += '\" alt=\"图片词典-有道\"/>\n        <span>点击更换图片</span>\n    </a>\n</div>\n<div class=\"img-list\">\n    <span class=\"select-just\">点击选择您觉得符合这个词条的图片<a class=\"close-img\" href=\"#\">关闭</a></span>\n    <ul class=\"all-img\">';
                for (var i = 0; i < pics.length; i++) {
                    htmlCode += '\n        <li>\n            <a href=\"#\"><span><img src=\"';
                    htmlCode += pics[i].url;
                    htmlCode += '\" alt=\"\" data-link=\"http://renren.com\" data-site=\"人人\"></span></a>\n        </li>';
                }
                htmlCode += '\n    </ul>';
                (function (_data) {
                    htmlCode += '<ul>\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n</ul>';
                })(_data);
                htmlCode += '\n    <div class=\"full-content\">\n        <img src=\"\" alt=\"\">\n        <a class=\"source-link\" href=\"http://www.163.com\" target=\"_blank\">163.com</a>\n    </div>\n</div>';
            })(getVal.val(baseTrans, "pic-dict"));
        }
        htmlCode += '                           a --> asdga \n\n\n\n           <h1>thanks</h1>';
        if (baseTrans["simple-dict"]) {
            htmlCode += '\n    <h2>\n        <span class=\"keyword\">';
            htmlCode += word.input;
            htmlCode += '</span>\n        <a href=\"#\" title=\"加入单词本\" class=\"sp add-fav add-faved\"></a>\n        <a href=\"#\" title=\"加入单词本\" class=\"sp add-fav\"></a>\n\n        <div class=\"baav\">\n            <span class=\"pronounce\">英<span class=\"phonetic\">';
            htmlCode += getVal.val(baseTrans, "ukphone");
            htmlCode += '</span>\n                <a href=\"#\" title=\"发音\" class=\"sp dictvoice\"></a></span>\n            <span class=\"pronounce\">美<span class=\"phonetic\">';
            htmlCode += getVal.val(baseTrans, "usphone");
            htmlCode += '</span>\n                <a href=\"#\" title=\"发音\" class=\"sp dictvoice\"></a></span>\n        </div>\n    </h2>';
            var trs = getVal.val(baseTrans, "trs"), trsLength = trs.length;
            if (trsLength > 0) {
                htmlCode += '\n    <div class=\"trans-container\">\n        <ul>';
                for (var i = 0; i < trsLength; i++) {
                    var senObj = trs[i].l;
                    for (var key1 in senObj)
                        htmlCode += '\n            <li><span class=\"def\">';
                    htmlCode += senObj[key1];
                    htmlCode += '</span></li>';
                }
            }
            htmlCode += '\n        </ul>\n    </div>';
        }
        htmlCode += '\n</div>';
    }
    return htmlCode;
}
//# sourceMappingURL=test.js.map