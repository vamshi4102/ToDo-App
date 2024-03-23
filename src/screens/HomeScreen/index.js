import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ImageSlider from '../../components/ImageSlider';
import TopBar from '../../components/TopBar';
import {CategoryData} from '../../assets/Data/CategoryData';
import CategoryCard from '../../components/CategoryCard';
import {ToDoData} from '../../assets/Data/ToDoList';
import TodoItem from '../../components/TodoItem';
import AddCategory from '../../components/addCategory';
import SelectCategory from '../../components/SelectCategory';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // category related
  const [CategoryName, setCategoryName] = useState('');
  const [CategoryColor, setCategoryColor] = useState(null);
  const [CategoryList, setCategoryList] = useState([]);
  //todo list
  const [TodoName, setTodoName] = useState('');
  const [TodoBackground, setTodoBackground] = useState('');
  const [TodoCategoryName, setTodoCategoryName] = useState('');
  const [TodoList, setTodoList] = useState([]);
  const [ShowSelectCategory, setShowSelectCategory] = useState(false);
  const SubmitCategory = (name, color) => {
    let NewCategory = {name: name, background: color};
    setCategoryList(CategoryList.concat(NewCategory));
    setCategoryName('');
    setCategoryColor(null);
    setModalVisible(false);
  };

  const OnEnterTodo = todo => {
    setTodoName(todo);
    if (todo.length > 2) {
      setShowSelectCategory(true);
    } else {
      setShowSelectCategory(false);
    }
  };

  const AddTodoNow = () => {
    let NewTodo = {
      name: TodoName,
      CategoryBackground: TodoBackground,
      category: TodoCategoryName,
    };
    setTodoList(TodoList.concat(NewTodo));
    setTodoName('');
    setTodoBackground(null);
    setTodoCategoryName('');
    setShowSelectCategory(false);
  };
  return (
    <>
      <AddCategory
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        CategoryName={CategoryName}
        setCategoryName={setCategoryName}
        CategoryColor={CategoryColor}
        setCategoryColor={setCategoryColor}
        SubmitCategory={SubmitCategory}
      />
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
            <TouchableOpacity
              style={styles.categories_add}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.categories_add_text}>Add</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={CategoryList}
            renderItem={({item}) => <CategoryCard category={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
      {/* todo list */}
      <View style={styles.bottom_body}>
        <Text style={styles.todo_list}>To do list</Text>
        <TextInput
          placeholder="Enter Todo"
          style={styles.enter_todo}
          onChangeText={text => OnEnterTodo(text)}
          defaultValue={TodoName}
        />

        {ShowSelectCategory && (
          <View>
            <FlatList
              data={CategoryList}
              renderItem={({item}) => (
                <SelectCategory
                  TodoBackground={TodoBackground}
                  setTodoBackground={setTodoBackground}
                  category={item}
                  TodoCategoryName={TodoCategoryName}
                  setTodoCategoryName={setTodoCategoryName}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <TouchableOpacity onPress={AddTodoNow} style={styles.add_todo}>
              <Text style={styles.add_todo_text}>Add TODO</Text>
            </TouchableOpacity>
          </View>
        )}

        <FlatList
          data={TodoList}
          renderItem={({item}) => <TodoItem todo={item} />}
        />
      </View>
    </>
  );
};

export default HomeScreen;
