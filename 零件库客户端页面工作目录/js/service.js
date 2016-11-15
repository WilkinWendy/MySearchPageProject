var serviceCommon =
    {
        //AJAX
        ajax: function (condition) {
            //var condition = {
            //    url: url,
            //    type: type,
            //    requestJson: requestJson,
            //    callback: callback,
            //};

            var url = condition.url;
            var type = condition.type;
            var requestJson = condition.requestJson;
            var callback = condition.callback;

            $.ajax({
                url: url,
                type: type,
                data: requestJson, //{ "parentId": 0 },
                dataType: 'json',
                success: function (result) {
                    if (result != null && result.status != null && result.status.code == 400) {
                        result.status.msg = "连接服务器异常，请重试！";
                    }
                    callback(result);
                },
                error: function (dd) {
                    console.info("请求失败：");
                    var result = {
                        "status": {
                            "code": dd.status.code,           //返回码,200表示成功，其他失败
                            "msg": "连接服务器异常，请重试！:" + dd.status.msg//提示信息
                        },
                        "data": {}
                    };
                    callback(result);
                }
            });
        }
    }

var unitStore =
    {
        ajax: function (condition) {
            //var condtion = {
            //    apiName: apiName,
            //    data: requestJson,
            //    success: success
            //}

            //一些固定参数
            var domain = "";
            var moduleId = "";
            var version = "";
            var router = ""
            //从条件中读取参数
            var apiName = condition.apiName;
            var data = condition.data;
            var success = condition.success;

            //生成ajax调用参数
            var url = "/nds_requests/" + moduleId + "/" + apiName;
            var type = "Post";
            var requestJson = condition.data;
            var callback = condition.success;

            //生成基础ajax调用json

            serviceCommon.ajax({
                url: url,
                type: type,
                requestJson: requestJson,
                callback: callback
            });
        }

    }