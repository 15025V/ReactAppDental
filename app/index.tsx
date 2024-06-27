import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ButtonProps {
  Title: string;
  buttonStyle?: any; // Puedes definir un tipo más específico si es necesario
  textStyle?: any; // Puedes definir un tipo más específico si es necesario
}

const ButtonIn: React.FC<ButtonProps> = ({ Title, buttonStyle, textStyle }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleUserType = (type: string) => {
    if (type === 'Paciente') {
      navigation.navigate('PacienteScreen');
    }
    closeModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={handleCreateAccount}
      >
        <Text style={[styles.text, textStyle]}>{Title}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Eres Doctor o eres Paciente?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.modalButton]}
                onPress={() => handleUserType('Doctor')}
              >
                <Text style={styles.buttonText}>Doctor</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton]}
                onPress={() => handleUserType('Paciente')}
              >
                <Text style={styles.buttonText}>Paciente</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={closeModal} style={[styles.closeButton, styles.buttonBlue]}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    width: '80%',
    height: 49,
    margin: 10,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#308CFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '45%',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonBlue: {
    backgroundColor: '#308CFF',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

 ButtonIn;
