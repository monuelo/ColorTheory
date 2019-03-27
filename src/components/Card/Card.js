import React, { Component } from 'react';
import styles from './Card.module.css';

class Card extends Component {
    render() {
        return (
            <div className={styles.card}/>
        )
    }
}

export default Card;