//https://github.com/torvista/Zen_Cart-Embed_YouTube_videos

$('head link[rel="stylesheet"]').last().after('<link rel="stylesheet" href="includes/templates/shared/youtube/youtube_tn.css" media="screen">');
let tn_quality = "hqdefault";//global
let rel = "&rel=1";//when video finishes playing, what video is offered next: 0 - show from same channel, 1 - show youtube-defined related videos. Can be overriden by
(function () {
    const els = $('.youtube-player'); //parse page for multiple YouTube placeholders
    Array.prototype.forEach.call(els, function (el) {
            let p = document.createElement("div");
//thumbnail quality - default is hq high quality. If no hq image available, have to set the quality in the calling code parameter.
            if (typeof el.dataset.yt_tn !== 'undefined') {
                tn_quality = el.dataset.yt_tn;
            }
            p.innerHTML = '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + el.dataset.yt_id + '/' + tn_quality + '.jpg" alt="video YouTube"><div class="play-button"></div>';

            if (typeof el.dataset.yt_rel !== 'undefined') {
                rel = "&rel=" + el.dataset.yt_rel;
            }
            p.onclick = ytIframe;//passing a parameter here screws up the this.parentNode calls in the function
            el.appendChild(p);
        }
    );
})();

function ytIframe() {
    let iframe = document.createElement("iframe");
    let params = this.parentNode.dataset.yt_params;
    if (typeof params === 'undefined') {
        params = '';
    } else {
        params = '&' + params;
    }
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.yt_id + "?autoplay=1&autohide=1&border=1&wmode=opaque&enablejsapi=1&controls=1" + rel + params);
    iframe.setAttribute("frameborder", "1");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}
