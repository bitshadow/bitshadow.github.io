window.onload = function(){
  var listItems = $( 'li' );
  var a = [1, 2, 3, 5, 8, 7];
  var count = 0;

  setInterval(function(){
    var $listItem = listItems.eq(a[count]);
    $listItem.hasClass('push') ? $listItem.removeClass('push') : $listItem.addClass('push');
    count = ++count % a.length;
  },2000);
};