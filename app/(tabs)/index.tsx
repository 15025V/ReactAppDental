import HeaderNoIcon from '@/components/header/HeaderNoIcon';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderNoIcon />
      <View style={styles.content}>
        <Text style={styles.text}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
   
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff', // Color de fondo blanco
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000000', // Color negro
    marginTop: 20,
  },
});
