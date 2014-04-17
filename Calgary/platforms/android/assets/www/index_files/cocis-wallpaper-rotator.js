


var wallpaperRotator = new WallpaperRotator();

// Initialization tasks that start right after the document finishes loading
$(document).ready(function () {
    wallpaperRotator.Initialize();
});



function WallpaperRotator() {

    this.wallpaperRotateIntervalTimespan = 20000; // 20 seconds
    this.wallpaperList = [];
    this.wallpaperImgList = [];
    this.wallpaperThumbsList = [];
    this.thumbnailControls = [];
    this.currentWPIndex;
    this.currentWPBackgroundDiv;
    this.wallpaperInterval;
    this.isDefaultWallpaper = false;

    // Variables for preloading wallpaper pictures.
    this.loaded = 1; // start with first image being loaded on page load
    this.errorDelay = 999; // handles 404-Errors in IE
    this.errorInterval;

    var _self = this;

    // Saves the json for the wallpaper images
    this.SetWallpaperJson = function (data) {
        _self.wallpaperList = data;
    }

    // Saves the initial wallpaper index
    this.SetInitialWPIndex = function (index) {
        _self.currentWPIndex = index;
    }

    // Sets up the rotation of the background images behind the search box
    this.Initialize = function () {
        $(".cocis-wallpaper-img").each(function () {
            _self.wallpaperImgList.push($(this));
        });

        _self._setupWallpaperThumbnailControlHtml();
        _self._initWallpaper();
        _self._initWallpaperControl();
        //_self._animateInfoLink(_self.currentWPIndex);
        _self._loadImages();
    }


    // Callback when an image is loaded.
    this._onImageComplete = function () {
        window.clearTimeout(_self.errorTimer);
        _self.loaded++;
        _self._loadImages();
    }

    // Preload all of the wallpaper pictures.
    this._loadImages = function () {
        // Only load 1 image at the same time. Load them starting at the wallpaper
        // picture just after the starting wallpaper picture.
        if (_self.loaded < _self.wallpaperList.length) {
            var img = new Image();
            // _self.loaded should start out at 1 since the first wallpaper picture is loaded on the
            // page load.
            var nextWPIndexToLoad = (_self.currentWPIndex + _self.loaded) % _self.wallpaperList.length;
            img.src = _self.wallpaperList[nextWPIndexToLoad].Url;
            if (!img.complete) {
                $(img).bind('error load onreadystatechange', _self._onImageComplete);
            } else {
                _self._onImageComplete();
            }
            _self.errorTimer = window.setTimeout(_self._onImageComplete, _self.errorDelay); // handles 404-Errors in IE
        }
    }

    // Sets up the thumbnail control
    this._setupWallpaperThumbnailControlHtml = function () {
        if (_self.wallpaperList.length > 1) {
            
            // Shuffle the wallpaper list.
            _self._shuffleWallpaper();

            $(_self.wallpaperList).each(function (index) {
                // Generate the link that shows the thumb and changes the wallpaper.
                var thumbControl = $("<a href ='javascript:void(0);' class='cocis-hidden-text'>" + _self.wallpaperList[index].AlternateInfo + "</a>")
					.mouseover(function () {
					    _self._showThumb(index);
					})
					.focus(function () {
					    _self._showThumb(index);
					})
					.click(function () {
					    _self._gotoWallpaper(index);
					})
					.mouseout(function () {
					    _self._hideThumb(index);
					})
					.blur(function () {
					    _self._hideThumb(index);
					});
                $("#cocis-wallpaper-thumbnail-control")
					.append($("<li>")
						.append(thumbControl)
						.css("left", (index * 21) + "px"));

                // Generate the thumbnail items.
                var thumbSpan = $("<span>")
						.css("background-image", "url('" + $(this).attr("ThumbUrl") + "')")
						.css("margin-left", (index * 21) + "px");
                var thumbListItem = $("<li>")
					.append(thumbSpan);
                _self.wallpaperThumbsList.push(thumbListItem);
                $("#cocis-wallpaper-thumbnail-images")
					.append(thumbListItem);
            });

            // Store the control squares for animation purposes.
            _self.thumbnailControls = $("#cocis-wallpaper-thumbnail-control li");
        }
    }

    // Shuffle the wallpaper list putting the initial wallpaper at the first position.
    this._shuffleWallpaper = function () {
        var firstWallpaper = _self.wallpaperList.slice(_self.currentWPIndex, _self.currentWPIndex + 1);
        var tempWallpaperList = new Array();
        for (var i = 0; i < _self.wallpaperList.length; i++) {
            if (i != _self.currentWPIndex) {
                tempWallpaperList.push(_self.wallpaperList[i]);
            }
        }
        _self.wallpaperList = firstWallpaper.concat(tempWallpaperList.sort(function () { return Math.random() * 2 - 1; }));
    }

    // Initialize the wallpaper image.
    this._initWallpaper = function () {
        _self.currentWPBackgroundDiv = 0;

        _self.wallpaperImgList[1].hide();

        // If there are more than one wallpaper images, then start the automatic rotation of the wallpaper images.
        if (_self.wallpaperList.length > 1) {
            _self.wallpaperInterval = new PausableInterval(_self._rotateWallpaper, _self.wallpaperRotateIntervalTimespan);
            // If there is only one wallpaper image then turn off the play/pause functionality
        } else {
            $("#cocis-wallpaper-pause").hide();
        }
    }

    // Initialize the info box, thumbnails, and play pause buttons
    this._initWallpaperControl = function () {
        // Info box
        $("#cocis-wallpaper-info-link")
        	.mouseover(_self._showImageInfo)
        	.focus(_self._showImageInfo);
        $("#cocis-wallpaper-info").mouseleave(_self._hideImageInfo);
        $("#cocis-wallpaper-info-text").hide();
        if (_self.isDefaultWallpaper) {
            $("#cocis-wallpaper-info-link").hide();
        }
        // Hide the more info link if the initial wallpaper has no link
        var url = _self.wallpaperList[0].InfoUrl;
        var moreInfoLink = $("#cocis-wallpaper-more-info-link");
        if (url == null) {
            moreInfoLink.hide();
        }
        // Thumbnails
        $("#cocis-wallpaper-thumbnail-images li").hide();
        // Play pause buttons
        $("#cocis-wallpaper-pause")
        	.click(_self._pauseWallpaperRotation)
        	.focus(_self._hideImageInfo);
        $("#cocis-wallpaper-play")
        	.click(_self._playWallpaperRotation)
        	.focus(_self._hideImageInfo);
    }

    // Show the thumbnail with the given index.
    this._showThumb = function (index) {
        _self.wallpaperThumbsList[index].show();
        _self._hideImageInfo();
    }

    // Hide the thumbnail with the given index.
    this._hideThumb = function (index) {
        _self.wallpaperThumbsList[index].hide();
    }

    // Rotate to the next wallpaper right now
    this._rotateWallpaper = function () {
        _self._changeWallpaper((_self.currentWPIndex + 1) % _self.wallpaperList.length);
    }

    // Go to a particular wallpaper right now.
    this._gotoWallpaper = function (index) {
        _self.wallpaperInterval.restart();
        _self._changeWallpaper(index);
    }

    // Change the page wallpaper to the wallpaper with the given index.
    this._changeWallpaper = function (index) {

        _self.currentWPIndex = index;
        _self.currentWPBackgroundDiv = (_self.currentWPBackgroundDiv + 1) % 2;

        var currentWallpaper = _self.wallpaperList[index];

        _self.wallpaperImgList[_self.currentWPBackgroundDiv]
            .attr("src", currentWallpaper.Url)
            .attr("alt", currentWallpaper.AlternateInfo);
        if (_self.currentWPBackgroundDiv == 0) {
            _self.wallpaperImgList[1].fadeOut(1500);
        }
        else {
            _self.wallpaperImgList[1].fadeIn(1500);
        }

        // Update the info box
        var infoText = currentWallpaper.Info;
        var infoTextDiv = $("#cocis-wallpaper-info-text .cocis-body");
        if (infoText === null || infoText === "") {
            infoTextDiv.hide();
        } else {
            infoTextDiv
        		.show()
        		.html(infoText);
        }

        var url = currentWallpaper.InfoUrl;
        var moreInfoLink = $("#cocis-wallpaper-more-info-link");
        if (url == null) {
            moreInfoLink.hide();
        } else {
            moreInfoLink
            	.show()
            	.attr("href", url);
        }
        _self._animateInfoLink(index);
    }

    // Animate the info link (i.e. the square with an 'i' in it) to move to the thumbnail
    // control for the current image
    this._animateInfoLink = function (index) {
        $("#cocis-wallpaper-thumbnail-control li").show();
        $("#cocis-wallpaper-info-link")
    		.fadeOut(750, function () {
    		    $(this).css("margin-left", (index * 21) + "px");
    		    $(this).fadeIn(750, function () {
    		        $("#cocis-wallpaper-thumbnail-control li").eq(index).hide();
    		    });
    		});
    }

    // Hide the current wallpaper image information
    this._hideImageInfo = function () {
        $("#cocis-wallpaper-info-text").fadeOut(200);
    }

    // Show the current wallpaper image information
    this._showImageInfo = function () {
        $("#cocis-wallpaper-info-text").fadeIn(200);
    }

    // Pause the rotation of the wallpaper image gallery.
    this._pauseWallpaperRotation = function () {
        _self.wallpaperInterval.pause();
        $("#cocis-wallpaper-play").show().focus();
        $("#cocis-wallpaper-pause").hide();
    }

    // Resume the rotation of the wallpaper image gallery.
    this._playWallpaperRotation = function () {
        _self.wallpaperInterval.play();
        $("#cocis-wallpaper-play").hide();
        $("#cocis-wallpaper-pause").show().focus();
    }
}


