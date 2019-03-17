import React, { Component } from 'react';
import styles from './Color.module.css';
import classNames from 'classnames';
import ColorDetail from '../ColorDetail/ColorDetail';

class Color extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    getClassNames = () => this.state.expanded ? [styles.color, styles.expanded] : [styles.color];

    toogleState = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    }

    render() {
        const backgroundStyle = {
            backgroundColor: this.props.color.rgb
        }

        return (
            <div className={classNames(this.getClassNames())} style={backgroundStyle} onClick={this.toogleState}>
                <h1 className={styles.title}>
                    {this.props.color.title}
                </h1>
                {this.state.expanded && <ColorDetail details={this.props.color.details} />}
            </div>
        )
    }
}

export default Color;