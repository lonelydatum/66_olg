import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	frame1:{},
	frame2: 2.7, 
	frame3: 3
}

const yyy = {
	b_300x250: 100,
	b_160x600: 250,
}

read.frame1[`Golf`] = 1.5
read.frame1[`MARCH2`] = 2.8

const {w, h} = bannerSize

console.log(read);



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	
	return tl
}


function standard(y, vh){	
	
const tl = init()	
	
olg()
tl.add( balls([".ball_a_1", ".ball_a_2", ".ball_a_3", ".ball_a_4", ".ball_a_5"]), .5 )

tl.from(".t1", {duration:.36, y:`-=${y}`})

tl.add("f2", "+=2.2")
tl.to(".f1", {duration:.3, opacity:0}, "f2")

tl.to(".peeps", {duration:.3, opacity:0}, "f2")
tl.from(".peeps_blur", {duration:.3, opacity:0}, "f2")


tl.from(".phone", {duration:.3, y:`+=${bannerSize.h}`})
tl.from(".t2", {duration:.36, y:`-=${y}`}, "+=.3")

tl.add(balls([".ball_b_1", ".ball_b_2", ".ball_b_3"]))

tl.add("f3", "+=4")

tl.from([".bg", ".legal"], {duration:.3, opacity:0}, "f3")

tl.from([".hand_0", ".hand_1"], {duration:.3, y:`+=${bannerSize.h}`})


tl.from(".t3", {duration:.3, x:`-=${bannerSize.w}`})
if(vh==="ver"){
	tl.from(".cta", {duration:.3, x:`-=${bannerSize.w}`})	
}else{
	tl.from(".cta", {duration:.3, opacity:0})
}


tl.add("screen_change", "+=2")
tl.to(".hand_1", {duration:.3, opacity:0}, "screen_change")
tl.from(".hand_2", {duration:.3, opacity:0}, "screen_change")
	

	

	return tl
}

function balls(list){
	const tl = new TimelineMax()
	list.map((item, i)=>{
		tl.from(item, {duration:.5, opacity:0,  y:"+=70", ease:Back.easeOut}, (1+i)/list.length*.5)
	})
	return tl
}

function b_970x250(){
	standard(200, "hor")
}

function b_160x600(){
	standard(200, "ver")
}

function b_300x250(){		
	standard(100, "hor")
}

function b_300x600(){		
	standard(200, "ver")
}

function b_1000x700(){	
	standard()
}

function b_970x70(){

	standard()
}

function b_320x50(){
	standard(50, "hor")
}

function b_728x90(text1){
	standard(80, "hor")		
}

export { init, b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250, b_1000x700,b_970x70, origin, standard, read }

