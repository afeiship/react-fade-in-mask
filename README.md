# react-fade-in-mask
> React fade in mask.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-fade-in-mask
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | bool   | false    | false   | The visible value.                    |


## usage
1. import css
  ```scss
  @import "~@jswork/react-fade-in-mask/dist/style.css";

  // or use sass
  @import "~@jswork/react-fade-in-mask/dist/style.scss";

  // customize your styles:
  $react-fade-in-mask-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactFadeInMask from '@jswork/react-fade-in-mask';
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

  ```

## documentation
- https://afeiship.github.io/react-fade-in-mask/


## license
Code released under [the MIT license](https://github.com/afeiship/react-fade-in-mask/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-fade-in-mask
[version-url]: https://npmjs.org/package/@jswork/react-fade-in-mask

[license-image]: https://img.shields.io/npm/l/@jswork/react-fade-in-mask
[license-url]: https://github.com/afeiship/react-fade-in-mask/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-fade-in-mask
[size-url]: https://github.com/afeiship/react-fade-in-mask/blob/master/dist/react-fade-in-mask.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-fade-in-mask
[download-url]: https://www.npmjs.com/package/@jswork/react-fade-in-mask
