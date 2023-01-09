$('#nav p')
  .css({
    cursor: "pointer"
  })
  .on('click', function() {
    var txt = $(this).text() == "MENU" ? "CLOSE" : "MENU";
    $(this).text(txt);
    $(this).next('.d-n').toggle();
    console.log( $(this).text(txt));
  })
