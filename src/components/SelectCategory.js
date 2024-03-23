import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SelectCategory = ({
  category,
  TodoBackground,
  setTodoBackground,
  setTodoCategoryName,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: category.background,
          borderColor:
            category.background == TodoBackground ? 'black' : 'transparent',
        },
      ]}
      onPress={() => {
        setTodoBackground(category.background),
          setTodoCategoryName(category.name);
      }}>
      <Text>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default SelectCategory;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 18,
    height: 40,
    borderWidth: 2,
  },
});
