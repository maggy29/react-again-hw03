import React, {Component} from 'react';
import Tasks from './components/Tasks'; 
import Modal from './components/Modal';
import Clock from './components/Clock';
import Tabs from './components/Tabs';
import tabs from './tabs.json';
import Alert from './components/Alert';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyComponent from './components/BuggyComponents';
import RepetaNews from './components/RepetaNews';
import ImageFinder from './components/ImageFinder';
import './App.css';

class App extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(state=>({showModal: !state.showModal}))
  };

  render(){

    const {showModal} = this.state;
  return (
    <ErrorBoundary>
      <ImageFinder />
      <RepetaNews />
    <Tasks />
    <div>
          <button type="button" onClick={this.toggleModal}>
            {showModal ? 'Hide' : 'Show'} Modal
          </button>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <h2>Modal title</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                aliquam, similique asperiores voluptates eos expedita modi
                pariatur ipsa necessitatibus fuga harum! Animi, facilis
                reiciendis nesciunt alias quo unde tempora. Natus eum delectus
                porro placeat, praesentium, harum maiores sunt explicabo quidem,
                excepturi nam repellendus officiis distinctio minima enim magnam
                et accusamus.
              </p>
              <button type="button" onClick={this.toggleModal}>
                Close modal
              </button>
            </Modal>
          )}
        </div>
         <div>
          <button type="button" onClick={this.toggleModal}>
            {showModal ? 'Hide' : 'Show'} Clock
          </button>
          {showModal && <Clock />}
        </div>
        <Tabs items={tabs} />
        <Alert />
        <BuggyComponent />
    </ErrorBoundary>
  )
}
}

export default App;
