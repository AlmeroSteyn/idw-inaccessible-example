import React, { Component, createRef } from 'react';

class AriaMiddleFinger extends Component {

  constructor(props){
    super(props);
    this.messageDiv = createRef();
  }

  componentDidMount() {
    setInterval(() => {
      this.messageDiv.current.innerHTML = this.messageDiv.current.innerHTML === 'pickering' ? 'heydon' : 'pickering'
    }, 1000);
  }

  render() {
    return (
      <div aria-live="assertive" aria-atomic="true" ref={this.messageDiv} style={{opacity: 0}}>
        {''}
      </div>
    );
  }
}

export default AriaMiddleFinger;
