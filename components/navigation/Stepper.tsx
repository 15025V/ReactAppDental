import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Header from '@/components/header/Header';

export default function Stepper() {
  const buttonTextStyle = {
    activeStepIconBorderColor: '#308CFF',
    completedProgressBarColor: '#308CFF',
    completedStepIconColor: '#308CFF',
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={'Crear Cuenta'} showLogo={false} />
        <View style={styles.cont}>
          <ProgressSteps style={styles.stepContent} {...buttonTextStyle}>
            {/* Progreso 1 */}
            <ProgressStep nextBtnText="Siguiente">
              <View style={styles.context}>
                <Text style={styles.text}>Datos personales</Text>
              </View>
              <View>
                <Text style={styles.label}>Nombre</Text>
                <TextInput style={styles.input} inputMode='text' />
                <Text style={styles.label}>Apellidos</Text>
                <TextInput style={styles.input} inputMode='text' />
                <Text style={styles.label}>Genero</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Fecha de nacimiento</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Telefono</Text>
                <TextInput style={styles.input} inputMode='tel' />
                <Text style={styles.label}>Fotografia</Text>
                <TextInput style={styles.input} />
              </View>
            </ProgressStep>
            {/* Progreso 2 */}
            <ProgressStep previousBtnText="Anterior" nextBtnText="Siguiente">
              <View style={styles.stepContent}>
                <View style={styles.context}>
                  <Text style={styles.text}>Formación academica</Text>
                </View>
                <Text style={styles.label}>Licenciatura</Text>
                <TextInput style={styles.input} inputMode='text' />
                <Text style={styles.label}>Cedula profesional</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Especialidad</Text>
                <TextInput style={styles.input} inputMode='text' />
                <Text style={styles.label}>Cedula de especialidad</Text>
                <TextInput style={styles.input} inputMode='text' />
              </View>
            </ProgressStep>
            {/* Progreos 3 */}
            <ProgressStep previousBtnText="Anterior" finishBtnText="Siguiente">
              <View style={styles.stepContent}>
                <View style={styles.context}>
                  <Text style={styles.text}>Información del consultorio</Text>
                </View>
                <Text style={styles.label}>Nombre del consultorio</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Logo del consultorio</Text>
                <TextInput style={styles.input} secureTextEntry={true} />
                <Text style={styles.label}>Dirección del consultorio</Text>
                <TextInput style={styles.input} inputMode='text' />
                <Text style={styles.label}>Archivo de autorización</Text>
                <TextInput style={styles.input} />
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cont: {
    alignSelf: 'center',
    flex: 1,
    width: '80%',
    alignItems: 'center',
  },
  stepContent: {},
  context: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
  label: {
    fontSize: 16,
    marginHorizontal: 5,
    marginTop: 10,
  },
  input: {
    height: 55,
    width: '100%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
});
