
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';




class Framework extends Component {
  constructor(props){
    super(props)
  
    const colors = [
      'rgba(255,99,132,0.2)',
      'rgba(54,162,235,0.2)',
      'rgba(255,206,86,0.2)',
      'rgba(75,192,192,0.2)',
      'rgba(153,102,255,0.2)',
      'rgba(255,159,64,0.2)',
      'rgba(255,99,32,0.2)'
      ]

    const BackgroundColors = [
      'rgba(255,99,132,0.4)',
      'rgba(54,162,235,0.4)',
      'rgba(255,206,86,0.4)',
      'rgba(75,192,192,0.4)',
      'rgba(153,102,255,0.4)',
      'rgba(255,159,64,0.4)',
      'rgba(255,99,32,0.4)'
      ]


    const frameworks = ['Firebase','React-Bootstrap', 'React-Materialize','React-chartsjs2', 'Moment']

    this.state = {
      chartData: {
        labels: frameworks,
        datasets: [
          {
            label: 'Level of proficiency',
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
            hoverBackgroundColor: BackgroundColors,
            hoverBorderColor: BackgroundColors,
            data: [70, 80, 90, 50, 40, 0, 100], //Thanks Jackie
            mainAspectRatio: true,
        

          }
        ]
      }
    }
  }

    
  render() {
    const { chartData } = this.state
    return (
      <div>
        <h2>Frameworks</h2>
        <Bar data={chartData} 
          options={{
            mainAspectRatio: false, scaleShowGridLines : false,
          }} />
      </div>
    );
  }
}

export default Framework 