const Selector = (element) => document.querySelector(element);
const Moviecards = (data) => {
  return `
              <div class="w-42 lg:w-36">
            <img
              src="${data.Movieimage}"
              alt=""
              class="w-full lg:w-36 lg:h-60 rounded-lg h-44"
            />
            <p class="text-gray-600 text-sm pt-1.5">${data.MovieCountryYear}</p>
            <h2 class="text-l font-bold pt-1.5">${data.MovieName}</h2>
            <p class="text-gray-600 text-sm pt-1.5">${data.Moviegenre}</p>
          </div>
    `;
};
LatestCard.map((data) => {
  Selector(".latest").innerHTML += Moviecards(data);
});
Bollywoodcard.map((data) => {
  Selector(".bollywood").innerHTML += Moviecards(data);
});
Hollywoodcard.map((data) => {
  Selector(".hollywood").innerHTML += Moviecards(data);
});
Webseriescard.map((data) => {
  Selector(".webseries").innerHTML += Moviecards(data);
});
Anime.map((data) => {
  Selector(".anime").innerHTML += Moviecards(data);
});
