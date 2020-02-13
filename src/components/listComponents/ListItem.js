import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FaPen , FaTrash, FaSave} from 'react-icons/fa'

export class ListItem extends Component {
    constructor(props){
    super(props);
    this.state = {
        edit: false
    }
    this.edit = this.edit.bind(this);

}


    edit() {
        //this.props.editListItem(this.id).bind(this.id);
        this.setState({edit: true})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editListItem(this.state.id, this.state.title , this.state.body);
        this.setState ({edit: false}) ;
    }

    renderEdit() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input
                    type="text"
                    ref={input=> this.itemEdit.title = input}
                    style = {titleStyle} />

                    <input
                    type = "textarea"
                    ref={input=> this.itemEdit.body = input}
                    style = {bodyStyle} />

                    <button
                    type = "submit"
                    style = {submitStyle}>
                        <FaSave style = {saveStyle} />
                        </button>
                </form>
            </div>
        )
    }

    

    renderUI(id, title, body) {
        
        return(
            
                <div style = {itemStyle}>
                    <span>{title}</span>
                    <FaTrash className="delete" style = {delStyle} onClick={this.props.delLi.bind(this, id)} />
                    <FaPen className="edit" style = {editStyle} onClick= {this.edit}/>


                            {/* Hover Styling only.
                            Don't want to use more states just for that. */}
                            <style>
                                {`
                                .delete:hover{
                                    opacity: 0.7;
                                }
                                .edit:hover{
                                    opacity: 0.7;
                                }
                                `}
                            </style>        

                </div>
        )
    }
    
    render() {
        const {id, title, body} = this.props.listItem;
        return this.state.edit ? this.renderEdit() : this.renderUI(id, title, body);
    }
}


ListItem.propTypes ={
    listItem: PropTypes.object.isRequired

}

const itemStyle ={
    position: 'relative',
    height: '62px',
    width: '100%',
    color: '#fff',
    fontHeight: '26px',
    paddingLeft: '16px',
    paddingTop: '19px',
    borderBottom: '1px #fff solid'
}



const delStyle = {
    float: 'right',
    marginRight: '17px',
    color: '#FD5842'
    
}


const editStyle = {
    float: 'right',
    marginRight: '16px'
}


const titleStyle = {
    position: 'relative',
    marginLeft: '05.198776758%',
    marginTop: '04.761904761%',
    width: '20.4375vw',
    height: '05.33vh',
    background: '#FFF',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',

}

const bodyStyle = {
    position: 'relative',
    marginLeft: '05.198776758%',
    marginTop: '04.761904761%',
    width: '20.4375vw',
    height: '30.55vh',
    background: '#FFF',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
}

const submitStyle = {
    border: '0',
    padding: '0',
    backgroundColor: '#FD584200',
    position: 'relative',
    marginLeft: '42.54%',
    marginTop: '-2.857%'

    
}

const saveStyle = {
    height: '54px',
    width: '54px',
    color: '#FD5842'
}

export default ListItem
