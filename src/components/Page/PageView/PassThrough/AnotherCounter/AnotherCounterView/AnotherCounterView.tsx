import React, { Component } from 'react';
import styles from './styles.less';

interface AnotherCounterProps {
  counter: number;
  passed: string;
  decrement(): void;
  increment(): void;
}

export default class AnotherCounter extends Component<AnotherCounterProps> {
  public render() {
    const { counter, decrement, increment, passed } = this.props;
    return (
      <div>
        <h2>Passed Into</h2>
        <div>{passed}</div>
        <div>{counter.toString()}</div>
        <button id={styles.increment} onClick={increment}>
          +
        </button>
        <button id={styles.decrement} onClick={decrement}>
          -
        </button>
      </div>
    );
  }
}
