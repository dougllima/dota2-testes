const baseUrl = ' https://api.opendota.com/api/';
const $ = require('jquery');

module.exports.listHeroes = (callback) => {
  let url = baseUrl;
  $.ajax({
    url: url += 'heroes',
    method: 'GET',
    success: function (result) {
      console.log(result);
      callback(result);
    },
    error: function (err) {
      throw err;
    }
  });
}

module.exports.playerInfo = (playerId, addUrl, callback) => {
  let url = baseUrl;
  url += 'players/' + playerId;

  if (addUrl)
    url += '/' + addUrl
  $.ajax({
    url: url,
    method: 'GET',
    success: function (result) {
      console.log(result);
      callback(result);
    },
    error: function (err) {
      throw err;
    }
  });
}

module.exports.matches = (matchId, callback) => {
  let url = baseUrl;
  url += 'matches/' + matchId;

  $.ajax({
    url: url,
    method: 'GET',
    success: function (result) {
      console.log(result);
      callback(result);
    },
    error: function (err) {
      throw err;
    }
  });
}

module.exports.proPlayers = (callback) => {
  let url = baseUrl;
  url += 'proPlayers';

  $.ajax({
    url: url,
    method: 'GET',
    success: function (result) {
      console.log(result);
      callback(result);
    },
    error: function (err) {
      throw err;
    }
  });
}

module.exports.proMatches = (callback) => {
  let url = baseUrl;
  url += 'proMatches';

  $.ajax({
    url: url,
    method: 'GET',
    success: function (result) {
      console.log(result);
      callback(result);
    },
    error: function (err) {
      throw err;
    }
  });
}

module.exports.publicMatches = (callback) => {
  let url = baseUrl;
  url += 'publicMatches';

  $.ajax({
    url: url,
    method: 'GET',
    success: function (result) {
      console.log(result);
      callback(result);
    },
    error: function (err) {
      throw err;
    }
  });
}

module.exports.explorer = (query, callback) => {
  let url = baseUrl;
  url += 'publicMatches';

  $.ajax({
    url: url,
    method: 'GET',
    success: function (result) {
      console.log(result);
      callback(result);
    },
    error: function (err) {
      throw err;
    }
  });
}
