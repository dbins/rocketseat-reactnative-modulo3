import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import * as TodoActions from './store/actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoContainter: {
    flexDirection: 'row',
  },
});

// Nao precisa de return para stateless component
const TodoList = ({ todos, addTodo, removeTodo }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <View key={todo.id} style={styles.todoContainer}>
        <Text>{todo.text}</Text>
        <TouchableOpacity
          onPress={() => {
            removeTodo(todo.id);
          }}
        >
          <Text> Excluir </Text>
        </TouchableOpacity>
      </View>
    ))}

    <TouchableOpacity onPress={() => addTodo('Fazer café novamente')}>
      <Text>Adicionar Todo</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

// Vem do Redux
// Informacoes do Redux enviadas para o componente atraves de props
const mapStateToProps = state => ({
  todos: state.todos,
});

// Vem do Redux
// Informacoes das actions enviadas para o componente atraves de props
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
