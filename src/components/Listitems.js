import React, { Component } from 'react';
import './listitems.css'

class list extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const listItems = this.props.items.map(item => 
            {
              return (
                  <div className="list" key={item.key}>
                      <p>
                          <input className="ert" type="text" id={item.key} value={item.data} onChange={(event)=>this.props.updateItem(event.target.value,item.key)} />
                           <span><i className="fa fa-trash del" aria-hidden="true" onClick={()=>this.props.deleteItem(item.key)}></i></span>
                      </p>
                  </div>
              )  
            })
        return(
            <React.Fragment>
                {listItems}
            </React.Fragment>
        )
    }
}
export default list;