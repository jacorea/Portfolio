
import React, { Component } from 'react';
import {HorizontalBar, Bar, Line, Pie} from 'react-chartjs-2';




class HorizontalBarChart extends Component {
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

    const languages = ['JavaScript', 'Ruby&Rails', 'React','HTML', 'CSS']

    const frameworks = ['Firebase','React-Bootstrap', 'React-Materialize','react-chartsjs2', 'Moment']

    this.state = {
      chartData: {
        labels: languages,
        labels2: frameworks,
        datasets: [
          {
            label: 'Level of proficiency',
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 2,
            hoverBackgroundColor: BackgroundColors,
            hoverBorderColor: BackgroundColors,
            data: [90, 80, 90, 85, 85, 0, 95]
          }
        ]
      }
    }
  }

    
  render() {
    const { chartData } = this.state
    return (
      <div>
        <h2>Languages</h2>
        <HorizontalBar data={chartData} 
          options={{
            mainAspectRatio: false
          }} />
      </div>
    );
  }
}

export default HorizontalBarChart 





