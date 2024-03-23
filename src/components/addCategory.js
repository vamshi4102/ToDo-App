import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {CategoryColors} from '../assets/Data/CategoryColors';

const AddCategory = props => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(!props.modalVisible);
        }}>
        <TouchableOpacity
          onPress={() => props.setModalVisible(false)}
          style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.heading}>Add Category</Text>
            <TextInput
              placeholder="Enter category name"
              style={styles.category_input}
              onChangeText={text => props.setCategoryName(text)}
              defaultValue={props.CategoryName}
            />
            <FlatList
              data={CategoryColors}
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.color_box,
                    {
                      backgroundColor: item.color,
                      borderColor:
                        props.CategoryColor == item.color
                          ? 'black'
                          : 'transparent',
                    },
                  ]}
                  onPress={() => {
                    props.setCategoryColor(item.color);
                  }}
                />
              )}
              ListFooterComponent={() => (
                <TouchableOpacity
                  style={styles.submit}
                  onPress={() =>
                    props.SubmitCategory(props.CategoryName, props.CategoryColor)
                  }>
                  <Text style={styles.submit_text}>Add Now</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems:'flex-end'
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    minHeight: '50%',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  category_input: {
    width: '100%',
    height: 45,
    backgroundColor: '#f3f3f3',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  color_box: {
    width: 40,
    height: 40,
    borderRadius: 2,
    marginRight: 5,
    borderWidth: 2,
    borderColor: 'red',
  },
  submit: {
    width: 100,
    height: 40,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    marginLeft: 17,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 2,
  },
  submit_text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
