import React, {Component} from 'react';
import style from './Modal.module.css';

export default  class Modal extends Component {
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

    render () {
        return (
            <div className={style.Backdrop}>
                <div className={style.Modal}>{this.props.children}</div>
            </div>
        )
    }
} 