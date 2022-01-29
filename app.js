gsap.fromTo(
    ".cookie-container", { y: "-100", opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.in" }
);
gsap.fromTo(
    "#message", { x: "100", opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power1.in" }
);

gsap.fromTo(
    "#product_title", { y: "-100", opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.in" }
);
gsap.fromTo(
    "#product_desc", { y: "-100", opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.in" }
);
gsap.fromTo(
    "#product-section", { y: "-100", opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power1.in" }
);
gsap.fromTo(
    "#background-text", { y: 0, opacity: 0 }, { y: 0, opacity: 1, width: "300px", duration: 1, ease: "power1.in" }
);
const button = document.querySelector('.cookie');
const body = document.querySelector('body');
if (button != null) {
    button.addEventListener('click', () => {
        gsap.to('.cookie-container', { opacity: 0, y: 100, duration: 0.75, ease: 'power1.out' });
        playVid();
        body.style.overflowY = "scroll";
    })
}
var vid = document.getElementById("intro");

function playVid() {
    vid.play();
}
const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + "</span>";
});
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
    ".letter", { y: "100%" }, { y: 0, delay: 0, stagger: 0.05, ease: "bounce.out(3)" }
);

const introParallax = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "-50%",
        end: "100%",
        scrub: true,
    },
});

introParallax.fromTo(".intro-text", { y: 100 }, { y: -200 });

const warning = document.querySelector(".warning");
if (warning != null) {
    const warningLetters = warning.textContent.split("");

    warning.textContent = "";

    warningLetters.forEach((letter) => {
        warning.innerHTML += '<span class="warning-letter">' + letter + "</span>";
    });
    gsap.set(".warning-letter", { display: "inline-block" });
    gsap.fromTo(
        ".warning-letter", { y: "10" }, { y: 0, opacity: 1, delay: 1, stagger: 0.05, color: "rgba(255,0,0,0.8)", ease: "bounce.out(3)" }
    );
}

const buttonFixed = document.getElementById('message');
if (buttonFixed != null) {
    buttonFixed.addEventListener('click', () => {
        animating();
    })
}

function animating() {
    gsap.fromTo(
        "#eye-right", { y: "10", color: "rgba(255,0,0,0.5)" }, { y: 0, stagger: 0.05, duration: 1, ease: "power4.out" }
    );
    gsap.fromTo(
        "#month-2", { y: "15" }, { y: 0, opacity: 1, fill: "#4D4D4D", duration: 0.5, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
        "#vector-1", { y: "15" }, { y: 0, stagger: 0.05, duration: 0.5, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
        "#vector-2", { y: "15" }, { y: 0, stagger: 0.05, duration: 0.5, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
        "#contact-us-modal", { y: "100%", opacity: 0 }, { y: 0, opacity: 1, visibility: "visible", duration: 1.5, ease: "power3.in" }
    );
}

const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: ".slider-text",
        scrub: true,
        start: "-40%",
        end: "40%",
    },
});

const buttonSend = document.getElementById('button-send');
if (buttonSend != null) {
    buttonSend.addEventListener('click', () => {
        gsap.fromTo(
            "#button-send", { y: "15" }, { y: 0, stagger: 0.05, duration: 1.5, ease: "back.out(1.7)" }
        );
        gsap.fromTo(
            ".container", { y: 0, opacity: 1 }, { y: 0, duration: 1.5, opacity: 0, ease: "power3.out" }
        );
        gsap.fromTo(
            ".submitted", { y: 0, opacity: 0 }, { y: 0, opacity: 1, visibility: "visible", duration: 1.5, ease: "power3.in" }
        );
        setTimeout("hideForm()", 10000);
    })
}

function hideForm() {
    gsap.fromTo(
        "#contact-us-modal", { y: 0, opacity: 1 }, { y: "100%", opacity: 0, duration: 1.5, ease: "power3.in" }
    );
}
const buttonWarning = document.getElementById('button-warning');
if (buttonWarning != null) {
    buttonWarning.addEventListener('click', () => {
        const body = document.querySelector("body");
        body.remove()
    })
}

const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");
if (form != null) {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    const start =
        "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 400 0.999512 300 0.999512";
    const end =
        "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 400 0.999512";
    containers.forEach((container) => {
        const input = container.querySelector(".input");
        const line = container.querySelector(".elastic-line");
        const placeholder = container.querySelector(".placeholder");

        input.addEventListener("focus", () => {
            if (!input.value) {
                tl.fromTo(
                    line, { attr: { d: start } }, { attr: { d: end }, ease: "Power2.easeOut", duration: 0.75 }
                );
                tl.to(line, { attr: { d: start }, ease: "elastic.out(3,0.5)" }, "<50%");
                tl.to(
                    placeholder, {
                        top: -15,
                        left: 0,
                        scale: 0.7,
                        duration: 0.5,
                        ease: "Power2.easeOut",
                    },
                    "<15%"
                );
            }
        });
    });
    form.addEventListener("click", () => {
        containers.forEach((container) => {
            const input = container.querySelector(".input");
            const line = container.querySelector(".elastic-line");
            const placeholder = container.querySelector(".placeholder");

            if (document.activeElement !== input) {
                if (!input.value) {
                    gsap.to(placeholder, {
                        top: 0,
                        left: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "Power2.easeOut",
                    });
                }
            }
            input.addEventListener("input", (e) => {
                if (e.target.type === "text") {
                    let inputText = e.target.value;
                    if (inputText.length > 2) {
                        colorize("#6391E8", line, placeholder);
                    } else {
                        colorize("#FE8C99", line, placeholder);
                    }
                }
                if (e.target.type === "email") {
                    let valid = validateEmail(e.target.value);
                    if (valid) {
                        colorize("#6391E8", line, placeholder);
                    } else {
                        colorize("#FE8C99", line, placeholder);
                    }
                }
                if (e.target.type === "tel") {
                    let valid = validatePhone(e.target.value);
                    if (valid) {
                        colorize("#6391E8", line, placeholder);
                    } else {
                        colorize("#FE8C99", line, placeholder);
                    }
                }
            });
        });
    });
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
}

