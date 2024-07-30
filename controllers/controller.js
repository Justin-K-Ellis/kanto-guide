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

const renderKanagawa = (req, res) => {
  res.render("kanagawa", {
    name: prefectures.kanagawa.name,
    description: prefectures.kanagawa.description,
    history: prefectures.kanagawa.history,
    places: prefectures.kanagawa.places,
    trivia: prefectures.kanagawa.trivia,
  });
};

const renderChiba = (req, res) => {
  res.render("chiba", {
    name: prefectures.chiba.name,
    description: prefectures.chiba.description,
    history: prefectures.chiba.history,
    places: prefectures.chiba.places,
    trivia: prefectures.chiba.trivia,
  });
};

const renderSaitama = (req, res) => {
  res.render("saitama", {
    name: prefectures.saitama.name,
    description: prefectures.saitama.description,
    history: prefectures.saitama.history,
    places: prefectures.saitama.places,
    trivia: prefectures.saitama.trivia,
  });
};

const send404 = (req, res) => {
  res.status(404);
  res.render("404");
};

module.exports = {
  renderIndex,
  renderTokyo,
  renderKanagawa,
  renderChiba,
  renderSaitama,
  send404,
};
