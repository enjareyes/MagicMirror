
var data = [
  'words',
  'yay',
  'ha'
];

var indx = 0;

(function display() {

  function generateData() {
    $('#words').text(data[indx]);

    setInterval(function(){
      indx++
      indx = (indx === data.length) ? 0 : indx;
      $('#words').text(data[indx]);
    }, 86400000)
  }

  function generateTime() {
    setInterval(function(){
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      $('#time').text(h + ':' + m);
    }, 1000)
  }

generateData();
generateTime();

})()