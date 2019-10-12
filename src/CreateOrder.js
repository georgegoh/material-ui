import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


export default class CreateOrder extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          open: false,
          selectedSKU: 0,
          data: [],
      }
      this.handleClose = this.handleClose.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.order = this.order.bind(this);
  }

    async componentDidMount() {
        var url = process.env.REACT_APP_API_URL + 'api/v1/stocklevels';
        const response = await fetch(url);
        const data = await response.json();
  
        console.log("data", data);
        this.setState({data: data});
    }
  
  handleClose() {
      this.setState({open: false});
  }
  
  handleOpen() {
      this.setState({open: true});
  }
  
  handleChange(event) {
      console.log(event.target.value);
      this.setState({selectedSKU: event.target.value});
  }
  
  order(){
      var url = process.env.REACT_APP_API_URL + 'api/v1/decrement/' +  this.state.selectedSKU;
      fetch(url);
  }
  
  render() {
      return (
        <form autoComplete="off">
          <Button onClick={this.handleOpen} style={{"display": "block"}}>
            Choose Product
          </Button>
          <FormControl style={{"minWidth": 120}}>
            <InputLabel htmlFor="demo-controlled-open-select">Product</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.selectedSKU}
              onChange={this.handleChange}
              inputProps={{
                name: 'Product',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              {
                  this.state.data.map((p) =>
                    (<MenuItem value={p.sku}>{p.name}</MenuItem>))
              }
            </Select>
            <div>
            <Button variant="contained" onClick={this.order}>
              Order
            </Button>
            </div>
          </FormControl>
        </form>
      );
    }
}