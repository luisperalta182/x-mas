

$(window).on("load", function (e) {
  var maxScreen = $(document).height();
  $('.section-wrapper').css('max-height', maxScreen);
  setTimeout(function () {
    $("#loader").fadeOut("slow");
    $("body").css({
      overflow: "visible"
    });
  }, 3000);
  window.stop();
});

$(window).resize(function () {$(".section-wrapper").css('max-height', $(window).height())});
$(window).resize(function () {$("#banner").css('height', '100%')});

$(function () {
  // wait for document ready
  var responsive_viewport = $(window).width();

  if (responsive_viewport >= 320) {
    if (Modernizr.touch) {
      $("#content-wrapper").addClass("scrollContainer");
      var controller = new ScrollMagic({
        container: "#content-wrapper"
      });
      var tabletwindow = $("#content-wrapper");
      $(document).on("click", "a[href^=#we-start]", function (e) {
        e.preventDefault();
        setTimeout(function () {
          TweenMax.to(tabletwindow, 2.5, {
            scrollTo: {
              y: 3500,
              autoKill: false
            }
          });
        }, 300);
      });
    } else {
      var controller = new ScrollMagic();
      $("#timeline-link").on("click", function (e) {
        e.preventDefault();
        setTimeout(function () {
          TweenMax.to(window, 2.5, {
            scrollTo: {
              y: 3500,
              autoKill: false
            }
          });
        }, 300);
      });
      $("#testimonials-link").on("click", function (e) {
        e.preventDefault();
        setTimeout(function () {
          TweenMax.to(window, 2.5, {
            scrollTo: {
              y: 13200,
              autoKill: false
            }
          });
        }, 3000);
      });
      $("#gallery-link").on("click", function (e) {
        e.preventDefault();
        setTimeout(function () {
          TweenMax.to(window, 2.5, {
            scrollTo: {
              y: 16000,
              autoKill: false
            }
          });
        }, 300);
      });
      $("#postal-link").on("click", function (e) {
        e.preventDefault();
        setTimeout(function () {
          TweenMax.to(window, 2.5, {
            scrollTo: {
              y: 17800,
              autoKill: false
            }
          });
        }, 300);
      });
      $("#start-link").on("click", function (e) {
        e.preventDefault();
        setTimeout(function () {
          TweenMax.to(window, 2.5, {
            scrollTo: {
              y: 0,
              autoKill: false
            }
          });
        }, 300);
      });


      var w = $(window).width();
      $("#section-inner1 div.section-scroll").width(w - 40);
      $("#section-inner2 div.section-scroll").width(w - 40);
      var pininner1 = w + w + 3200;
      var pininner2 = w + w + 3200;
      $("#section-inner1").width(pininner1);
      $("#section-inner2").width(pininner2);
      var leftpin = w + 3200;
      var leftpinpx = "-" + leftpin + "px";

      var controller1 = new ScrollMagic.Controller();

      // Scroll Horizontal ( Challenges1 (T Templates))
      var moveleft = TweenMax.to("#section-inner1", 1, {
        left: "-3200px",
        ease: Sine.easeInOut
      });
      new ScrollMagic.Scene({
          triggerElement: "span.section-trigger1",
          duration: 2800,
          offset: 200
        })
        .addTo(controller1)
        // .addIndicators({name: "Horizontal Challenge 1 - scroll1"})
        .setPin("#section-outer1")
        .setTween(moveleft);

      // Scroll Horizontal ( We Grew (Academy to Video Templates))
      var moveleft2 = TweenMax.to("#section-inner2", 1, {
        left: "-2750px",
        ease: Sine.easeInOut
      });
      new ScrollMagic.Scene({
          triggerElement: "span.section-trigger2",
          duration: 3200
        })
        .addTo(controller1)
        .setPin("#section-outer2")
        .setTween(moveleft2);

      var fadeOptions = {
        duration: 500,
        offset: -550
      };
      var latefadeOptions = {
        duration: 700,
        offset: 1800
      };
      var latefadeOptions2 = {
        duration: 1500,
        offset: 2400
      };
      var latefadeOptions3 = {
        duration: 1500,
        offset: 3400
      };
      var fadeinitial = $("div.bground1");
      var fade1 = $("div.bground1-fade");
      var fade2 = $("div.bground2");
      var fade3 = $("div.bground2-fade");
      var fade4 = $("div.bground3");
      var fade5 = $("div.bground3-fade");
      var fade6 = $("div.bground4");
      var fade7 = $("div.bground4-fade");
      setTimeout(function () {
        TweenMax.to(fadeinitial, 2.2, {
          autoAlpha: 1
        });
      }, 1900);

      new ScrollMagic.Scene(fadeOptions)
        .addTo(controller1)
        .triggerElement("span.section-trigger1")
        .setTween(TweenMax.from(fade1, 1, {
          autoAlpha: 0
        }));

      new ScrollMagic.Scene(latefadeOptions)
        .addTo(controller1)
        .triggerElement("span.section-trigger1")
        // .addIndicators({ name: "Img 2" })
        .setTween(TweenMax.from(fade2, 1, {
          autoAlpha: 0
        }));

      new ScrollMagic.Scene(fadeOptions)
        .addTo(controller1)
        .triggerElement("span.section-trigger2")
        .setTween(TweenMax.from(fade3, 1, {
          autoAlpha: 0
        }));

      new ScrollMagic.Scene(latefadeOptions)
        .addTo(controller1)
        .triggerElement("span.section-trigger2")
        .setTween(TweenMax.from(fade4, 1, {
          autoAlpha: 0
        }));

      new ScrollMagic.Scene(latefadeOptions)
        .addTo(controller1)
        .triggerElement("span.section-trigger2")
        // .addIndicators({ name: "fade 5" })
        .setTween(TweenMax.from(fade5, 1, {
          autoAlpha: 0
        }));

      new ScrollMagic.Scene(latefadeOptions2)
        .addTo(controller1)
        .triggerElement("span.section-trigger2")
        // .addIndicators({ name: "fade 6" })
        .setTween(TweenMax.from(fade6, 1, {
          autoAlpha: 0
        }));

      new ScrollMagic.Scene(latefadeOptions3)
        .addTo(controller1)
        .triggerElement("span.section-trigger2")
        // .addIndicators({ name: "fade 7" })
        .setTween(TweenMax.from(fade7, 1, {
          autoAlpha: 0
        }));

      //  opacity


      var ocontroller = new ScrollMagic.Controller();
      var photo = document.getElementById("img1"); //China Photo
      var photo2 = document.getElementById("img2"); //TresChiflados Photo

      //Basic Tweens
      var tweenScale = TweenLite.to(photo, 0.5, {
        css: {
          scaleX: 1.2,
          scaleY: 1.2
        },
        ease: Power0.easeNone
      }); //Increase image size
      var tweenScale2 = TweenLite.to(photo2, 0.5, {
        css: {
          scaleX: 1.2,
          scaleY: 1.2
        },
        ease: Power1.easeNone
      }); //Increase image size

      var tweenScale4 = TweenLite.to("#img2-mob", 0.5, {
        css: {
          scaleX: 1.2,
          scaleY: 1.2
        },
        ease: Power1.easeNone
      }); //Increase image size

      var tweenScale3 = TweenLite.to("#banner-bg", 0.5, {
        css: {
          backgroundSize: "120%"
        },
        ease: Power0.easeNone
      }); //Increase BG size
      var tweents = TweenLite.to(photo, 0.5, {
        x: -180,
        ease: Power0.easeNone
      }); //Move image
      var tweents2 = TweenLite.to(photo2, 0.5, {
        x: 150,
        ease: Power0.easeNone
      }); //Move image
      var tweents2Mob = TweenLite.to("#img2-mob", 0.5, {
        x: 150,
        ease: Power0.easeNone
      }); //Move image Mobile
      var tweentVideoScroll = TweenLite.to("#scroll-msg-vid", 0.5, {
        x: 500,
        ease: CustomEase.create("custom", "M0,0,C0,0,0.9,0.028,0.9,0.028,0.988,0.106,0.954,0.432,1,1")
      }); //Move Message
      //Basic Tweens

      // CustomeEase determina la rapidez en la que se va a aplicar la Opacidad
      var tweenOp = TweenLite.to(photo, 0.5, {
        css: {
          opacity: 0
        },
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.636,0.234 0.636,0.234 0.738,0.302 0.954,0.432 1,1"
        )
      });
      var tweenOp2 = TweenLite.to(photo2, 0.5, {
        css: {
          opacity: 0,
          display: "none"
        },
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.636,0.234 0.636,0.234 0.738,0.302 0.954,0.432 1,1"
        )
      });

      var tweenOp3 = TweenLite.to("#img2-mob", 0.5, {
        css: {
          opacity: 0,
          display: "none"
        },
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.636,0.234 0.636,0.234 0.738,0.302 0.954,0.432 1,1"
        )
      });

      var tweenVid = TweenLite.to("#bgvid", 0.5, {
        css: {
          opacity: 0
        },
        ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.7,0,0.7,0,0.7,0.064,0.954,0.432,1,1"
        )
      });
      var tweenBGround = TweenLite.to(".bground", 0.5, {
        css: {
          background: 'transparent'
        },
        ease: Power0.easeOut
      });

      var tweenBG = TweenLite.to("#banner-bg", 0.5, {
        css: {
          opacity: 0
        },
        ease: Power0.easeOut
      });

      var tweenScroll = TweenLite.to("#scroll-msg", 0.5, {
        css: {
          top: "-500px"
        },
        ease: Power0.easeOut
      });

      // CustomeEase determina la rapidez en la que se va a aplicar la Opacidad

      // Keep the background on sight START
      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 2000
        })
        .setPin("#start")
        .addTo(ocontroller);
      // Keep the background on sight END

      // Keep the dude on sight START
      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 1500
        })
        .setPin("#img1")
        .addTo(ocontroller);
      // Keep the dude on sight END

      // Keep the cloud on sight START
      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 1500
        })
        .setPin("#img2")
        .addTo(ocontroller);
      // Keep the cloud on sight END

      // Keep the cloud on sight START
      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 1500
        })
        .setPin("#img2-mob")
        .addTo(ocontroller);
      // Keep the cloud on sight END

      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 3000
        })
        .setPin("#bgvid")
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
        .setTween(tweenScale4)
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
          duration: 3000
        })
        .setTween(tweenVid)
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
        .setTween(tweenOp3)
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
        .setClassToggle("#img2", "not-hidden");

      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 1400
        })
        .setTween(tweents2Mob)
        .addTo(ocontroller)
        .setClassToggle("#img2", "not-hidden");

      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 1600
        })
        .setTween(tweenBG)
        .addTo(ocontroller);

      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 100
        })
        .setTween(tweenScroll)
        .addTo(ocontroller);

      new ScrollMagic.Scene({
          triggerElement: "#top",
          triggerHook: 0,
          duration: 2000
        })
        .setTween(tweentVideoScroll)
        .addTo(ocontroller);

      //Trigger to Message
      new ScrollMagic.Scene({
          triggerElement: "#message-trigger",
          triggerHook: 1,
          duration: 1000
        })
        .addTo(ocontroller)
        .setClassToggle("#mssg-animation", "animate");

      new ScrollMagic.Scene({
          triggerElement: "#testimonials-container",
          triggerHook: 0.5,
          duration: 2200
        })
        .addTo(ocontroller)
        .setClassToggle("nav#navigation", "show-nav");

      new ScrollMagic.Scene({
          triggerElement: "#slide01",
          triggerHook: 0.5,
          duration: 606
        })
        .addTo(ocontroller)
        .setClassToggle("#to-slider1", "active");

      new ScrollMagic.Scene({
          triggerElement: "#slide02",
          triggerHook: 0.5,
          duration: 606
        })
        .addTo(ocontroller)
        .setClassToggle("#to-slider2", "active");

      new ScrollMagic.Scene({
          triggerElement: "#slide03",
          triggerHook: 0.5,
          duration: 606
        })
        .addTo(ocontroller)
        .setClassToggle("#to-slider3", "active");

      new ScrollMagic.Scene({
          triggerElement: "#slide04",
          triggerHook: 0.5,
          duration: 606
        })
        .addTo(ocontroller)
        .setClassToggle("#to-slider4", "active");


        new ScrollMagic.Scene({
          triggerElement: "#slide01",
          triggerHook: 0,
          duration: 100
        })
        .setTween(tweenBGround)
        .addTo(ocontroller);

        


      //// Message Count

      new ScrollMagic.Scene({
          triggerElement: "#message",
          duration: 500,
          offset: -250
        })
        .addTo(ocontroller)
        .on("progress", function (e) {
          var requestcount = Math.floor(Math.random() * 52000) + 1;
          $("#requests h1#count").text(requestcount);
        })
        .on("end", function (e) {
          $("#requests h1#count").text("+51973");
        });


      $("video")
        .get(0)
        .play();
    }
  }
});

