var ocontroller = new ScrollMagic.Controller();
var photo = document.getElementById("img1"); //China Photo
var photo2 = document.getElementById("img2"); //TresChiflados Photo

//Basic Tweens
var tweenScale = TweenLite.to(photo, 0.5, {css: {scaleX: 1.2, scaleY: 1.2}, ease: Power0.easeNone}); //Increase image size
var tweenScale2 = TweenLite.to(photo2, 0.5, {css: {scaleX: 1.2, scaleY: 1.2}, ease: Power1.easeNone}); //Increase image size
var tweenScale3 = TweenLite.to("#banner-bg", 0.5, {css: {backgroundSize: '120%'}, ease: Power0.easeNone}); //Increase BG size
var tweents = TweenLite.to(photo, 0.5, {x: -150, ease: Power0.easeNone}); //Move image
var tweents2 = TweenLite.to(photo2, 0.5, {x: 150, ease: Power0.easeNone}); //Move image
//Basic Tweens


// CustomeEase determina la rapidez en la que se va a aplicar la Opacidad
var tweenOp = TweenLite.to(photo, 0.5, {css: {opacity:0}, ease: CustomEase.create("custom", "M0,0,C0,0,0.956,0.066,0.956,0.066,0.956,0.13,0.954,0.432,1,1")});
var tweenOp2 = TweenLite.to(photo2, 0.5, {css: {opacity:0, display:'none'}, ease: CustomEase.create("custom", "M0,0,C0,0,0.956,0.066,0.956,0.066,0.956,0.13,0.954,0.432,1,1")});
// var tweenBG = TweenLite.to("#banner-bg", 0.5, {css: {opacity:0}, ease: CustomEase.create("custom", "M0,0 C0,0 0.894,0.052 0.894,0.052 0.894,0.052 0.954,0.432 1,1")});
var tweenBG = TweenLite.to("#banner-bg", 0.5, {css: {opacity:0},  ease: Power0.easeOut});
// CustomeEase determina la rapidez en la que se va a aplicar la Opacidad

// Keep the background on sight START
 new ScrollMagic.Scene({
	triggerElement: "#top",
	triggerHook: 0,
	duration: 2000
})
.setPin('#start')
.addTo(ocontroller);
// Keep the background on sight END

// Keep the dude on sight START
 new ScrollMagic.Scene({
	triggerElement: "#top",
	triggerHook: 0,
	duration: 1500
})
.setPin('#img1')
.addTo(ocontroller);
// Keep the dude on sight END

// Keep the cloud on sight START
 new ScrollMagic.Scene({
	triggerElement: "#top",
	triggerHook: 0,
	duration: 1500
})
.setPin('#img2')
.addTo(ocontroller);
// Keep the cloud on sight END

 new ScrollMagic.Scene({
	triggerElement: "#top",
	triggerHook: 0,
	duration: 2000
})
.setPin('#bgvid')
.addTo(ocontroller);

 new ScrollMagic.Scene({
	triggerElement: "#top", 
	triggerHook: 0, 
	duration: 1400
})
.setTween(tweenScale)
.addTo(ocontroller);

new ScrollMagic.Scene({
	triggerElement: "#top", 
	triggerHook: 0, 
	duration: 1400
})
.setTween(tweenScale2)
.addTo(ocontroller);

new ScrollMagic.Scene({
	triggerElement: "#top", 
	triggerHook: 0, 
	duration: 1400
})
.setTween(tweenScale3)
.addTo(ocontroller);

new ScrollMagic.Scene({
	triggerElement: "#top", 
	triggerHook: 0, 
	duration: 1400
})
.setTween(tweenOp)
.addTo(ocontroller);

 new ScrollMagic.Scene({
	triggerElement: "#top", 
	triggerHook: 0, 
	duration: 1400
})
.setTween(tweenOp2)
.addTo(ocontroller);

new ScrollMagic.Scene({
	triggerElement: "#top", 
	triggerHook: 0, 
	duration: 1400
})
.setTween(tweents)
.addTo(ocontroller);

 new ScrollMagic.Scene({
	triggerElement: "#top", 
	triggerHook: 0, 
	duration: 1400
})
.setTween(tweents2)
.addTo(ocontroller)
.setClassToggle("#img2","not-hidden");

new ScrollMagic.Scene({
	triggerElement: "#top", 
	triggerHook: 0, 
	duration: 1600
})
.setTween(tweenBG)
.addTo(ocontroller);

$('video').get(0).play();