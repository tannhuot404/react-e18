import { StyleSheet, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import HomeStackParamList from '../navigation/HomeStackParamList'

type DetailProps = NativeStackScreenProps<HomeStackParamList, "Detail">;

const DetailScreen = ({route, navigation}: DetailProps) => {
  return (
    <SafeAreaView>
      <Text>DetailScreen ID: {route.params.id}</Text>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})