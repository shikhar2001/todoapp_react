import React,{ Component } from 'react';
import './box.css';
import List from './Listitems';
class main extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[],
            currentItem:{
                data:'',
                key:''
            }
        }
        this.handleAddSubmit=this.handleAddSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.updateItem=this.updateItem.bind(this);
    }
    handleInputChange(event)
    {
        this.setState({
            currentItem:{
                data:event.target.value,
                key:new Date()
            }
        })
    }
    handleAddSubmit(event){
        event.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.data!=="")
        {
            const newarr=[...this.state.arr,newItem]
        this.setState({
            arr: newarr,
            currentItem:{
                data:'',
                key:''
            }
        })
    }
    }
    deleteItem(key){
        const remaining=this.state.arr.filter( x =>
            x.key!==key);
        this.setState({
            arr:remaining
        })
    }

    updateItem(data,key){
        const arr = this.state.arr;
        arr.map(item => {
            if(item.key===key){
                item.data=data;
            }
        })
        this.setState({
            arr:arr
        })
    }
    render(){
        return(
            <div id="box">
                <form onSubmit={this.handleAddSubmit} id="form">
                    <input type="text" value={this.state.currentItem.data} onChange={this.handleInputChange}/>
                    <button type="submit" className="btn">Add</button>
                </form>
                <div>
                    <List items={this.state.arr} deleteItem={this.deleteItem} updateItem={this.updateItem} />
                </div>
            </div>
        )
    }
}

export default main ;
