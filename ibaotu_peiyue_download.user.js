// ==UserScript==
// @name         ibaotu.com Music Download
// @namespace    https://semoz.github.io/ibaotu_peiyue_download
// @version      0.1
// @description  try to take over the world!
// @author       Semoz
// @match        *://*ibaotu.com/peiyue*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {

    $(".re-popbox").remove();

    $(".sucai_list").find("li").each(function(){
        // 获取文件名
        var audio_name = $(this).find(".audio-info .audio-name").html() + ".mp3";
        console.log(audio_name);

        // 获取下载地址
        var audio_src = $(this).find("audio source").attr("src");
        console.log("https://" + audio_src);

        // 替换下载对象
        $(this).find(".audio-info .free-down").attr("download", audio_name);
        $(this).find(".audio-info .free-down").html("免登陆下载");
        $(this).find(".audio-info .free-down").attr("href", "https://" + audio_src);

    });

})();