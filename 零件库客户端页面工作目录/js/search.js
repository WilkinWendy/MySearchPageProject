﻿var myXmlHandler = function () {
    var mxh = {
        ConvertToJson: function () {

        }


    };
    mxh.prototype = XmlHandler;
    return mxh;
}();


var serviceHelper = {
    search: function (condition) {
        try {
            //从condition获取具体参数
            var keyName = condition.keyName;
            var pageIndex = condition.pageIndex;
            var pageSize = condition.pageSize;

            var currentSortType = condition.sortType;

            //制作服务所需参数
            var keyWord = keyName;
            var iStart = (pageIndex + 1) * pageSize + 1;
            var iCount = pageSize;
            var iOrder = 0;//默认按匹配度；=0，按访问量；=1，按下载量；=2，按上传次数；=3；按收藏次数。


            switch (currentSortType) {
                case "default":
                    iOrder = 0;
                    break;
                case "viewMost":
                    iOrder = 1;
                    break;
                case "downloadMost":
                    iOrder = 2;
                    break;
                default:
                    iOrder = 0;
                    break;
            }

            ////1..从外框方法查询得到xml数据并转化为json
            ////调用服务返回xml字符串
            //var resultXmlStr = window.external.getSearchList(keyWord, iStart, iCount, iOrder);

            ////将xml字符串解析为xmldom
            //var xmlDom = myXmlHandler.ReadXml(resultXmlStr);
            //var data = myXmlHandler.ConvertToJson(xmlDom);
            //var result = {
            //    "status": {
            //        "code": 200,
            //        "msg": "success"
            //    },
            //    "data": data
            //}

            //2..造的假的json数据
            var result = {
                "status": {
                    "code": 200,
                    "msg": "success"
                },
                "data": {
                    "sources": [
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999()",
                            imagePath: "images/pic01.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999{}",
                            imagePath: "images/高图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999+",

                            imagePath: "images/小图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999.",

                            imagePath: "images/宽图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999*",

                            imagePath: "images/高图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",
                            imagePath: "images/小图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/宽图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/高图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/小图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/宽图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/高图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/小图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/宽图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/高图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/小图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/宽图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/高图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/小图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/宽图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        }, {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/pic01.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/高图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/小图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/高图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        },
                        {
                            unitName: "锥柄变径套JB/T9940.1-1999",

                            imagePath: "images/小图.jpg",
                            downloadCount: "52",
                            viewCount: "95",
                            repoName: "常用机床附件CAD模型库（3DS）",
                            typeName: "套类零件>工具柄自锁圆锥变径",
                            modelNumber: ""
                        }
                    ]
                }
            }

            //处理服务返回结果，如果非正常则抛出异常
            if (result.status.code != 200) {
                throw new Error("serviceHelper.search()执行失败：原因是" + result.status.msg);
            }
            //提取结果用于返回
            var data = result.data;

            return data;
        }
        catch (ex) {
            throw new Error("serviceHelper.search()执行异常：原因是" + ex.message)
        }
    }
};
var pageHelper = {
    //从页面提取用于搜索的条件
    getQueryCondition: function () {
        var result;
        try {
            var keyName = $("#input_search-btn").val();
            var pageIndex = pageState.currentIndex + 1;
            var pageSize = pageState.pageDataWidth * pageState.pageDataHeight;
            var sortType = sortTabHandler.currentSortType;

            result = {
                keyName: keyName,
                pageIndex: pageIndex,
                pageSize: pageSize,
                sortType: sortType
            };
            return result;
        }
        catch (ex) {
            throw new Error("pageHelper.getQueryCondition()执行异常：原因是" + ex.message)
        }
    },
    //检查搜索条件
    checkQueryCondition: function (condition) {
        var result = true;
        var keyname = condition.keyName;
        if (keyname == undefined || keyname.trim() == "") {
            myalert.msg(
                {
                    title: "提示",
                    msg: "请输入搜索关键字！",
                    okFn: function () { },
                    type: "warning"
                });
            result = false
            return result;
        }
        return result;
    },
    //将搜索结果数据绑定到页面
    bindSearchData: function (data) {
        try {
            //整个页面的滚动条置顶
            common.scrollToTop(window);

            var totalhtml = ''

            var keyName = pageHelper.getQueryCondition().keyName;
            var keyNameArray = common.getKeyArrayFromKeyWord(keyName);
            var elementCondition = {
                keyNameArray: keyNameArray
            };

            $.each(data.sources, function (i, d) {
                totalhtml += elementHelper.createSingleElementByData(d, elementCondition);
            });
            $("#ul_search-products-lst").html(totalhtml);

            //更新页面用于存储当前数据的变量
            pageState.pageCurrentData.sources = [];
            pageState.pageCurrentData.sources = pageState.pageCurrentData.sources.concat(data.sources);
            pageState.currentIndex = 0;
            pageHelper.updateTotalCount();
        }
        catch (ex) {
            throw new Error("pageHelper.bindSearchData()执行异常：原因是" + ex.message)
        }
    },
    //将搜索结果数据新增到页面尾部
    appendSearchData: function (data) {
        try {
            var sources = data.sources;
            var keyName = pageHelper.getQueryCondition().keyName;
            var keyNameArray = common.getKeyArrayFromKeyWord(keyName);
            var elementCondition = {
                keyNameArray: keyNameArray
            };


            if (sources.length != 0) {
                var totalhtml = ''
                $.each(sources, function (i, d) {
                    totalhtml += elementHelper.createSingleElementByData(d, elementCondition);
                });
                $("#ul_search-products-lst").append(totalhtml);

                //更新页面用于存储当前数据的变量
                pageState.pageCurrentData.sources = pageState.pageCurrentData.sources.concat(data.sources);
                pageState.currentIndex += 1;
                //alert("当前共加载了" + (pageState.currentIndex + 1) + "页");
                pageHelper.updateTotalCount();
            }
        }
        catch (ex) {
            throw new Error("pageHelper.appendSearchData()执行异常：原因是" + ex.message)
        }
    },
    //根据页面状态变量更新页面的总零件数记录
    updateTotalCount: function () {
        var count = pageState.pageCurrentData.sources.length;
        $("#unitCurrentCount").html(count.toString());
    },
    setInputSearchValueByKey: function (key) {
        $("#input_search-btn").val(key);
    }
    , getDate: function () {
        setTimeout(function () {
            var list = window.external.GetDate();

        }, 1);

    },
};
var pageState = {
    currentIndex: 0,
    pageDataWidth: 4,
    pageDataHeight: 6,
    pageCurrentData: {
        "sources": []
    }
};

