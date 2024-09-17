import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <>
      <View>
        <Text style={styles.heading}>App</Text>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  heading: {
    color: 'blue',
    fontSize: 50,
  }
})