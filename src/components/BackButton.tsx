import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import {s, vs} from 'react-native-size-matters'

const BackButton = () => {
  return (
    <View style={styles.container}>
      <Entypo name="chevron-thin-left" size={18} color="black" />
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        width: s(26),
        height: vs(26),
        borderRadius: s(13),
        backgroundColor: "grey",
        justifyContent: 'center',
        alignItems: 'center'
    }
})