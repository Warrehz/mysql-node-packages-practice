var mysql = require('mysql');

var connection = mysql.createConnection({

  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'ohyeahmysql1!',
  database: 'music_app'

});

connection.connect(function(err) {

  if (err) throw err;

  console.log('[Connection established.]\n');

});

connection.query('SELECT * FROM song_list', function(err, results) {

  if (err) throw err;

  for (var i = 0; i < results.length; i++) {
    console.log(results[i].artist + '\n');
  }

});


connection.query('SELECT * FROM song_list WHERE genre=?', ['Hip Hop'], function(err, results) {

  if (err) throw err;

  console.log('HIP HOP ARTISTS\n' + '----------------')

  for (var i = 0; i < results.length; i++) {
    console.log(results[i].artist);
  }

});

// connection.query('INSERT INTO artists_i_dislike SET ?', {artist: 'Mumford and Sons', genre: 'Indie'}, function (err, results) {});

connection.query('SELECT * FROM artists_i_dislike', function(err, results) {

  if (err) throw err;

  console.log('ARTISTS I DISLIKE\n' + '--------------------')
  console.log(results[0].artist);

});

connection.end(function(err) {

  console.log('\n[Terminating Connection.]');

});

/*
connection.query('INSERT INTO song_list SET ?', {song:'Hit Em Up', artist: 'Tupac', genre: 'Hip Hop'}, function(err, results) {});

connection.query('UPDATE song_list SET ? WHERE ?', [{song:'Hit Em Up'}, {artist: 'Tupac'}], function(err, results) {});

connection.query("DELETE FROM song_list WHERE ?", {flavor: "strawberry"}, function(err, res){});
^this will delete all data where flavor is strawberry.

*/
