
import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

const GoogleIconButton = () => {
  return (
    <TouchableOpacity style={styles.iconButton}>
      <Image source={require('../assets/images/icon-google.png')}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    marginTop: 20,
  },
});

export default GoogleIconButton;
