$(document).ready(function() {
  //when search is clicked we run the following code
  $("#search").click(function() {
    //Assigns search input to a variable
    var search = $("#searchBar").val();
    //API url concatonated with search term

    $.ajax({
      type: "GET",
      url:
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
          search +
          "&callback=?",
      async: false,
      dataType: "json",
      //if the "GET" is successful perform the following function
      success: function(data) {
        //clear results upon next search
        $("#results").html('');
        //console.log(data[2][1]);
        for (var i = 0; i < 10; i++) {
          $("#results").append(
            "<a href =" +
              data[3][i] +
              ' target = "_blank">' +
              data[1][i] +
              "</h1></a><h3>" +
              data[2][i] +
              "</h3><br>"
          );
        }
      },
      error: function(errorMessage) {
        alert("Error");
      }
    });
    //type enter to search
    $("#searchBar").bind("keypress", function(val) {
      if(val.keypress == 13)
        $("#search").click();
    });
  });
});