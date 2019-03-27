import React, { Component } from 'react';
import styles from './ColorDetail.module.css';
import Card from '../Card/Card';

class ColorDetail extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {this.props.details.title}
                </h1>
                <div className={styles.card}>
                    Meaning
                </div>

                <div className={styles.card}>
                    Info
                </div>
            </div>
        )
    }
}

export default ColorDetail;