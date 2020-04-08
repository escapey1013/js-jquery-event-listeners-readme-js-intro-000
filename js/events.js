function getIt() {
$('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which == 71)
    alert("You've pressed 'g'")
  })
}

$(document).ready(function(){

window.getIt()

window.frameIt()

window.pressIt()


// call functions here

});
