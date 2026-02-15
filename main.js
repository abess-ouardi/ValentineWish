// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
        display: "none",
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .add(() => {
        document.body.classList.add("allow-scroll");
        document.documentElement.classList.add("allow-scroll");
    })
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    }, "+=10")
    .add(() => {
        document.body.classList.remove("allow-scroll");
        document.documentElement.classList.remove("allow-scroll");
        window.scrollTo(0, 0); // Jumps back to top for the final video
    })
    .add(() => { 
      const nineZone = document.querySelector(".nine");
      const vid = document.getElementById("backgroundVideo");
      const replayText = document.getElementById("replay");

      // Ensure the viewport is at the top so the video is fully visible
      window.scrollTo(0, 0);

      // 1. Make the final container visible
      TweenMax.set(nineZone, {visibility: "visible", opacity: 1});

      if (vid) {
        vid.currentTime = 0;

        // Try to play with sound. If browser blocks autoplay with sound,
        // fall back to muted autoplay and show a lightweight notice
        // that lets the user enable sound.
        const tryPlay = () => {
          const p = vid.play();
          if (p !== undefined) {
            p.then(() => {
              // playing
            }).catch((err) => {
              // Autoplay with sound blocked -> try muted autoplay
              console.warn('Autoplay with sound blocked, attempting muted autoplay', err);
              vid.muted = true;
              vid.play().then(() => {
                // show a visible, concise notice so user can enable audio
                showEnableSoundNotice(nineZone, vid);
              }).catch((err2) => {
                console.error('Muted autoplay also failed', err2);
              });
            });
          }
        };

        tryPlay();

        vid.onended = () => {
          replayText.style.display = "block";
          TweenMax.from(replayText, 1, {opacity: 0, y: 10});
        };
      }
    })
    // Remove the staggerFrom for ".nine p" here if you want ONLY the video 
    // to show up first, or keep it if you want the "last-smile" to appear.
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    const vid = document.getElementById("backgroundVideo");
    if(vid) vid.pause();
    
    // Hide the button again for the next run
    replyBtn.style.display = "none";
    
    // Ensure we're at top when restarting
    window.scrollTo(0,0);
    
    tl.restart();
  });
  

};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());

// Helper: show a small overlay in the `.nine` section to let the user enable sound
function showEnableSoundNotice(nineZone, vid) {
  if (!nineZone) return;
  // avoid creating multiple notices
  if (document.getElementById('enableSoundNotice')) return;

  const notice = document.createElement('div');
  notice.id = 'enableSoundNotice';
  notice.innerText = 'Tap to enable sound';
  Object.assign(notice.style, {
    position: 'fixed',
    left: '50%',
    bottom: '24px',
    transform: 'translateX(-50%)',
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    padding: '10px 14px',
    borderRadius: '6px',
    zIndex: 10001,
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    fontSize: '14px',
  });

  notice.addEventListener('click', () => {
    try {
      vid.muted = false;
      // attempt to play with sound now that user interacted
      vid.play().catch(e => console.warn('Play after user gesture failed', e));
    } catch (e) {
      console.warn(e);
    }
    notice.remove();
  });

  nineZone.appendChild(notice);
}
