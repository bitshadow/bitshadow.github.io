$(document).ready(function(){
  var a = [1, 2, 3, 5, 8, 7];
  var $listItems = $( 'li' );
  var $ul = $('ul');
  var tid = null;
  var delay = 5000;  // 5 sec

  var mouseIn = false;
  $ul.on('mouseenter', function(){
    mouseIn = true;
    for (var i = $listItems.length - 1; i >= 0; i--) {
      $listItems.eq(i).removeClass('push');
    };
  })

  $ul.on('mouseleave', function(){
    mouseIn = false;
    if (tid) {
      clearTimeout(tid);
    }

    setTimeout(animate, delay);
  })

  function applyEffect(element){
    if (!mouseIn) {
      element.hasClass('push')?
      element.removeClass('push'):
      element.addClass('push');
    }
  }

  function animate() {
    if (tid) {
      a.forEach(function(el){
        applyEffect($listItems.eq(el));
      })
    }

    tid = setTimeout(animate, delay);
  }

  animate();
});
