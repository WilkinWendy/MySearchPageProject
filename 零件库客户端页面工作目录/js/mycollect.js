var serviceHelper = {
    search: function (condition) {
        try {
            //从condition获取具体参数


            //调用服务接口执行查询
            var result = {
                "status": {
                    "code": 200,
                    "msg": "success"
                },
                "data": {
                    "sources": [
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }, {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }, {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }, {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }, {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }, {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }, {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }, {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }, {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic02.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic03.jpg"
                        },
                        {
                            "repoName": "上海长城减速机CAD模型库",
                            "imagePath": "images/pic04.jpg"
                        }
                    ]
                }
            };

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
            return {};
        }
        catch (ex) {
            throw new Error("pageHelper.getQueryCondition()执行异常：原因是" + ex.message)
        }
    },
    //将搜索结果数据绑定到页面
    bindSearchData: function (data) {
        try {
            //整个页面的滚动条置顶
            common.scrollToTop(window);

            var totalhtml = ''
            $.each(data.sources, function (i, d) {
                totalhtml += elementHelper.createSingleElementByData(d);
            });
            $("#ul_collect-products-lst").html(totalhtml);

            //更新页面用于存储当前数据的变量
            pageState.pageCurrentData.sources = [];
            pageState.pageCurrentData.sources = data.sources;
            pageState.currentIndex = 0;
        }
        catch (ex) {
            throw new Error("pageHelper.bindSearchData()执行异常：原因是" + ex.message)
        }
    },
    //将搜索结果数据新增到页面尾部
    appendSearchData: function (data) {
        try {
            var sources = data.sources;
            if (sources.length != 0) {
                var totalhtml = ''
                $.each(sources, function (i, d) {
                    totalhtml += elementHelper.createSingleElementByData(d);
                });
                $("#ul_collect-products-lst").append(totalhtml);

                //更新页面用于存储当前数据的变量
                pageState.pageCurrentData.sources = pageState.pageCurrentData.sources.concat(data.sources);
                pageState.currentIndex += 1;
                //alert("当前共加载了" + (pageState.currentIndex + 1) + "页");

            }
        }
        catch (ex) {
            throw new Error("pageHelper.appendSearchData()执行异常：原因是" + ex.message)
        }
    },
    //绑定取消收藏事件
    bindEvent: function () {
        //取消收藏
        $(".undoCollect").unbind();
        $(".undoCollect").on("click", function () {
            var parent_li = this.parentNode.parentNode.parentNode;
            var repoKey = "";

            var okFn = function () {
                try {
                    ////1..从服务端删除，成功后删除节点
                    //unitStore.ajax({
                    //    apiName: apiName,
                    //    data: {
                    //        repoKey: repoKey
                    //    },
                    //    success: function (result) {
                    //        if (result.status.code = 200) {
                    //            common.removeElement(parent_li);
                    //        }
                    //    }
                    //});

                    //2..本地测试，直接删除节点
                    common.removeElement(parent_li);
                }
                catch (ex) {
                    console.error(ex.message);
                }
            };
            var noFn = function () {
                try {

                }
                catch (ex) {
                    console.error(ex.message);
                }
            };

            myalert.confirm({
                title: "提示",
                msg: "您确定要取消收藏吗？",
                okFn: okFn,
                noFn: noFn
            });
        });
    }
};
var pageState = {
    currentIndex: 0,
    pageCurrentData: {}
};

var elementHelper =
    {
        createSingleElementByData: function (data) {

            var imagePath = data.imagePath;
            var repoName = data.repoName;

            var html = '';

            html += '<li>'
            html += '   <div class="pic-box">'
            html += '       <a href="#">'
            html += '           <img src="' + imagePath + '" alt="" />'
            html += '      </a>'
            html += '   </div>'
            html += '   <div class="txt-box">'
            html += '       <a href="#" title="' + repoName + '" class="tit-txt repoName">' + repoName + '</a>'
            html += '       <div class="ico-box">'
            html += '           <i class="ico-collect"></i>'
            html += '           <div class="undoCollect">取消收藏</div>'
            html += '       </div>'
            html += '   </div>'
            html += '</li>'

            return html;
        }

    };

var searchHelper = {
    //加载
    LoadSearchData: function () {
        try {
            var condition = pageHelper.getQueryCondition();

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
            //        pageHelper.bindEvent();
            //        loadLayer.hide();
            //    }
            //});

            //2..制作测试数据
            var resultData = serviceHelper.search(condition);

            setTimeout(function () {
                loadLayer.hide();
                pageHelper.bindSearchData(resultData);
                pageHelper.bindEvent();
            }, 1000);
        }
        catch (ex) {
            console.error(ex.message);
        }
    }

};

var mainHelper = {
    //主初始化方法
    init: function () {
        try {
            var obj = this;
            obj.InitPageData();
            obj.bindEvent();
        }
        catch (data) {
            console.error(data);
        }
    },

    bindEvent: function () {

    },
    InitPageData: function () {
        searchHelper.LoadSearchData();
    }
};
$(function () {
    mainHelper.init();
});
