// stats.js: JavaScript Performance Monitor
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

function animate() {
    stats.begin();
    // monitored code goes here
    stats.end();

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

initPlayers();


function initPlayers() {

    const qualities = [{
            "name": "1080p",
            "url": "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp",
            "type": "normal"
        },
        {
            "name": "720p",
            "url": "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp",
            "type": "normal"
        }
    ];


    const vtt_stamps = [{
            "text": "Einführung",
            "time": 0
        },
        {
            "text": "Opening",
            "time": 147.022
        },
        {
            "text": "Episode",
            "time": 262.012
        },
        {
            "text": "Ending",
            "time": 1285.035
        },
        {
            "text": "Abschluss",
            "time": 1364.99
        },
        {
            "text": "Episoden Vorschau",
            "time": 1424.967
        }
    ];


    const dp = new DPlayer({
        container: document.getElementById("video-wrapper"),
        screenshot: true,
        lang: "de",
        video: {
            quality: qualities,
            defaultQuality: 0,
        },
        theme: "var(--bar-color)",
        hotkey: true,
        /* contextmenu: [
            { text: "custom1", link: "https://github.com/DIYgod/DPlayer" },
            { text: "custom2", click: function(t) { console.log(t) } }
        ], */
        highlight: vtt_stamps,
        airplay: "vendor",
        chromecast: "vendor"
    });
    window.dp = dp;
};



/* 

window.trackTracker = null;

window.Skip = async () => {
    const SkipOpEd = document.getElementById("skipcheck").checked;
    await store(key_oped, SkipOpEd);
    if (trackTracker != null) {
        trackTracker.dispatchEvent(new Event("cuechange"));
    }
}

window.cSkip = async () => {
    return await read(key_oped, false);
}

window.skipped = false;

window.displayChapters = (trackElement) => {
    if (trackElement && (textTrack = trackElement.track)) {
        trackTracker = textTrack;
        if (textTrack.kind === "chapters") {
            textTrack.mode = "hidden";
            for (let i = 0; i < textTrack.cues.length; ++i) {
                const cue = textTrack.cues[i],
                    chapterName = cue.text,
                    start = cue.startTime,
                    newLocale = document.createElement("li");
                newLocale.setAttribute("id", start);
                const localeDescription = document.createTextNode(cue.text);
                newLocale.appendChild(localeDescription);
                const locationList = document.getElementById("chapters");
                locationList.appendChild(newLocale);
                newLocale.addEventListener(
                    "click",
                    (element) => {
                        document.getElementById("video").currentTime =
                            +element.target.id;
                    },
                    false
                );
            }
            textTrack.addEventListener(
                "cuechange",
                async function () {
                    skipped = false;

                    let currentLocation = 0;
                    let text = "Error";

                    if (
                        this.activeCues !== undefined &&
                        this.activeCues.length >= 1
                    ) {
                        let r = 0;
                        if (this.activeCues.length >= 2) {
                            r = this.activeCues.length - 1;
                        }

                        currentLocation = this.activeCues[r].startTime;
                        text = this.activeCues[r].text;
                    }

                    const chapter = document.getElementById(currentLocation);
                    if (chapter) {
                        const locations = document
                            .getElementById("chaptersfig")
                            .getElementsByTagName("li");
                        for (let i = 0; i < locations.length; ++i) {
                            if (
                                (text.includes("Opening") || text.includes("Ending")) && (await cSkip()) &&!skipped  ) {
                                if (locations[i].innerHTML.includes(text)) {
                                    document.getElementById(
                                        "video"
                                    ).currentTime = locations[i + 1].id;
                                    skipped = true;
                                }
                            }

                            locations[i].classList.remove("current");
                        }
                        chapter.classList.add("current");
                        document.getElementById("chapters").style.top =
                            "-" + chapter.parentNode.offsetTop + "px";
                    }
                },
                false
            );
        }
    }
}

window.makeVideoVis = () => {
    const toHide = ["download-wrapper"];
    const toShow  = ["video-wrapper","controls-prev","controls-next","download2","settingsbtn","title-vid","support-svg","playerSwitch"];

    toHide.forEach(id=> document.getElementById(id).classList.add("hide"))
    toShow.forEach(id=> document.getElementById(id).classList.remove("hide"))
}
window.attachVideoController = () => {
    const vid = document.querySelector("#video");
    if (typeof vid == "undefined") {
        return "video is null";
    }
    let isSeeking = false;
    let idSeekTest;
    const SEEKEVENT_TIMEOUT = 30;

    vid.onpause = function () {
        idSeekTest = setTimeout(function () {
            if (!isSeeking) {
                if (typeof resumeFirework == "function") resumeFirework();
                pausedVideo(document.querySelector("#video"));
            }
        }, SEEKEVENT_TIMEOUT);
    };

    vid.onplay = function () {
        idSeekTest = setTimeout(function () {
            if (!isSeeking) {
                if (typeof pauseFirework == "function") pauseFirework();
                setTimeout(() => {
                    if (typeof clearFirework == "function") clearFirework();
                }, 10);
            }
        }, SEEKEVENT_TIMEOUT);
    };

    vid.onseeking = function () {
        isSeeking = true;
        clearTimeout(idSeekTest);
    };
    vid.onseeked = function () {
        isSeeking = false;
    };
    vid.onerror = function (e) {
        console.log(e);
    };
    vid.addEventListener("loadeddata", async function () {
        if (typeof this.webkitAudioDecodedByteCount !== "undefined") {
            // non-zero if video has audio track
            if (this.webkitAudioDecodedByteCount > 0) {
                console.log("video has audio");
            } else {
                setstatus(true, "No audio present, Chrome");
                console.log("video doesn't have audio");
            }
        } else if (typeof this.mozHasAudio !== "undefined") {
            // true if video has audio track
            if (this.mozHasAudio) {
                console.log("video has audio");
            } else {
                console.log("video doesn't have audio");
                setstatus(true, "No audio present, Firefox");
            }
        } else {
            console.log("can't tell if video has audio");
            setstatus(false, "audio status is undefined");
        }
    });
    addCallback("auth-status-conf", seekToTime);
    vid.addEventListener("loadstart", seekToTime);
    vid.onloadstart = seekToTime;
    vid.addEventListener("loadedmetadata", seekToTime);
    //$("#video").on("loadstart", seekToTime);

    addCallback("all", async () => {
        await seekToTime();
        //console.log($("#video")[0].readyState)
    });

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            if (pausedVideo) pausedVideo(document.querySelector("#video"));
        }
    });
}

window.seekToTime = async () => {
    return new Promise(async (resolve, reject) => {
        if (!window.seeked_ok) {
            const vid = document.querySelector("#video");
            if (
                typeof getwatchlist == "undefined" ||
                typeof window.auth["logged-in"] == "undefined"
            ) {
                //addCallback("all",seekToTime)
                return;
            }
            const temp2 = await getwatchlist(window["video-metadata"].name);
            if (temp2.nr) {
                //name{nr:name,time:cT,finished,total:dur}
                if (temp2.finished) {
                    //TODO visual indication
                }
                vid.currentTime = temp2.time;
            }
            window.seeked_ok = true;
            resolve();
        }
    });
}

window.pausedVideo = (vid) => {
    if (!vid) {
        return;
    }
    if (typeof vid == "undefined") {
        return;
    }
  
    
    const cT = vid.currentTime;
    const dur = vid.duration;
    const name = window["video-metadata"].name;
    const finished = dur - cT <= dur * GLOABL_FINISH_RATIO;
    const t = { nr: name, time: cT, finished, total: dur };
    if(window.auth.settings && window.auth.settings [key_no_rewatchs]){
        const z = findByNr(window.auth.watchlist,name)
        if(z){
            if(z.finished){
                return;
            }else if(z.time>cT){
                return;
            }
        }
    }
    if (window.auth["logged-in"]) {
        const blob = new Blob([JSON.stringify(t)], {
            type: "application/json; charset=UTF-8",
        });
        const ff = navigator.sendBeacon(`/API/v1/users/watched`, blob);
        if (!ff) {
            console.log("Error in sendBeacon()");
        }
    } else {
        setwatchlist(t, true);
    }
}

window.Playerupdate = async (standard_native, initialize) => {
    return new Promise(async (resolve, reject) => {
        if (initialize) {
            if (!standard_native) {
                if (typeof DPlayer == "undefined") {
                    addCallback("dplayer", UseDPlayer);
                    activateAddonByName("dplayer");
                } else {
                    await UseDPlayer();
                }

                //TODO window['video-metadata']
            } else {
                if (typeof window.chaptersTodisplay != "undefined") {
                    displayChapters(window.chaptersTodisplay);
                }
                attachVideoController();
            }
            window.playerActive = standard_native ? "native" : "dplayer";
            resolve();
        } else {
            if (window.playerActive == "native") {
                if (typeof DPlayer == "undefined") {
                    addCallback("dplayer", UseDPlayer);
                    activateAddonByName("dplayer");
                } else {
                    UseDPlayer();
                }
                window.playerActive = "dplayer";
                //document.getElementById('video-wrapper')
                //TODO make it
            } else {

            }
            resolve();
        }
    });
}

window.UseDPlayer = async () => {
    return new Promise(async (resolve, reject) => {
        const video = document.getElementById("video");
    window["video-metadata"].native_video = video.outerHTML;


    const FHD = window["video-metadata"].src;
    const qualities = await videos(window["video-metadata"].name, FHD);
    window["video-metadata"].origname = window["video-metadata"].name;
    window["video-metadata"].names = [];
    for (let i = 0; i < qualities.length; i++) {
        const temp1 = qualities[i].url;
        const res = temp1.substring(temp1.lastIndexOf("/") + 1);
        window["video-metadata"].names.push(res);
    }
    const q = 0;
    window["video-metadata"].name = qualities[q].url.substring(
        qualities[q].url.lastIndexOf("/") + 1
    );
    const vtt_stamps = [];
    if (video.children.length > 1) {
        if (video.children[1].track) {
            const cues = video.children[1].track.cues;
            for (let j = 0; j < cues.length; j++) {
                const cue = cues[j];
                vtt_stamps.push({ text: cue.text, time: cue.startTime });
            }
        }
    }

    const dp = new DPlayer({
        container: document.getElementById("video-wrapper"),
        screenshot: true,
        lang: "de",
        video: {
            quality: qualities,
            defaultQuality: q,
        },
        theme: "var(--bar-color)",
        hotkey: true,
        contextmenu:[
            {text:"custom1",link:"https://github.com/DIYgod/DPlayer"},
            {text:"custom2",click:function(t){console.log(t)}}
        ],
        highlight: vtt_stamps,
        airplay: false,
    });
    window.dp = dp;
});
}

window.videos = async (num, standard) => {
    return new Promise(async (resolve, reject) => {
        const xhr2 = await makeRequest({
        type: "GET",
        url: `https://ddl.amalgam-fansubs.moe/API.php`,
        query: ["source=1", `filter=${num}`],
        synchronus: true,
    });
    const json = pJSON(xhr2.responseText);
    const response = [];
    Object.keys(json).forEach((s) => {
        const o = json[s];
        const g = Object.keys(o);
        const url = o[g[0]];
        let name = "480p";
        if (s == "dch") {
            name = "720p";
        } else if (s == "dcf") {
            name = "1080p";
        } else if (s == "kn") {
            name = "480p";
        }
        if (g.length >= 1) {
            response.push({ name: name, url: url, type: "normal" });
        }
    });
    if (response.length == 0) {
        response.push({ name: "Standard", url: standard, type: "normal" });
    }
    resolve(response);
});
}

//addons specific code
if (window.handlers) window.handlers("video");
 */