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
                            imagePath: "images/高图.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
                        },
                        {
                            imagePath: "images/pic05.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
                        },
                        {
                            imagePath: "images/宽图.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
                        }, {
                            imagePath: "images/高图.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
                        },
                        {
                            imagePath: "images/pic05.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
                        },
                        {
                            imagePath: "images/宽图.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
                        }, {
                            imagePath: "images/高图.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
                        },
                        {
                            imagePath: "images/pic05.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
                        },
                        {
                            imagePath: "images/宽图.jpg",
                            unitName: "直齿圆柱外齿轮 GB/T1356 2001",
                            repoName: "上海长城减速机CAD模型库",
                            useTime: "2016-01-01"
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
            var pageIndex = pageState.currentIndex + 1;
            var pageSize = pageState.pageDataWidth * pageState.pageDataHeight;
            result = {
                //keyName: keyName,
                pageIndex: pageIndex,
                pageSize: pageSize
            };
            return result;
        }
        catch (ex) {
            throw new Error("pageHelper.getQueryCondition()执行异常：原因是" + ex.message)
        }
    },
    //将搜索结果数据绑定到页面
    bindSearchData: function (data) {
        try {
            //滚动条归零
            common.scrollToTop(window);

            var totalhtml = ''
            $.each(data.sources, function (i, d) {
                totalhtml += elementHelper.createSingleElementByData(d);
            });
            $("#ul_use-products-lst").html(totalhtml);

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
                $("#ul_use-products-lst").append(totalhtml);

                //更新页面用于存储当前数据的变量
                pageState.pageCurrentData.sources = pageState.pageCurrentData.sources.concat(data.sources);
                pageState.currentIndex += 1;
                //alert("当前共加载了" + (pageState.currentIndex + 1) + "页");

            }
        }
        catch (ex) {
            throw new Error("pageHelper.bindSearchData()执行异常：原因是" + ex.message)
        }
    }
};
var pageState = {

};

var elementHelper =
    {
        createSingleElementByData: function (data) {
            var imagePath = data.imagePath;
            var unitName = data.unitName;
            var repoName = data.repoName;
            var useTime = data.useTime;

            var html = '';
            html += '            <li>'
            html += '                <div class="pic-box">'
            html += '                    <a href="#">'
            html += '                        <img src="' + imagePath + '" alt="" /></a>'
            html += '                </div>'
            html += '                <div class="txt-box">'
            html += '                    <a href="#" title="' + unitName + '" class="tit-txt">' + unitName + '</a>'
            html += '                    <p class="sort-txt" title="' + repoName + '">' + repoName + '</p>'
            html += '                    <p class="time-txt">' + useTime + '</p>'
            html += '                </div>'
            html += '            </li>'

            return html;
        }

    };

var mainHelper = {
    init: function () {
        this.InitPageData();
        this.bindEvent();
    },
    bindEvent: function () {

    },
    InitPageData: function () {
        var condition = pageHelper.getQueryCondition();

        ////1..ajax调用
        //unitStore.ajax({
        //    apiName: "",
        //    data: {
        //    },
        //    success: function (result) {
        //        var resultData = result.data;
        //        pageHelper.bindSearchData(resultData);
        //    }
        //});

        //2..制作测试数据
        var resultData = serviceHelper.search(condition);
        pageHelper.bindSearchData(resultData);
    }
};

$(function () {
    mainHelper.init();
});