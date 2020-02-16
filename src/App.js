import React, {Component} from 'react';
import './App.scss';
import List from './components/listComponents/List';
import CenterImage from './components/CenterImage';
import Axios from 'axios';
import AddListItem from './components/listComponents/AddListItem';
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {
  state = {
    list: [],
}

componentDidMount () {
  
Axios.get('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts')
.then(res => this.setState({list : res.data}))
}

delLi = (id) => {
Axios.delete(`https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res => this.setState({list: [...this.state.list.filter(ListItem => ListItem.id !== id)]}))
}

addListItem = (title, body) => {
  
  Axios.post('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts', {
    title,
    body
  })
.then(res => this.setState({list : [...this.state.list, res.data]}))
}

updateListItem = (id, title, body) => {

  Axios.put(`https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts/${id}` , {
    title,
    body
  })
  .then(res => this.setState(prevState => ({
    list: prevState.list.map(
      listItem => listItem.id !== res.data.id ? listItem : res.data
    )
  })
  ))
}


  render() {
    return (
      <div>
        <span className = "backgroundImage"></span>
        <AddListItem addListItem = {this.addListItem} />
        <CenterImage />
        <List list={this.state.list} delLi = {this.delLi} updateListItem = {this.updateListItem}/>
      </div>
    )
  }
}

export default App
