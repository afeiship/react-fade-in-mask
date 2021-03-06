import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFadeInMask from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      value: false
    };
  }

  handleMouseEnter = (e) => {
    this.setState({ value: true });
  };

  handleMouseLeave = (e) => {
    this.setState({ value: false });
  };

  render() {
    const { value } = this.state;
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-fade-in-mask">
        <div
          className="is-box-item"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <img src="https://my.ishadowx.biz/img/portfolio/05-small.jpg" />
          <ReactFadeInMask value={value}>
            CONTENT FOR FADE_IN MASK!
          </ReactFadeInMask>
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
