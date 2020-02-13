import React, {Component} from 'react';
import './App.scss';
import List from './components/listComponents/List';
import CenterImage from './components/CenterImage';
import Axios from 'axios';
import AddListItem from './components/listComponents/AddListItem';


export class App extends Component {
  state = {
    list: [],
}

componentDidMount () {
Axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res => this.setState({list : res.data}))
}

delLi = (id) => {
Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res => this.setState({list: [...this.state.list.filter(ListItem => ListItem.id !== id)]}))
}

addListItem = (title, body) => {
  Axios.post('https://jsonplaceholder.typicode.com/posts', {
    title,
    body
  })
.then(res => this.setState({list : [...this.state.list, res.data]}))
}

update(itemEdit, i){
  console.log(`Update ${i}: ${itemEdit}`);

  this.setState( prevState => ({
      list: prevState.list.map(
          item => item.id !== i ? item : {...item, item: itemEdit}
      )
  }))
}


  render() {
    return (
      <div>
        <span className = "backgroundImage"></span>
        <AddListItem addListItem = {this.addListItem} onEdit = {this.editListItem}/>
        <CenterImage />
        <List list={this.state.list} delLi = {this.delLi} />
      </div>
    )
  }
}

export default App
