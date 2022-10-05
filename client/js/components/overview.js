google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function renderOverview() {
  document.querySelector('#page').innerHTML = `
    <div id="piechart"></div>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  `
}

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Rent', 8],
  ['Food', 2],
  ['Shopping', 2],
  ['Utilities', 2],
  ['Subscription', 2],
  ['Unspent', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':"This month's budget", 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}