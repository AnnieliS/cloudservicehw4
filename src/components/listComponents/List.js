import React, {Component} from 'react'
import ListItem from './ListItem'
import PropTypes from 'prop-types'

export class List extends Component {

  
    editListItem(id){
        this.props.update(id);
    }
    
    render() {
        return (
            <ul style={listStyle}>
                {
                this.props.list.map((listItem) => (
                <li key={listItem.id}> <ListItem listItem = {listItem} delLi = {this.props.delLi} /> </li>
                     ))
                 }
            </ul>
        )
    }
}


List.propTypes ={
    list: PropTypes.array.isRequired
}

const listStyle = {
    position: 'absolute',
    marginLeft: '65.625vw',
    marginTop: '30.22vh',
    backgroundColor: 'rgba(23, 25, 50, 0.8)',    
    boxShadow: '0px 4px 14px rgba(23, 25, 50, 0.5)',
    borderRadius: '10px',
    width: '22.625vw',
    height: '42vh',
    overflowY: 'scroll'

}





export default List