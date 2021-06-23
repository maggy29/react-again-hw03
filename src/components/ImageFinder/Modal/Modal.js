import React, {Component} from 'react';

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    
    handleKeyDown = (e) => {
        if(e.code==='Escape') {
            this.props.onClose();
        } 
        return;
    }
     
    render(){

    return (<div className="Overlay">
  <div className="Modal">
    <img src={this.props.large} alt="" />
  </div>
</div>)}}