// Wrapper around Interval that allows an interval to be paused and played
// without being completely restarted.
PausableInterval = function (callback, delay) {
    this.timerId;
    this.intervalId;
    this.start;
    this.remaining = delay;
    this.originalDelay = delay;
    this.func = callback;
    this.isPlaying = false; // 1 = play, 0 = pause

    var _self = this;

    // Pause this interval
    this.pause = function () {
        _self.isPlaying = false;
        window.clearTimeout(_self.timerId);
        window.clearInterval(_self.intervalId);
        _self.remaining -= new Date() - _self.start;
    };

    // Play/resume this interval
    this.play = function () {
        if (!_self.isPlaying) {
            _self.isPlaying = true;
            _self.start = new Date();
            _self.timerId = window.setTimeout(_self._timerCallbackWrapper, _self.remaining);
        }
    };

    // Restart the interval
    this.restart = function () {
        // Reset the data for pausing
        _self.start = new Date();
        _self.remaining = _self.originalDelay;
        // Clear the timers
        window.clearTimeout(_self.timerId);
        window.clearInterval(_self.intervalId);
        // Restart the interval
        if (_self.isPlaying) {
            _self.intervalId = window.setInterval(_self._intervalCallbackWrapper, _self.originalDelay);
        }
    };

    // Start the actual interval, reset the data for pausing and call the callback
    this._timerCallbackWrapper = function () {
        _self.intervalId = window.setInterval(_self._intervalCallbackWrapper, _self.originalDelay);
        _self._intervalCallbackWrapper();
    };

    // Reset the data for pausing and call the callback
    this._intervalCallbackWrapper = function () {
        _self.start = new Date();
        _self.remaining = _self.originalDelay;
        _self.func.call();
    };

    _self.play();
}


