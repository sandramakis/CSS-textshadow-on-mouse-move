"use strict";

const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100; // the distance btw the target and the top left

console.log(hero, text);

const shadow = function (e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  //   half the walk is -50 and the other is 50
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  console.log(xWalk, yWalk);

  text.style.textShadow = `
  ${xWalk}px ${yWalk * -1}px 0 rgba(0,255,149,0.9),
  ${xWalk * 1}px ${yWalk * -2}px 0 rgba(0,10,255,0.7),
  ${xWalk * -1}px ${yWalk * 1}px 0 rgba(419,88,123,1),
  ${xWalk * 1.5}px ${yWalk * -1}px 0 rgba(98,255,150,1)
  `;
};

hero.addEventListener("mousemove", shadow);
