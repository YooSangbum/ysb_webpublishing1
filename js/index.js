const $btns = document.querySelectorAll(".btns > button");
const $imgs = document.querySelector(".imgs");

$btns.forEach((item, i) => {
  item.addEventListener("click", () => {
    $imgs.innerHTML = `<img src="./img/image${i + 1}.jpg" alt="" />`;
  });
});

const $ham = document.querySelector(".ham");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", (e) => {
  // document.body.classList.toggle("on");
  $gnb.classList.toggle("on");
});
