import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  top_section: {
    width: '100%',
    // height: '70%',
    resizeMode: 'stretch',
    backgroundColor: 'red',
    paddingBottom: 50,
  },
  top_body: {
    width: '90%',
    paddingVertical: 25,
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 50,
  },
  // categories-------------
  categories: {
    // backgroundColor:'red',
    width: '90%',
    marginVertical: 25,
    alignSelf: 'center',
  },
  categories_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categories_heding: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  categories_add: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  categories_add_text: {
    color: 'white',
  },
  bottom_body: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  todo_list: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  add_todo: {},
  enter_todo: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  add_todo: {
    backgroundColor: 'black',
    width: 100,
    height: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  add_todo_text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