var elementHelper =
    {
        //data是服务请求回来的单条json，condition是与生成html有关的其他条件
        createSingleElementByData: function (data, condition) {
            var unitName = data.unitName;
            var spectialTxt = data.spectialTxt;
            var imagePath = data.imagePath;
            var downloadCount = data.downloadCount;
            var viewCount = data.viewCount;
            var repoName = data.repoName;
            var typeName = data.typeName;
            var modelNumber = data.modelNumber;

            var keyNameArray = condition.keyNameArray;//数组

            //用于正则替换的条件
            var replaceCondition =
            {
                labelName: "span",
                className: "special-txt",
                keyArray: keyNameArray
            }

            var html = '';
            html += ' <li>'
            html += '     <div class="pic-box">'
            html += '         <a href="#">'
            html += '             <img src="' + imagePath + '" alt="" /></a>'
            html += '     </div>'
            html += '     <p class="tit-box"><a href="#" title="' + unitName + '">' + common.bindTextWithLabelAndClassForSomeKeys(replaceCondition, unitName) + '</a></p>'
            html += '     <div class="clear ico-box"><span><i class="ico-download"></i>' + downloadCount + '</span><span><i class="ico-search"></i>' + viewCount + '</span></div>'
            html += '     <div class="txt-box">'
            html += '         <p title="' + repoName + '">库名：<a href="#">' + repoName + '</a></p>'
            html += '         <p title="' + typeName + '">' + typeName + '</p>'
            html += '         <p title="' + modelNumber + '">型号：' + modelNumber + '</p>'
            html += '     </div>'
            html += ' </li>'

            return html;
        }

    };

var sortTabHandler = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        var obj = this;
        $("div.sort-tab span").on("click", function () {
            obj.currentSortType = $(this).attr("sort-type");
            $("div.sort-tab span").each(function () {
                $(this).removeClass("select");
            });
            $(this).addClass("select");

            searchHelper.LoadSearchData();
        });
    },
    currentSortType: "default"
}

var searchHelper = {
    //加载
    LoadSearchData: function () {
        try {
            var condition = pageHelper.getQueryCondition();
            if (!pageHelper.checkQueryCondition(condition)) {
                return;
            }

            loadLayer.show(
                {
                    title: "",
                    msg: "正在加载中"
                }
                );
            ////1..ajax调用
            //unitStore.ajax({
            //    apiName: "",
            //    data: {
            //    },
            //    success: function (result) {
            //        var resultData = result.data;
            //        pageHelper.bindSearchData(resultData);
            //        loadLayer.hide();
            //    }
            //});

            //2..制作测试数据
            var resultData = serviceHelper.search(condition);

            setTimeout(function () {
                loadLayer.hide();
                pageHelper.bindSearchData(resultData);
            }, 1000);


        }
        catch (ex) {
            console.error(ex.message);
        }
    },
    LoadMoreSearchData: function () {
        try {
            var condition = pageHelper.getQueryCondition();
            if (!pageHelper.checkQueryCondition(condition)) {
                return;
            }

            loadLayer.show(
                {
                    title: "",
                    msg: "正在加载中"
                }
                );

            ////1..ajax调用
            //unitStore.ajax({
            //    apiName: "",
            //    data: {
            //    },
            //    success: function (result) {
            //        var resultData = result.data;                    //        
            //        pageHelper.appendSearchData(resultData);
            //        loadLayer.hide();   
            //    }
            //});

            //2..制作测试数据            


            setTimeout(function () {
                var resultData = serviceHelper.search(condition);
                loadLayer.hide();
                pageHelper.appendSearchData(resultData);
            }, 1000);
        }
        catch (ex) {
            console.error(ex.message);
        }
    }
};

var mainHelper = {
    init: function () {
        this.InitPageData();
        this.bindEvent();
        sortTabHandler.init();
    },
    bindEvent: function () {
        //搜索按钮点击事件
        $("#btn_search-btn").on("click", function () {
            searchHelper.LoadSearchData();
        });
        //内容页面滑动至底部触发事件
        $(window).on("scroll", function () {
            try {
                if (common.isElementScrollToBottom(this)) {
                    searchHelper.LoadMoreSearchData();
                }
            }
            catch (ex) {
                console.error(ex.message);
            }
        })
    },
    InitPageData: function () {
        var keyname = common.getKeyFromUrl("keyName");

        if (keyname != null && keyname.trim() != "") {
            pageHelper.setInputSearchValueByKey(keyname);
            searchHelper.LoadSearchData();
        }
    }
};

$(function () {
    mainHelper.init();
});