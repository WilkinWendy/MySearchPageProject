var myalert = {
    //用于存储确定回调函数
    okFn: null,
    //用于存储取消回调函数
    noFn: null,

    ok: function () {
        try {
            this.okFn();
        } catch (e) {

        }
        $("#div_tc-cancel-collect").remove();
        $(".shadow").remove();
    },
    no: function () {
        if (typeof (this.noFn) == 'function') {
            try {
                this.noFn();
            } catch (e) {

            }
        }
        else {
        }
        $(".shadow").remove();
        $("#div_tc-cancel-collect").remove();
    },


    msg: function (condition) {
        this.okFn = null;
        this.noFn = null;
        //condition{
        //    title : title;
        //    msg:msg;
        //    okFn:okFn;
        //    type :type;
        //}
        var title = condition.title;
        var msg = condition.msg;
        this.okFn = condition.okFn;
        var type = condition.type;

        try {
            $("#_alert_bg").remove();
            $("#_alert").remove();
        } catch (e) {

        }


        //if (title.replace(/ /g, "") == "提示") {
        //    title = "温馨提示";
        //}
        var icoSrcClass;
        switch (type) {
            case "success": icoSrcClass = "ico-warn02"; break;
            case "error": icoSrcClass = "ico-warn02"; break;
            case "warning": icoSrcClass = "ico-warn02"; break;
            case "question": icoSrcClass = "ico-warn02"; break;
            default:
                icoSrcClass = "ico-warn"; break;
        }

        var html = "";
        html += '    <div class="shadow" style="display:block;"></div>'
        html += '    <div id="div_tc-cancel-collect" class="tc-box tc-cancel-collect" style="display: none;">';
        html += '       <div class="tc-tit">' + title + '<a class="ico-close" onclick="myalert.no()"></a></div>';
        html += '           <div class="tc-cnt">';
        html += '               <div class="cancel-collect-main">';
        html += '                   <div class="cnt">';
        html += '                       <i class="' + icoSrcClass + '"></i>';
        html += '                       <p>' + msg + '</p>';
        html += '                   </div>';
        html += '               </div>';
        html += '            <div class="clear btn-box"><a class="sure-btn" onclick="myalert.ok()">确定</a></div>';
        html += '        </div>';
        html += '    </div>';

        $(document.body).append(html);
        $(".shadow").show();
        $("#div_tc-cancel-collect").show();
        //$("#_alert").css({ "top": top, "left": left, "display": "block" });

    },
    confirm: function (condition) {
        this.okFn = null;
        this.noFn = null;
        //condition{
        //    title : title;
        //    msg:msg;
        //    okFn:okFn;
        //    noFn :noFn;
        //}
        var title = condition.title;
        var msg = condition.msg;
        this.okFn = condition.okFn;
        this.noFn = condition.noFn;

        try {
            //remove
        } catch (e) {

        }
        //ico-doubt
        var html = "";
        html += '    <div class="shadow" style="display:block;"></div>'
        html += '    <div id="div_tc-cancel-collect" class="tc-box tc-cancel-collect" style="display: none;">'
        html += '        <div class="tc-tit">' + title + '<a class="ico-close" onclick="myalert.no()"></a></div>'
        html += '        <div class="tc-cnt">'
        html += '            <div class="cancel-collect-main">'
        html += '               <div class="cnt">'
        html += '                   <i class="ico-doubt"></i>'
        html += '                   <p>' + msg + '</p>'
        html += '               </div>'
        html += '            </div>'
        html += '            <div class="clear btn-box"><a class="sure-btn" onclick="myalert.ok()">确定</a><a class="cancel-btn" onclick="myalert.no()">取消</a></div>'
        html += '        </div>'
        html += '    </div>'

        $(document.body).append(html);
        $(".shadow").show();
        $("#div_tc-cancel-collect").show();
        //$("#_alert").css({ "top": top, "left": left, "display": "block" });

    },


    //infoMsg: function (title, msg, okFn) {
    //    this.msg(title, msg, okFn, "info")
    //},
    succeeAlert: function (title, msg, okFn) {
        this.msg({
            title: title,
            msg: msg,
            okFn: okFn,
            type: "succees"
        });
        this.okFn = okFn;
    },
    errorAlert: function (title, msg, okFn) {
        this.msg({
            title: title,
            msg: msg,
            okFn: okFn,
            type: "error"
        });
        this.okFn = okFn;
    },
    warningAlert: function (title, msg, okFn) {
        this.msg({
            title: title,
            msg: msg,
            okFn: okFn,
            type: "warning"
        });
        this.okFn = okFn;
    },
    questionAlert: function (title, msg, okFn) {
        this.msg({
            title: title,
            msg: msg,
            okFn: okFn,
            type: "question"
        });
        this.okFn = okFn;
    }

};