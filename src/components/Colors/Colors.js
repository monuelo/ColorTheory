import React, { Component } from 'react';
import Color from '../Color/Color';
import ColorsData from '../../data/colors';
import styles from './Colors.module.css';

class Colors extends Component {
  render() {
    return (
      <div className={styles.colors}>
        {Object.values(ColorsData)
          .map((color, index) => <Color key={index} color={color} />)}
      </div>
    );
  }
}

export default Colors;