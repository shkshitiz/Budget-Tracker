google.charts.load('current', {'packages':['corechart']});

function renderTransactionOverview() {
  document.querySelector('#page').innerHTML = `
  <h1>Hi there, ${state.username}!</h1>  
  <p>Your budget overview for this month:</p>
  <div id="piechart"></div>
  `
  drawChart()
  // Draw the chart and set the chart values

  function drawChart() {
    var arrayOfUserExpenses = [];
  
    var transactionDemoAmounts = [100, 1800, -20, -2000]
  
    const userExpenses = transactionDemoAmounts.filter(num => {
      return num < 0
    }).map(num => {
      return -num
    }).reduce((total, num) => {
      return total + num
    }, 0)
    console.log(userExpenses)

    const userIncome = transactionDemoAmounts.filter(num => {
      return num > 0
    }).reduce((total, num) => {
      return total + num
    }, 0)
    console.log(userIncome)

    const leftoverBudget = userIncome - userExpenses

    if (leftoverBudget < 0) {
      var dataTable = [
        ['Task', 'Hours per Day'],
        ['Expenses', userExpenses],
      ]
    } else {
      var dataTable = [
        ['Task', 'Hours per Day'],
        ['Expenses', userExpenses],
        ['Budget', leftoverBudget]
      ]
    }

    // Extension: Category
    // dataTable.push(['insurance', 500])

    var data = google.visualization.arrayToDataTable(dataTable);
  
  
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'', 'width':550, 'height':400};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }  
}




