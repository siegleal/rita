$(function() {
  var $input = $('.colorpicker').colorpicker();
    
  $('.color-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: '/setcolor',
      data: { color: $input.colorpicker('getValue') }
    }).done(function(data) {
      console.log(data);
    }).fail(function(err) {
      console.log(err);
    });
  });
});