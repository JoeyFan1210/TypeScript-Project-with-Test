import Todo from 'DUCKS/todos/Todo';
import { List, Record } from 'immutable';
import React, { Component } from 'react';
import Todos from './Todos';

interface AsyncViewProps {
  error: boolean;
  requested: boolean;
  todos: List<Record<Todo>>;
  fetchTodos(): void;
}

export default class AsyncView extends Component<AsyncViewProps> {
  public componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }
  public render() {
    const { error, requested, todos } = this.props;
    if (requested) {
      return <div>Requested</div>;
    } else if (error) {
      return <div>Error</div>;
    } else if (todos.size === 0) {
      return <div>No Todos</div>;
    }
    return (
      <div>
        <h2>Async</h2>
        <Todos todos={todos.toJS()} />
      </div>
    );
  }
}
