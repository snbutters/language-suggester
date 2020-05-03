$(document).ready(function() {
  $("form#languages").submit(function(event) {

    var experience = $("input:radio[name=experience]:checked").val();
    var why = $("input:radio[name=why]:checked").val();
    var quality = $("input:radio[name=quality]:checked").val();
    var use = $("input:radio[name=use]:checked").val();
    var apple = $("input:radio[name=apple]:checked").val();

    if (use === "software" && quality ==="ease") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#python').show();
    } else if (use === "software" && quality === "power") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#cPlusPlus').show();
    } else if (use === "software" && quality === "longevity") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#java').show();
    } else if (use === "video-game" && quality === "ease") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#python').show();
    } else if (use === "video-game" && quality === "power") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#cPlusPlus').show();
    } else if (use === "video-game" && quality === "longevity") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#java').show();
    } else if (use === "web") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#python').show();
    } else if (use === "mobile-app") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#java').show();
    }

    event.preventDefault();
  });
});