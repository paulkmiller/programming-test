// This is some tricky stuff. Couldn't figure it out without anchors.

$(function() {
  $("li").on("click", function(e) { 
    var scrollTop = $("section").height();
    
    if ($(this).text() == 'Section 1') {
        $(this).css('color', 'blue');
    }
    else if($this.text() =="Section 2"){
      $(this).css('color', 'red')
    }
    
    $("body, html").animate({
            scrollTop: scrollTop
        }, 800);
  });
});