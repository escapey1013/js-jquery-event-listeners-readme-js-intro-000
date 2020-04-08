
function getIt() {
  $('p').on("click", function() {
    alert.("Hey!");
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty")
  })
}

$(document).ready(function(){

window.getIt()

window.frameIt()


// call functions here

});
