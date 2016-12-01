var common = {
    //从url中读取指定参数
    getKeyFromUrl: function (keyname) {
        try {
            var reg = new RegExp("(^|&)" + keyname + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
        catch (ex) {
            console.error("common.getKeyFromUrl(keyname)执行失败，原因是" + ex.message);
        }
    },
    //判断指定元素的滚动条（如果有）是否到达底部
    isElementScrollToBottom: function (ele) {
        try {
            var scrollTop = $(ele).scrollTop();
            var height = $(ele).height();

            var scrollHeight = 0;
            //兼容window和document
            if (ele == window || ele == document) {
                scrollHeight = $(document.documentElement)[0].scrollHeight;
            }
            else {
                scrollHeight = $(ele)[0].scrollHeight;
            }


            var scrollTopMax = scrollHeight - height;

            if (scrollTop >= scrollTopMax) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (ex) {
            console.error("common.isElementScrollToBottom(ele)执行失败，原因是" + ex.message);
        }
    },
    //使指定元素相对于其父元素居中
    center: function (obj) {//注意：obj需要为dom元素 页面可以用obj == document.getElementById();
        try {
            var parentNode = obj.parentNode;
            var windowWidth = $(parentNode).width();
            var windowHeight = $(parentNode).height();
            var popupHeight = $(obj).height();
            var popupWidth = $(obj).width();
            $(obj).css({
                //"top": (windowHeight - popupHeight - 200) / 2 + $(document).scrollTop() + 100,
                "top": (windowHeight - popupHeight - 200) / 2 + $(document).scrollTop() + 100,
                "left": (windowWidth - popupWidth) / 2
            });
        }
        catch (ex) {
            console.error("common.center(obj)执行失败，原因是" + ex.message);
        }
    },
    //使指定元素滚动条置顶
    scrollToTop: function (ele) {
        $(ele).scrollTop(0);
    },
    //删除指定元素（可以在方法内部考虑兼容性）
    removeElement: function (ele) {
        try {
            $fatherele = ele.parentNode;
            $fatherele.removeChild(ele);
        }
        catch (ex) {
            console.error("common.removeElement(ele)执行失败，原因是" + ex.message);
        }
    }

    ,
    getScrollTop: function () {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    },

    //文档的总高度
    getScrollHeight: function () {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    },

    //浏览器视口的高度
    getWindowHeight: function () {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    },
    //从搜索文字中提取关键字
    getKeyArrayFromKeyWord: function (keyword) {
        var arr = keyword.split(" ");
        var arrReturn = new Array();
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item != "") {
                arrReturn.push(item);
            }
        }
        return arrReturn;
    },

    //给一串文本中指定字符加上带有指定class的指定标签
    //参数示例
    //var condition =
    //{
    //    labelName: "labelName",
    //    className: "className",
    //    keyArray: "keyArray"
    //}
    bindTextWithLabelAndClassForSomeKeys: function (condition, sourceText) {
        var labelName = condition.labelName;
        var className = condition.className;
        var keyArray = condition.keyArray;

        var result = sourceText;
        $.each(keyArray, function (i, v) {
            var reg = new RegExp("(" + v + ")");
            result = result.replace(reg, "<" + labelName + " class= " + className + " >" + v + "</" + labelName + ">");
        });

        return result;
    }

}