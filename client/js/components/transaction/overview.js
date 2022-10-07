google.charts.load('current', {'packages':['corechart']});

function renderTransactionOverview() {
  document.querySelector('#page').innerHTML = `
  <section class="overview">
    <div class="center-dialog d-flex align-items-center justify-content-center">
      <div class="card-body">
        <h1>Hi there, ${state.loggedInUsername}!</h1>  
        <p>Your budget overview for this month:</p>
        <div id="piechart"></div>
      </div>
    </div>
  </section>
  `
  drawChart()
  // Draw the chart and set the chart values

  function drawChart() {  
    var transactionDemoAmounts = state.userTransactions.map(transaction => {
      return transaction.amount      
    })
  
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
    var options = {
      'title':'', 
      'width':550, 
      'height':400,
      'is3D':true,
      'colors': ['#ffd075', '#0d6efd', '#ec8f6e', '#f3b49f', '#f6c7b6']
    };
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }  
}




