import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryCard = ({category}) => {
  return (
    <View style={[styles.card,{backgroundColor:category.background}]}>
      <Text>{category.name}</Text>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    card:{
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:5,
        marginRight:18
    }
})