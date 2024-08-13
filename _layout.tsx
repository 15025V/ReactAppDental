import ButtonIn from "@/components/ButtonIn";
import GoogleIconButton from "@/components/GoogleIconB";
import Header from "@/components/header/Header";
import HeaderNoIcon from "@/components/header/HeaderNoIcon";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Animated, Modal, Pressable, Text, View } from "react-native";





export default function RootLayout() {
  const [isVisible, setIsVisible] = useState(false);
  return(
  <View style={styles.maincontainer}>
        <Header title={''}/>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido </Text>
          <View style={styles.contB}>
            <ButtonIn 
              Title={'Crear cuenta '} textStyle={{color: 'white'}} buttonStyle={{backgroundColor: '#308CFF'}}
              onPress={() => setIsVisible(true) }/>
            <ButtonIn 
              Title={'Iniciar sesión '} textStyle={{color: '#308CFF'}} 
              buttonStyle={{borderColor: '#308CFF', borderWidth: 1, }}
              onPress={() => navigation.navigate('Login')}/>
            <GoogleIconButton/>
          </View>
          <StatusBar style="auto" />
        </View>

        {/* Modal */}
        
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setIsVisible(!isVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>¿Eres doctor o eres paciente?</Text>
                <Text style={styles.modalText2}>Dependiendo del tipo de usuario el registro será diferente.</Text>
                <View style={styles.btnModal}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => navigation.navigate('Stepper')}>
                    <Text style={styles.textStyle}>Doctor</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setIsVisible(!isVisible)}>
                    <Text style={styles.textStyle}>Paciente</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    //</ScrollView>
  )
}
import { StyleSheet } from "react-native";
import { Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  contB: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },

  // estilos del modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '30%',
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 24,
  },
  modalText2: {
    marginBottom: 15,
  },
  btnModal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});




/*<Stack screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name="(tabs)" options={{
      headerShown:false

    }}/>
  </Stack>*/