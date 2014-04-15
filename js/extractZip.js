var exec = cordova.require('cordova/exec');

function newProgressEvent(result) {
    var event = {
        loaded: result.loaded,
        total: result.total
    };

    return event;
}


window.unzip = function(fileName, outputDirectory, callback, progressCallback) {
	alert("in unzip");
    var win = function(result) {
        if (result && typeof result.loaded != "undefined") {
            if (progressCallback) {
                return progressCallback(newProgressEvent(result));
            }
        } else if (callback) {
            callback(0);
        }
    };
    var fail = function(result) {
        if (callback) {
            callback(-1);
        }
    };
    exec(win, fail, 'Zip', 'unzip', [fileName, outputDirectory]);
};

/*ft.onprogress = function(progressEvent) {

        if (progressEvent.lengthComputable) {
            var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            statusDom.innerHTML = perc + "% loaded...";
        } else {
            if(statusDom.innerHTML == "") {
                statusDom.innerHTML = "Loading";
            } else {
                statusDom.innerHTML += ".";
            }
        }
    };

    */