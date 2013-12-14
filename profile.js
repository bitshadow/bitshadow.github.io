window.onload = function(){
  var listItems = $( 'li' );
  var a = [1, 2, 3, 5, 8, 7];
  var b = [4, 6, 9];
  var colorClasses = [
    'blue',
    'green',
    'orange',
    'purple',
    'red',
  ];

  var count = 0;
  ApplyExtras();
  var tid = setTimeout(shine, 1000);

  function ApplyExtras() {
    for (var i = 0; i < b.length; i++) {
      applyEffect(listItems.eq(b[i]));
    };
  }

  function applyEffect(element){
    element.hasClass('push')?
    element.removeClass('push'):
    element.addClass('push');
  }

  function shine() {
    applyEffect(listItems.eq(a[count]))

    count = ++count % a.length;

    if (count == 0) {
      applyEffect(listItems.eq(0));
      ApplyExtras();
    }

    clearTimeout(tid);
    tid = setTimeout(shine, 2000);
  }
};