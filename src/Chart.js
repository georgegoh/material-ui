import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';


export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            intervalId: 0,
        };
        this.updateData = this.updateData.bind(this);
    }
    
    async updateData() {
        var url = process.env.REACT_APP_API_URL + 'api/v1/stocklevels';
        const response = await fetch(url);
        const data = await response.json();
  
        this.setState({data: data});
    }
    
    componentDidMount() {
        this.updateData();
        
        var intervalId = setInterval(this.updateData,2000);
        this.setState({intervalId: intervalId});
    }

    render() {
        return (
            <React.Fragment>
              <Title>Stock Levels</Title>
              <ResponsiveContainer>
                <BarChart
                  data={this.state.data}
                  margin={{
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="qty" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </React.Fragment>
        );
    }
}