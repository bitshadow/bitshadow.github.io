$(document).ready(function(){
  var a = [1, 2, 3, 5, 8, 7];
  var b = [4, 6, 9];
  var $listItems = $( 'li' );
  var $ul = $('ul');
  var tid = null;
  var delay = 5000;  // 5 sec

  var mouseIn = false;
  $ul.on('mouseenter', function(){
    mouseIn = true;
    for (var i = $listItems.length - 1; i >= 0; i--) {
      $listItems.eq(i).removeClass('highlight');
    };
  })

  $ul.on('mouseleave', function(){
    mouseIn = false;
    if (tid) {
      clearTimeout(tid);
    }

    setTimeout(animate, delay);
  })

  function applyEffect(element, style){
    if (!mouseIn) {
      element.hasClass(style)?
      element.removeClass(style):
      element.addClass(style);
    }
  }

  function animate() {
    J();
    tid = setTimeout(animate, delay);
  }

  function J(){
    a.forEach(function(el){
      applyEffect($listItems.eq(el), 'highlight');
    });

    b.forEach(function(el){
      applyEffect($listItems.eq(el), 'blur');
    })
  }

  J();
  animate();
});
