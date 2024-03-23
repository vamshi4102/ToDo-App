import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TodoItem = ({todo}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.todo}>{todo.name}</Text>
      <View
        style={[styles.category, {backgroundColor: todo.CategoryBackground}]}>
        <Text style={styles.category_text}>{todo.name}</Text>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    // backgroundColor:'red',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBlockColor: '#f3f3f3',
  },
  todo: {
    fontWeight: '600',
  },
  category: {
    marginTop: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 18,
    width: 100,
    height: 30,
    overflow: 'hidden',
  },
  category_text: {
    marginTop: 7,
  },
});
