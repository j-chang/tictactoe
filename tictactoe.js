var turn = 'X';

$(function() {

  $('td').on('click', function() {
    if ($(this).text() === '') {
      $(this).text(turn);
      turn === 'X' ? turn = 'O' : turn = 'X';
      $('span').text(turn);
    }

    var sq1 = $('#1').text();
    var sq2 = $('#2').text();
    var sq3 = $('#3').text();
    var sq4 = $('#4').text();
    var sq5 = $('#5').text();
    var sq6 = $('#6').text();
    var sq7 = $('#7').text();
    var sq8 = $('#8').text();
    var sq9 = $('#9').text();

    var horiz1 = sq1 + sq2 + sq3;
    var horiz2 = sq4 + sq5 + sq6;
    var horiz3 = sq7 + sq8 + sq9;
    var vert1 = sq1 + sq4 + sq7;
    var vert2 = sq2 + sq5 + sq8;
    var vert3 = sq3 + sq6 + sq9;
    var diag1 = sq1 + sq5 +sq9;
    var diag2 = sq3 + sq5 + sq7;

    var lines = [horiz1, horiz2, horiz3, vert1, vert2, vert3, diag1, diag2];

    lines.forEach(function(line) {
      if (line === 'XXX') {
        $('h3').text('X is the winner!');
      } else if (line === 'OOO') {
        $('h3').text('O is the winner!');
      }
    });

  });

});