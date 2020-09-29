/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
$(".title-1").click(function () {
   $(".text-1").toggle();
   $(".chevron-right-1").toggle();
   $(".chevron-bottom-1").toggle();
});

$(".title-2").click(function () {
   $(".text-2").toggle();
   $(".chevron-right-2").toggle();
   $(".chevron-bottom-2").toggle();
});

$(".title-3").click(function () {
   $(".text-3").toggle();
   $(".chevron-right-3").toggle();
   $(".chevron-bottom-3").toggle();
});

$(".title-4").click(function () {
   $(".text-4").toggle();
   $(".chevron-right-4").toggle();
   $(".chevron-bottom-4").toggle();
});

$(".title-5").click(function () {
   $(".text-5").toggle();
   $(".chevron-right-5").toggle();
   $(".chevron-bottom-5").toggle();
});

$(".title-6").click(function () {
   $(".text-6").toggle();
   $(".book-6").toggle();
   $(".book-fill-6").toggle();
});

$("#personal-reason").click(function () {
   $("#email-button").html("Email personal request");
});

$("#professional-reason").click(function () {
   $("#email-button").html("Email professional request");
});

$("#email-body").keypress(function () {
   $("#email-button").removeAttr("disabled");
});

$("#are-you-human").click(function () {
   $("#are-you-human").removeClass("is-invalid");
});

$("#email-button").click(function () {
   window.open(
      "mailto:yaoj415@gmail.com?subject=Hello&body=" + $("#email-body").val(),
      "_blank"
   );
});