function colorize(color, line, placeholder) {
    gsap.to(line, { stroke: color, duration: 0.75 });
    gsap.to(placeholder, { color: color, duration: 0.75 });
}

tlH.fromTo(
    ".highlight", { color: "rgba(255,255,255, 0.4" }, { color: "rgba(255,255,255, 1", stagger: 1 }
);

const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: ".slider-text",
        scrub: true,
        start: "-20%",
        end: "60%",
    },
});

tlHRemove.to(".highlight", { color: "rgba(255,255,255, 0.4", stagger: 1 });
const tlSplit = gsap.timeline({
    scrollTrigger: {
        trigger: ".phone",
        start: "-25%",
        end: "30%",
        scrub: true,
    },
});

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
tlSplit.fromTo(
    ".product-text-left", { x: 50, opacity: 0 }, { opacity: 1, x: -50 },
    "<"
);
tlSplit.fromTo(
    ".product-text-right", { x: -50, opacity: 0 }, { opacity: 1, x: 40 },
    "<"
);

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: ".phone",
        pin: true,
        pinSpacing: false,
        start: "0%",
        end: "100%",
    },
});

const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let topIndex = 2;

swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left;

    swatch.addEventListener("click", (e) => {
        let swatchName = e.target.getAttribute("swatch");
        let closeUp = document.querySelector("." + swatchName);
        if (currentSwatch === swatchName) return;

        gsap.set(closeUp, { zIndex: topIndex });
        gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
        topIndex++;
        currentSwatch = swatchName;
    });
});

const tlVideo = gsap.timeline({
    scrollTrigger: {
        trigger: ".slider-phone",
        start: "0%",
        end: "150%",
        scrub: true,
        pin: true,
    },
});
tlVideo.fromTo(
    ".product-video", { currentTime: 0 }, { currentTime: 3, duration: 1 }
);

tlVideo.fromTo(
    ".product-info-container h3", { opacity: 0 }, { opacity: 1, stagger: 0.25, duration: 0.5 },
    "<"
);
const tlParallax = gsap.timeline({
    scrollTrigger: {
        trigger: ".video-page",
        start: "-25%",
        end: "50%",
        scrub: true,
    },
});

tlParallax.fromTo(".photo-description", { y: 0 }, { y: -80 });
tlParallax.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
tlParallax.fromTo(".phone-video", { y: 0 }, { y: -200 }, "<");

tl1 = new TimelineMax({ repeat: -1 });
tl1.set("#c1", { autoAlpha: .7 })
    .to("#c1", .5, { scale: .2, x: "+=5", transformOrigin: "50% 50%" })
    .to("#c1", .5, { scale: 1, x: "-=5", transformOrigin: "50% 50%" });
tl2 = new TimelineMax({ repeat: -1 });
tl2.set("#c2", { autoAlpha: .7 })
    .to("#c2", .5, { scale: .2, x: "-=5", transformOrigin: "50% 50%" })
    .to("#c2", .5, { scale: 1, x: "+=5", transformOrigin: "50% 50%" })
const pageProduct = document.querySelector(".product-page");
if (pageProduct != null) {
    const cart_1 = document.querySelector(".svg_cart_1");
    const clicked_1 = cart_1.querySelector(".cart-image");
    cart_1.addEventListener("click", (e) => {
        gsap.fromTo(
            clicked_1, { rotation: -5 }, { rotation: 0, fill: "#42B549", duration: 2, ease: "elastic.out(5, 0.2)" }
        );
    });
    const cart_2 = document.querySelector(".svg_cart_2");
    const clicked_2 = cart_2.querySelector(".cart-image");
    cart_2.addEventListener("click", (e) => {
        gsap.fromTo(
            clicked_2, { rotation: -5 }, { rotation: 0, fill: "#42B549", duration: 2, ease: "elastic.out(5, 0.2)" }
        );
    });
    const cart_3 = document.querySelector(".svg_cart_3");
    const clicked_3 = cart_3.querySelector(".cart-image");
    cart_3.addEventListener("click", (e) => {
        gsap.fromTo(
            clicked_3, { rotation: -5 }, { rotation: 0, fill: "#42B549", duration: 2, ease: "elastic.out(5, 0.2)" }
        );
    });
    const cart_4 = document.querySelector(".svg_cart_4");
    const clicked_4 = cart_4.querySelector(".cart-image");
    cart_4.addEventListener("click", (e) => {
        gsap.fromTo(
            clicked_4, { rotation: -5 }, { rotation: 0, fill: "#42B549", duration: 2, ease: "elastic.out(5, 0.2)" }
        );
    });
    const cart_5 = document.querySelector(".svg_cart_5");
    const clicked_5 = cart_5.querySelector(".cart-image");
    cart_5.addEventListener("click", (e) => {
        gsap.fromTo(
            clicked_5, { rotation: -5 }, { rotation: 0, fill: "#42B549", duration: 2, ease: "elastic.out(5, 0.2)" }
        );
    });
    const cart_6 = document.querySelector(".svg_cart_6");
    const clicked_6 = cart_6.querySelector(".cart-image");
    cart_6.addEventListener("click", (e) => {
        gsap.fromTo(
            clicked_6, { rotation: -5 }, { rotation: 0, fill: "#42B549", duration: 2, ease: "elastic.out(5, 0.2)" }
        );
    });
}