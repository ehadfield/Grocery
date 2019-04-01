// $(function() {
//     $("#question1").submit(function(event){
//   		event.preventDefault();
//   		$("#answer1").removeClass();
//       $("#answer2", "#answer3", "#answer4").addClass(".hide");
//       $("#answer1").toggle();
//     });
//     $("#question2").submit(function(event){
//   		event.preventDefault();
//   		$("#answer2").removeClass();
//       $("#answer1", "#answer3", "#answer4").addClass(".hide");
//       $("#answer2").toggle();
//     });
//     $("#question3").submit(function(event){
//   		event.preventDefault();
//   		$("#answer3").removeClass();
//       $("#answer1", "#answer2", "#answer4").addClass(".hide");
//       $("#answer3").toggle();
//     });
//     $("#question4").submit(function(event){
//   		event.preventDefault();
//   		$("#answer4").removeClass();
//       $("#answer1", "#answer2", "#answer3").addClass(".hide");
//       $("#answer4").toggle();
//     });
//       $("#clickable").click(function() {
//       $("#formHide").toggle();
//       $("#formShow").toggle();
//     });
//   });
// });



//
//   $("#userInput").click(function() {
//     $("#grocery-list").append("<li class='list-item'>" + $("#userInput").val() + "</li>");
//     $("#userInput").val("")
//   })
// })

$(document).ready(function() {
$("#userInput").submit(function(event) {
    event.preventDefault();
    var items = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val(), $("#item5").val()];
    var cloneitems = items.slice()
    console.log(items);
    console.log(cloneitems);
    var alphaitems = cloneitems.sort().toUpperCase();
    console.log(alphaitems);
    var upperalphaitems = alphaitems.toUpperCase();
    console.log(upperalphaitems);
    items.forEach(function(item) {
      $("#grocery-list").text("<li class='list-item'>" + item + "</li>");
      $(".list-item").text(items);
      });
  $("#formShow").show();
    });

});
