$(document).ready(function() {
  $("form#languages").submit(function(event) {

    var insertName = $("input#insertName").val();

    var reason = $("input:radio[name=reason]:checked").val();
    var quality = $("input:radio[name=quality]:checked").val();
    var use = $("input:radio[name=use]:checked").val();
    var apple = $("input:radio[name=apple]:checked").val();

    $(".insertName").text(insertName);

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

    if (reason ==="play" && quality === "ease") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#python').show();
    }

    if (apple === "yes") {
      $('#python, #java, #cPlusPlus, #swift').hide();
      $('#swift').show();
    }

    event.preventDefault();
  });
});