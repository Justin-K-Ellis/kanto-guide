const prefectures = require("../models/data.js");

const renderIndex = (req, res) => {
  res.render("index");
};

const renderTokyo = (req, res) => {
  res.render("tokyo", {
    name: prefectures.tokyo.name,
    description: prefectures.tokyo.description,
    history: prefectures.tokyo.history,
    places: prefectures.tokyo.places,
    trivia: prefectures.tokyo.trivia,
  });
};

const renderKanagawa = (req, res) => {};

const renderChiba = (req, res) => {};

const renderSaitama = (req, res) => {};

module.exports = {
  renderIndex,
  renderTokyo,
  renderKanagawa,
  renderChiba,
  renderSaitama,
};
