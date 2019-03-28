import React, { Component } from 'react';
import styles from './ColorDetail.module.css';

class ColorDetail extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {this.props.details.title}
                </h1>
                <div className={styles.card}>
                    <span className={styles.subtitle}>
                        Meaning
                    </span>
                    <span className={styles.content}>
                        {this.props.details.meaning}
                    </span>
                </div>
                <div className={styles.card}>
                    <span className={styles.subtitle}>
                        Tags
                    </span>
                </div>
            </div>
        )
    }
}

export default ColorDetail;