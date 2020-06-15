var mydate=new Date()
var year=mydate.getYear()
if(year<1000)
year+=1900
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if(daym<10)
daym="0"+daym
var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
document.write(""+dayarray[day]+", "+montharray[month]+" "+daym+", "+year+"")      
      
      
      function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};
      return i;
    }

    var icons = new Skycons({"color": "#FFFFFF"}),
    list  = [
      "clear-day"
    ],
    i;
    for(i = list.length; i--; )
    icons.set(list[i], list[i]);
    icons.play();


    var icons = new Skycons({"color": "#FFFFFF"}),
    list = [
      "clear-night", "partly-cloudy-day",	"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind", "fog"
    ],
    i;
    for(i = list.length; i--; )
    icons.set(list[i], list[i]);
    icons.play();


    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
        autoPlay: 10000000,
        items : 5,
        itemsDesktop : [1024,4],
        itemsDesktopSmall : [640,3]
      });
    });