// Testimonials section
!(function (e) {
  var o = new ScrollMagic.Controller(),

    t = ["#slide01", "#slide02", "#slide03", "#slide04"], //Each testimonial container
    r = ["#slide01 div.bcg", "#slide02 div.bcg", "#slide03 div.bcg", "#slide04 div.bcg"], // Testimonial > DIV (Not Sure what div)
    n = ["#cb01", "#cb02", "#cb03", "#cb04"]; //Not elements found with these IDs


  if (!Modernizr.touch) {
    r.forEach(function (e, t) {
        {
          var r = t + 1;
          new ScrollMagic.Scene({
              triggerElement: e,
              offset: -700
            })
            .setClassToggle("#slide0" + r, "is-active")
            .addTo(o);
        }
      }),
      t.forEach(function (t, r) {
        new ScrollMagic.Scene({
            triggerElement: t
          })
          .on("enter", function (o) {
            e("navigation").removeAttr("class");
          })
          .addTo(o);
      }),
      t.forEach(function (t, r) {
        {
          var n = e(t).find(".bcg");
          new ScrollMagic.Scene({
              triggerElement: t,
              triggerHook: 0.5,
              duration: 1000
            })
            .setTween(
              TweenMax.from(n, 1, {
                y: "-40%",
                autoAlpha: 0.3,
                ease: Power0.easeNone
              })
            )
            .addTo(o);
        }
      });

    var a = new TimelineMax();
    a.to(e("#Slide01 div"), 0.2, {
        autoAlpha: 0,
        ease: Power1.easeNone
      })
      .to(e("#slide04 .bcg"), 1.4, {
        y: "20%",
        ease: Power1.easeOut
      }, "-=0.2")
      .to(e("#slide01"), 0.7, {
        ease: Power1.easeNone
      }, "-=1.4");

    {
      new ScrollMagic.Scene({
          triggerElement: "#slide01",
          triggerHook: 0,
          duration: "100%"
        })
        .setTween(a)
        .addTo(o);
    }
    o.scrollTo(function (e) {
        TweenMax.to(window, 1, {
          scrollTo: {
            y: e
          },
          ease: Power1.easeInOut
        });
      }),
      e(document).on("click", "a[href^='#']", function (t) {
        var r = e(this).attr("href");
        e(r).length > 0 &&
          (t.preventDefault(),
            o.scrollTo(r),
            window.history &&
            window.history.pushState &&
            history.pushState("", document.title, r));
      });
  }
})(jQuery);


// detect if mobile browser. regex -> http://detectmobilebrowsers.com
// var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);

// // we'd only like to use iScroll for mobile...
// if (isMobile) {
//   // configure iScroll
//   var myScroll = new IScroll('.section-wrapper',
//         {
//           // don't scroll horizontal
//           scrollX: false,
//           // but do scroll vertical
//           scrollY: true,
//           // show scrollbars
//           scrollbars: true,
//           // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
//           // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
//           useTransform: false,
//           // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
//           useTransition: false,
//           // set to highest probing level to get scroll events even during momentum and bounce
//           // requires inclusion of iscroll-probe.js
//           probeType: 3,
//           // pass through clicks inside scroll container
//           click: true 
//         }
//       );
  
//   // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
//   ocontroller.scrollPos(function () {
//     return -myScroll.y;
//   });

//   // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
//   myScroll.on("scroll", function () {
//     ocontroller.update(true);
//   });
// } else {
// }