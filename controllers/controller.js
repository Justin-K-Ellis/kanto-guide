const prefectures = require("../models/data.js");

const renderIndex = (req, res) => {
  res.render("index");
};

const renderTokyo = (req, res) => {};

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
