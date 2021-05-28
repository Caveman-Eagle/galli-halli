const img1 = document.querySelector(".js-img1");
const img2 = document.querySelector(".js-img2");
const img3 = document.querySelector(".js-img3");
const img4 = document.querySelector(".js-img4");
const img5 = document.querySelector(".js-img5");
const screen = document.querySelector(".js-screen");

const kind1 = "image/chico.png";
const kind2 = "image/ditto.png";
const kind3 = "image/evvee.png";
const kind4 = "image/magi.png";
const kind5 = "image/pika.png";

const show = "show";
const hide = "hide";

const main = document.querySelector(".main");

function letKindOfCardBe(n) {
    if (n === 0) {
        img1.src = kind1;
        img2.src = kind1;
        img3.src = kind1;
        img4.src = kind1;
        img5.src = kind1;
    }
    if (n === 1) {
        img1.src = kind2;
        img2.src = kind2;
        img3.src = kind2;
        img4.src = kind2;
        img5.src = kind2;
    }
    if (n === 2) {
        img1.src = kind3;
        img2.src = kind3;
        img3.src = kind3;
        img4.src = kind3;
        img5.src = kind3;
    }
    if (n === 3) {
        img1.src = kind4;
        img2.src = kind4;
        img3.src = kind4;
        img4.src = kind4;
        img5.src = kind4;
    }
    if (n === 4) {
        img1.src = kind5;
        img2.src = kind5;
        img3.src = kind5;
        img4.src = kind5;
        img5.src = kind5;
    }
}

function letCountOFCardBe(m) {
    if (m < 5) {
        img1.classList.add(hide);
        img2.classList.add(hide);
        img3.classList.add(show);
        img4.classList.add(hide);
        img5.classList.add(hide);
    }
    else if (m < 8) {
        img1.classList.add(show);
        img2.classList.add(hide);
        img3.classList.add(hide);
        img4.classList.add(hide);
        img5.classList.add(show);
    }
    else if (m < 11) {
        img1.classList.add(show);
        img2.classList.add(hide);
        img3.classList.add(show);
        img4.classList.add(hide);
        img5.classList.add(show);
    }
    else if (m < 13) {
        img1.classList.add(show);
        img2.classList.add(show);
        img3.classList.add(hide);
        img4.classList.add(show);
        img5.classList.add(show);
    }
    else {
        img1.classList.add(show);
        img2.classList.add(show);
        img3.classList.add(show);
        img4.classList.add(show);
        img5.classList.add(show);
    }
}

function resetCountOfCard() {
    img1.classList.remove(hide);
    img2.classList.remove(hide);
    img3.classList.remove(hide);
    img4.classList.remove(hide);
    img5.classList.remove(hide);

    img1.classList.remove(show);
    img2.classList.remove(show);
    img3.classList.remove(show);
    img4.classList.remove(show);
    img5.classList.remove(show);
}

function handleTouch() {
    const kindOfCard = Math.floor(Math.random()*5);
    const CountOFCard = Math.floor(Math.random()*14);
    letKindOfCardBe(kindOfCard);
    letCountOFCardBe(CountOFCard);
}

function setCard() {
    window.addEventListener("touchstart", resetCountOfCard);
    window.addEventListener("touchstart", handleTouch);
}

function handleHidemain() {
    main.classList.add("main-hide");
}

function init() {
    window.addEventListener("touchstart", handleHidemain);
    setCard()
}
init();