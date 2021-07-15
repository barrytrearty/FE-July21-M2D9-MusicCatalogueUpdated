"strict mode";

const albumBoxes = document.getElementById("album-boxes");
const tapestryRow = document.getElementById("tapestry-row");
const tapestryButton = document.getElementById("tapestry-button");
const jumbotronHeading = document.getElementById("jumbotron-heading");
const jumbotronH1 = document.getElementById("jumbotron-h1");
const jumbotronSubtitle1 = document.getElementById("jumbotron-subtitle1");
const jumbotronSubtitle2 = document.getElementById("jumbotron-subtitle2");
const navbar = document.getElementById("my-navbar");
const buttons = document.querySelectorAll(".btn.btn-danger");

const toggleDisplay = function (event) {
  let element = event.target.closest(".card").childNodes[5];
  element.classList.toggle("d-none");
};

const addBadge = function (div, object) {
  let badge = document.createElement("span");
  badge.innerText = `${object.genre}`;
  badge.classList.add("badge", "badge-info");
  div.appendChild(badge);
};

const createAlbumBox = function (object) {
  let albumDiv = document.createElement("div");

  albumDiv.innerHTML = `<div id="${object.id}" class="card cardhover">
  <img
    src="album-covers/${object.cover}.png"
    class="card-img-top"
    alt"${object.artist}"
  />
  <h5 class="card-title">${object.artist}</h5>
  <ul class="list-group list-group-flush d-none">
    <li class="list-group-item">
      ${object.name}
    </li>
    <li class="list-group-item">Genre: ${object.genre}</li>
    <li class="list-group-item">Release Date: ${object.releaseDate}</li>
  </ul>
</div>`;
  albumDiv.classList.add("col-6", "col-md-4", "col-lg-3", "album-box");
  albumDiv.addEventListener("click", toggleDisplay);
  let genreBadge = addBadge(albumDiv, object);
  // genreBadge.style.left = 0;
  albumBoxes.appendChild(albumDiv);
  // const addBadge = function () {
  //   let badge = document.createElement("span");
  //   badge.innerText = `${object.genre}`;
  //   badge.classList.add("badge", "badge-info");
  //   albumDiv.appendChild(badge);
  // };
};

const displayAlbumBoxes = function (arr) {
  for (i = 0; i < arr.length; i++) {
    createAlbumBox(arr[i]);
  }
};

const createTapestry = function (albumName) {
  let tapestryTile = document.createElement("div");
  tapestryTile.innerHTML = `<img class="move-pic" src="album-covers/${albumName}.png" alt="" />`;
  tapestryTile.classList.add(
    "col-12",
    "col-sm-6",
    "col-md-4",
    "col-lg-3",
    "col-xl-2"
  );
  tapestryRow.appendChild(tapestryTile);
};

const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const displayTapestry = function (array) {
  shuffleArray(array);
  for (j = 0; j < array.length; j++) {
    createTapestry(array[j]);
    tapestryButton.remove();
  }
};

const displayJumbotron = function () {
  jumbotronHeading.style.opacity = 1;
  jumbotronH1.style.opacity = 1;
  jumbotronSubtitle1.style.opacity = 1;
  jumbotronSubtitle2.style.opacity = 1;
  navbar.style.opacity = 1;
};

const displayTrackList = function () {
  let trackList = document.getElementById("monkeys-tracklist");
  trackList.classList.remove("d-none");
};

const addButtonRemove = function () {
  for (button of buttons) {
    button.addEventListener("click", function (event) {
      let rowToBeRemoved = event.target.closest(".track-row");
      rowToBeRemoved.remove();
    });
  }
};

addButtonRemove();

// const removeRow = function
// };

const albums = [
  {
    artist: "Arctic Monkeys",
    name: " Whatever People Say I Am, That's What I'm Not",
    genre: "Indie Rock",
    releaseDate: 2006,
    cover: "arctic-monkeys",
    id: "001",
  },
  {
    artist: "Red Hot Chilli Peppers",
    name: "Californication",
    genre: "Alternative Rock",
    releaseDate: 1999,
    cover: "californication",
    id: "002",
  },
  {
    artist: "Dr Dre",
    name: "The Chronic: 2001",
    genre: "Hip Hop",
    releaseDate: 1999,
    cover: "chronic-dre",
    id: "003",
  },
  {
    artist: "Tom Waits",
    name: "Closing Time",
    genre: "Folk",
    releaseDate: 1973,
    cover: "closing-time",
    id: "004",
  },
  {
    artist: "T-Rex",
    name: "Electric Warrior",
    genre: "Glam Rock",
    releaseDate: 1971,
    cover: "electric-warrior",
    id: "005",
  },
  {
    artist: "Eminem",
    name: "The Eminem Show",
    genre: "Hip Hop",
    releaseDate: 2002,
    cover: "eminem-show",
    id: "006",
  },
  {
    artist: "Arcade Fire",
    name: "Funeral",
    genre: "Indie Rock",
    releaseDate: 2004,
    cover: "funeral",
    id: "007",
  },
  {
    artist: "Kendrick Lamar",
    name: "Good Kid, M.A.A.D City",
    genre: "Hip Hop",
    releaseDate: 2012,
    cover: "good-kid-mad-city",
    id: "008",
  },
  {
    artist: "Hozier",
    name: "Hozier",
    genre: "Blues",
    releaseDate: 2014,
    cover: "hozier",
    id: "009",
  },
  {
    artist: "Nas",
    name: "Illmatic",
    genre: "Hip Hop",
    releaseDate: 1994,
    cover: "illimatic",
    id: "010",
  },
  {
    artist: "Kasabian",
    name: "West Ryder Pauper Lunatic Asylum",
    genre: "Indie Rock",
    releaseDate: 2009,
    cover: "kasabian",
    id: "011",
  },
  {
    artist: "The Vaccines",
    name: " What Did You Expect from The Vaccines?",
    genre: "Indie Rock",
    releaseDate: 2011,
    cover: "vaccines",
    id: "012",
  },
];

const albumCovers = [
  "vampire-weekend",
  "vaccines",
  "strokes",
  "sigh-no-more",
  "radiohead",
  "nevermind",
  "mgmt",
  "kasabian",
  "jake-bugg",
  "illimatic",
  "hozier",
  "good-kid-mad-city",
  "funeral",
  "eminem-show",
  "electric-warrior",
  "closing-time",
  "chronic-dre",
  "californication",
  "dogrel",
  "an-awesome-wave",
  "hot-fuss",
  "nwa",
  "the-libertines",
  "grand-corps-malade",
];

// window.onload(
displayJumbotron();
displayAlbumBoxes(albums);
// displayTapestry(albumCovers);
// );
