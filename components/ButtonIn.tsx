import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  Title: string;
  buttonStyle?: any; // Puedes definir un tipo más específico si es necesario
  textStyle?: any; // Puedes definir un tipo más específico si es necesario
}

const ButtonIn: React.FC<ButtonProps> = ({ Title, buttonStyle, textStyle }) => {
  // Determinar los estilos basados en el título del botón
  const getButtonStyle = () => {
    if (Title === 'Botón Azul') {
      return [styles.button, styles.buttonBlue, buttonStyle];
    } else if (Title === 'Botón Blanco') {
      return [styles.button, styles.buttonWhite, buttonStyle];
    } else {
      return [styles.button, buttonStyle]; // Estilo por defecto
    }
  };

  const getTextStyle = () => {
    if (Title === 'Botón Azul') {
      return [styles.text, styles.textWhite, textStyle];
    } else if (Title === 'Botón Blanco') {
      return [styles.text, styles.textBlue, textStyle];
    } else {
      return [styles.text, textStyle]; // Estilo por defecto
    }
  };

  return (
    <TouchableOpacity style={getButtonStyle()}>
      <Text style={getTextStyle()}>{Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  textWhite: {
    color: 'white',
  },
  textBlue: {
    color: 'blue',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    width: '80%',
    height: 49,
    margin: 10,
  },
  buttonBlue: {
    backgroundColor: '#308CFF', // Color de fondo para el botón azul
  },
  buttonWhite: {
    backgroundColor: '#FFFFFF', // Color de fondo para el botón blanco
  },
});

export default ButtonIn;
