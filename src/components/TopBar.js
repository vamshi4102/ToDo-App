import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TopBar = () => {
  return (
    <View style={styles.top_bar}>
      <View style={styles.greet_conatiner}>
        <Text style={styles.greet}>Hello</Text>
        <Text style={styles.name}>Vamshi krishna</Text>
      </View>
      <View style={styles.profile}>
        <Image
          source={{
            uri: 'https://media.creativemornings.com/uploads/user/avatar/120448/profile-circle.png',
          }}
          style={styles.profile_image}
        />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  //   top_bar
  top_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greet_conatiner: {},
  greet: {
    color: '#f3f3f3',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  profile: {},
  profile_image: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
});
