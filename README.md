# react-fade-in-mask
> React fade in mask.

## install
```shell
npm install -S afeiship/react-fade-in-mask
```

## usage
1. import css
  ```scss
  @import "~react-fade-in-mask/style.scss";

  // customize your styles:
  $react-fade-in-mask-options: ()
  ```
2. import js
  ```js
  import ReactFadeInMask from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    constructor(inProps) {
      super(inProps);
      this.state = {
        value: false
      };
    }

    componentDidMount() {}

    _onMouseEnter = (e) => {
      this.setState({ value: true });
    };

    _onMouseLeave = (e) => {
      this.setState({ value: false });
    };

    render() {
      const { value } = this.state;
      return (
        <div className="app-container">
          <div
            className="box"
            onMouseEnter={this._onMouseEnter}
            onMouseLeave={this._onMouseLeave}>
            <img
              src="http://avatar.chsword.net/avatar/1"
              style={{ width: '100%', height: '100%' }}
            />
            <ReactFadeInMask value={value}>
              CONTENT FOR FADE_IN MASK!
            </ReactFadeInMask>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-fade-in-mask/

## resouces
- https://free.ishadowx.biz/
