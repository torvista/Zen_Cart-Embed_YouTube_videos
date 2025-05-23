Zen Cart - Embed YouTube Videos
Compatible with Zen Cart 1.3.8 onwards.

https://github.com/torvista/Zen_Cart-Embed_YouTube_videos

Overview 

A tiny script is loaded on all pages, that looks for the existence of a div with a specific YouTube class.
If it finds one, it loads another tiny script that creates a placeholder/image in each YouTube div.
If the user clicks on the placeholder, the Youtube iframe is created, ready to play.
The idea is that the initial page load is fast as very little is downloaded: it is downloaded on user-demand.

Installation

Rename the TEMPLATE_FOLDER to match your template and copy the files as per the structure.

How to Use

Add this code to the category/product description, using the YouTube video id

<div class="youtube-container">
<p>Video Title</p>
<div class="youtube-player" data-yt_id="NH2v7e3l1DY">
</div>
</div>

Do not put a div inside <p> tags!
-------------------

Optional Parameter "data-yt_tn" sets the thumbnail quality

mqdefault.jpg - 8kb 320x180
hqdefault.jpg - 14kb 480x360 - best to use this as default but check it exists! Normal product info image is 14kb
sddefault.jpg - 22kb 640x480	
maxresdefault.jpg - 48kb 1280x720

If this parameter is not set, the image thumbnail default is high quality: equivalent to data-yt_tn="hqdefault".
If no image is shown on the page, maybe this quality does not exist: add this parameter to set a lower quality image.
e.g. data-yt_tn="mqdefault"

-------------------

Optional Parameter "data-yt_rel" sets the related videos

data-yt_rel="0": uses from same channel
data-yt_rel="1": uses YouTube-related selection

If this parameter is not set, default is "1", YouTube selection.

-----------------------

Optional Parameters "data-yt_params"

To make the video start at 190 seconds, add this optional parameter

data-yt_params="start=190"

The code adds prefix & for params as they are concatenated to some pre-existing params (there is already an initial ?param).

To also force user language
data-yt_params="start=190&hl=es"

To also force subtitles
data-yt_params="start=190&cc_load_policy=1"

---------------------------

How does it work ?

1) includes/templates/TEMPLATE_FOLDER/scripts/jscript_zz_scan_loader.js
is loaded on all pages.
It looks for the class youtube-container.
If it finds it, it loads the youtube script

2)\includes\templates\shared\youtube\youtube_tn.js 
This script does two things
a) It loads
\includes\templates\shared\youtube\youtube_tn.css
in the head of the page.

b) It creates a thumbnail in the placeholder in  <div class="youtube-container">

3) When the user clicks on the placeholder image, the iFrame is created and the video is downloaded....the user has to click again to play but does not notice.

Changelog: see the Github History
