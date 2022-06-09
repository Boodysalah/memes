const appUrl = "https://api.imgflip.com/";
const meme = "get_memes";

const finalUrl = appUrl + meme;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let quantitymemes = 10;
let finalMemesArray = [];

function CallMeme() {
  fetch(finalUrl)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let memes = res.data.memes;
      // for (let i = 0; i < quantitymemes; i++) {
      //   const index = randomIntFromInterval(0, 100);
      //   finalMemesArray.push(memes[index]);
      // }

      let singleMeme = memes[randomIntFromInterval(0, 100)];

      let img = document.getElementById("imgmeme");
      let title = document.getElementById("titlememe");

      img.src = singleMeme.url;
      title.innerHTML = singleMeme.name;
    });
}

let buttonNext = document.getElementById("button");
buttonNext.addEventListener("click", function () {
  CallMeme();
});

CallMeme();
