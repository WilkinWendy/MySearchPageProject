(function (e) {
    var loadLayer = {
        show: function (condition) {
            //condition{
            //    title : title;
            //    msg:msg;
            //}
            var title = condition.title;
            var msg = condition.msg;

            try {
                //remove
            } catch (e) {

            }
            //ico-doubt
            var html = "";
            //html += '    <div class="shadow" style="display:block;"></div>'
            //html += '    <div id="div_tc-loadLayer" class="tc-box tc-cancel-collect" style="display: none;">'
            //html += '        <div class="tc-tit">' + title + '</div>'
            //html += '        <div class="tc-cnt">'
            //html += '            <div class="cancel-collect-main">'
            //html += '               <div class="cnt">'
            //html += '                   <p>' + msg + '</p>'
            //html += '               </div>'
            //html += '            </div>'
            //html += '        </div>'
            //html += '    </div>'
            var left = ($(window).width() - 100) / 2;
            var top = ($(window).height() - 100) / 2;

            html += "<div id='" + "div_tc-loadLayer" + "' style='display:none;'>";
            html += "   <div style='background:#fff; width: 100%; height: 100%; left:0; top: 0; filter: alpha(opacity=45); opacity: 0.45; z-index: 9997; position: fixed;'>"
            html += "   </div>"
            html += "   <img src='images/loading.gif' style='position: fixed; left:" + left + "px; top:" + top + "px; z-index:9998;' />"
            html += "</div>";


            $(document.body).append(html);

            $("#div_tc-loadLayer").show();
            //$("#_alert").css({ "top": top, "left": left, "display": "block" });
        },
        hide: function () {
            $("#div_tc-loadLayer").remove();
        }
    };
    e.loadLayer = loadLayer;
})(window);