import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineCheck } from 'react-icons/ai';

class HelpfulAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0 || this.props.helpful,
      disabled: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    event.preventDefault();
    if (this.state.disabled) {
      return;
    }
    this.setState({
      disabled: true,
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <>
        <button className="helpful-button" onClick={this.handleClick}>| Helpful? <span className="helpful-button-yes">{this.state.disabled ? <AiOutlineCheck /> : 'Yes'} ({this.state.count})</span></button>
      </>
    )
  }
}

export default HelpfulAnswer;