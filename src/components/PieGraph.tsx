import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

export default class PieGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/pie-chart-in-responsive-container-dmhf62';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#82C9D7"/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}