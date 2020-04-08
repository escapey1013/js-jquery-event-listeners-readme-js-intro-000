
  $('p').on("click", getIt() {
    alert.("Hey!");
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty")
  })
}

$(window).ready(function(){

getIt()

window.frameIt()


// call functions here

});
