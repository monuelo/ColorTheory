import React, { Component } from 'react';
import styles from './Color.module.css';

class Color extends Component {

    render() {
        const backgroundStyle = {
            backgroundColor: this.props.color.rgb
        }

        return (<div style={backgroundStyle}>
            <h1 className={styles.title}>{this.props.color.title}</h1>
        </div>)
    }
}

export default Color;