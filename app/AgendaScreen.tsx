import HeaderNoIcon from '@/components/header/HeaderNoIcon';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const { width, height } = Dimensions.get('window');

export default function AgendaScreen() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDay(day.dateString);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}> 
        <HeaderNoIcon />
        <Text style={styles.text}>Citas</Text>
        <Calendar
          // Configuración del calendario
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDay]: { selected: true, marked: true, selectedColor: 'blue' },
          }}
          theme={{
            calendarBackground: 'transparent', // Fondo transparente
            textSectionTitleColor: '#000000', // Color de los títulos de las secciones
            dayTextColor: '#000000', // Color de los números de los días
            todayTextColor: '#0000ff', // Color del texto del día actual
            selectedDayTextColor: '#ffffff', // Color del texto del día seleccionado
            selectedDayBackgroundColor: '#0000ff', // Color de fondo del día seleccionado
          }}
          style={styles.calendar}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Horarios disponibles</Text>
          <Text style={styles.subTitle}>Mañana</Text>
          {['9:00 am', '10:00 am', '11:00 am'].map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeSlot,
                selectedTime === time && styles.selectedTimeSlot,
              ]}
              onPress={() => handleTimeSelect(time)}
            >
              <Text>{time}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.subTitle}>Tarde</Text>
          {['1:00 pm', '2:00 pm', '5:00 pm'].map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeSlot,
                selectedTime === time && styles.selectedTimeSlot,
              ]}
              onPress={() => handleTimeSelect(time)}
            >
              <Text>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Solicitar cita</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: 255,
    zIndex: -1,
    marginTop:'auto',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
  },
  text: {
    fontSize: 24,
    color: '#000000',
    marginTop: 20,
    textAlign: 'center',
  },
  calendar: {
    marginTop: 25,
    zIndex: 1,
    width: width * 0.9, // Ajusta el ancho del calendario
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  timeSlot: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  selectedTimeSlot: {
    backgroundColor: '#4caf50', // Color de fondo para el horario seleccionado
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
