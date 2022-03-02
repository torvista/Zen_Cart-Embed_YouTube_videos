//https://github.com/torvista/Zen_Cart-Embed_YouTube_videos

//checks for specific elements on a page, to load specific javascript scripts
$(document).ready(function () {
    const consoleDebug = false;
    if (consoleDebug) {
        console.group('jscript_zz_scan_loader.js');
    }
    //any occurrence of class youtube-container
    if ($(".youtube-container").length) {
        $.getScript('includes/templates/shared/youtube/youtube_tn.js');
        if (consoleDebug) {
            console.log('loaded: youtube_tn');
        }
    } else {
        if (consoleDebug) {
            console.log('NOT loaded: youtube_tn');
        }
    }

});
