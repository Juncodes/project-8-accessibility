$(document).ready(function() {
var my_options = $("#albums option");
var selected = $("#albums").val();

my_options.sort(function(a,b) {
    if (a.text > b.text) return 1;
    if (a.text < b.text) return -1;
    return 0
});

$("#albums").empty().append( my_options );
$("#albums").val(selected);
}); // sort by alphabetical order
/*
$(function() {
    var availableAlbums = [
      "Party For An Angel",
      "A Day Of Old",
      "Finding My Shadow",
      "Diamond Fireworks",
      "Enjoy Your Desire",
      "This Is For You",
      "Music Of My Life",
      "Song For Yesterday",
      "Heroic Forever",
      "Midnight Fires",
      "Street Of The Rider",
    ];
    $( "#albums" ).text().show(
      source: availableAlbums
    );
  });*/
  
$('select>option:eq(1)').attr('selected', true);