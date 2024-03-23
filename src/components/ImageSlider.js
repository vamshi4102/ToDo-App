import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
const DeviceWidth = Dimensions.get('window').width;
const ImageSlider = () => {
  const MotivationalImages = [
    'https://img.freepik.com/free-photo/motivational-text-yellow-background_23-2148689414.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkXuwG-l-zQNG-sIipx--T6LmmLF9FlhKaT3BHQgC-g&s',
    'https://wishingimage.com/wp-content/uploads/2022/12/wishingimage.com_-1030x438.jpg',
    'https://t3.ftcdn.net/jpg/06/59/62/10/360_F_659621096_cheN3UFIxDo7Mnh91lTteanCZe0rsjmm.jpg',
  ];
  return (
    <View style={styles.container}>
      <SliderBox
        images={MotivationalImages}
        sliderBoxHeight={150}
        dotColor="#fff"
        inactiveDotColor="#ccc"
        ImageComponentStyle={styles.images}
        parentWidth={DeviceWidth*0.9}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
      />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:150,
        marginLeft:DeviceWidth*0.05,
        alignItems:'center',
        borderRadius:20
        
    },
    images:{
        borderRadius:15
    }
});
