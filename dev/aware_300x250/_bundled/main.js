(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var read = {
	frame1: {},
	frame2: 2.7,
	frame3: 3
};

var yyy = {
	b_300x250: 100,
	b_160x600: 250
};

read.frame1["Golf"] = 1.5;
read.frame1["MARCH2"] = 2.8;

var w = bannerSize.w;
var h = bannerSize.h;

console.log(read);

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });

	return tl;
}

function standard(y, vh) {

	var tl = init();

	(0, _proline.olg)();
	tl.add(balls([".ball_a_1", ".ball_a_2", ".ball_a_3", ".ball_a_4", ".ball_a_5"]), .5);

	tl.from(".t1", { duration: .36, y: "-=" + y });

	tl.add("f2", "+=2.2");
	tl.to(".f1", { duration: .3, opacity: 0 }, "f2");

	tl.to(".peeps", { duration: .3, opacity: 0 }, "f2");
	tl.from(".peeps_blur", { duration: .3, opacity: 0 }, "f2");

	tl.from(".phone", { duration: .3, y: "+=" + bannerSize.h });
	tl.from(".t2", { duration: .36, y: "-=" + y }, "+=.3");

	tl.add(balls([".ball_b_1", ".ball_b_2", ".ball_b_3"]));

	tl.add("f3", "+=4");

	tl.from([".bg", ".legal"], { duration: .3, opacity: 0 }, "f3");

	tl.from([".hand_0", ".hand_1"], { duration: .3, y: "+=" + bannerSize.h });

	tl.from(".t3", { duration: .3, x: "-=" + bannerSize.w });
	if (vh === "ver") {
		tl.from(".cta", { duration: .3, x: "-=" + bannerSize.w });
	} else {
		tl.from(".cta", { duration: .3, opacity: 0 });
	}

	tl.add("screen_change", "+=2");
	tl.to(".hand_1", { duration: .3, opacity: 0 }, "screen_change");
	tl.from(".hand_2", { duration: .3, opacity: 0 }, "screen_change");

	return tl;
}

function balls(list) {
	var tl = new TimelineMax();
	list.map(function (item, i) {
		tl.from(item, { duration: .5, opacity: 0, y: "+=70", ease: Back.easeOut }, (1 + i) / list.length * .5);
	});
	return tl;
}

function b_970x250() {
	standard(200, "hor");
}

function b_160x600() {
	standard(200, "ver");
}

function b_300x250() {
	standard(100, "hor");
}

function b_300x600() {
	standard(200, "ver");
}

function b_1000x700() {
	standard();
}

function b_970x70() {

	standard();
}

function b_320x50() {
	standard(50, "hor");
}

function b_728x90(text1) {
	standard(80, "hor");
}

exports.init = init;
exports.b_160x600 = b_160x600;
exports.b_300x250 = b_300x250;
exports.b_300x600 = b_300x600;
exports.b_320x50 = b_320x50;
exports.b_728x90 = b_728x90;
exports.b_970x250 = b_970x250;
exports.b_1000x700 = b_1000x700;
exports.b_970x70 = b_970x70;
exports.origin = _helpersHelpersJs.origin;
exports.standard = standard;
exports.read = read;

},{"./helpers/helpers.js":2,"./proline":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],4:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.b_300x250)();

},{"../../_common/js/common.js":1}]},{},[4])


//# sourceMappingURL=main.js.map
