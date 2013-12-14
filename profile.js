window.onload = function(){
  var $listItems = $( 'li' );
  var $ul = $('ul');

  var a = [1, 2, 3, 5, 8, 7];
  var b = [4, 6, 9];
  var colorClasses = [
    'blue',
    'green',
    'orange',
    'purple',
    'red',
  ];

  animate();
  var mouseIn = false;
  $ul.on('mouseenter', function(){
    mouseIn = true;
    for (var i = $listItems.length - 1; i >= 0; i--) {
      $listItems.eq(i).removeClass('push');
    };
  })

  $ul.on('mouseleave', function(){
    mouseIn = false;
    count = 0;
  })

  function applyEffect(element){
    if (!mouseIn) {
      element.hasClass('push')?
      element.removeClass('push'):
      element.addClass('push');
    }
  }

  var count = 0;
  function animate() {
    var element = $listItems.eq(a[count]);
    applyEffect(element);

    count = ++count % a.length;
    if (count == 0) {
      applyEffect($listItems.eq(0));
    }

    setTimeout(animate, 1000);
  }
};