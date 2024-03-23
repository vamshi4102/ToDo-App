import {View, Text, ImageBackground, Image, TouchableOpacity, FlatList, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import ImageSlider from '../../components/ImageSlider';
import TopBar from '../../components/TopBar';
import { CategoryData } from '../../assets/Data/CategoryData';
import CategoryCard from '../../components/CategoryCard';
import { ToDoData } from '../../assets/Data/ToDoList';
import TodoItem from '../../components/TodoItem';

const HomeScreen = () => {
  return (
    <>
      {/* top background */}
      <ImageBackground
        source={{
          uri: 'https://static.vecteezy.com/system/resources/thumbnails/022/010/648/small_2x/black-background-modern-dark-abstract-texture-vector.jpg',
        }}
        style={styles.top_section}>
        <View style={styles.top_body}>
          {/* topbar */}
          <TopBar />
        </View>
      {/* image slider */}
      <ImageSlider />
      {/* caterogy list */}
      <View style={styles.categories}>
        <View style={styles.categories_row}>
            <Text style={styles.categories_heding}>Categories</Text>
            <TouchableOpacity style={styles.categories_add}>
                <Text style={styles.categories_add_text}>Add</Text>
            </TouchableOpacity>
        </View>
        <FlatList 
        data={CategoryData}
        renderItem={({item})=>(<CategoryCard category={item} />)}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
      </View>
      </ImageBackground>
      {/* todo list */}
      <View style={styles.bottom_body}>
        <Text style={styles.todo_list}>To do list</Text>
        <FlatList
        data={ToDoData}
        ListHeaderComponent={()=>(
            <View style={styles.add_todo}>
                <TextInput
                placeholder='Enter Todo' 
                style={styles.enter_todo}
                />
            </View>
        )}
        renderItem={({item})=>(<TodoItem todo={item} />)}
        />
      </View>
    </>
  );
};

export default HomeScreen;
