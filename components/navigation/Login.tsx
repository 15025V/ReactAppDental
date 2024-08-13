import React from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '@/components/header/Header';
import { Dimensions } from 'react-native';
import ButtonIn from '@/components/ButtonIn';
import GoogleIconButton from '@/components/GoogleIconB';

const { width } = Dimensions.get('window');

const Login: React.FC = () => {
    return (
        <ScrollView>
            <View>
                <Header title={''}/>
                <View style={styles.container}>
                    <Text style={styles.title}>Bienvenido de nuevo</Text>
                </View>
                <View style={styles.formC}>
                    <View style={styles.form}>
                        <Text style={styles.textI}>Usuario</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.textI}>Contraseña</Text>
                        <TextInput style={styles.input}/>
                        <TouchableOpacity style={styles.link}>
                            <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>
                    </View>
                    <ButtonIn
                        Title={'Iniciar sesión '}
                        textStyle={{ color: '#308CFF' }}
                        buttonStyle={{ borderColor: '#308CFF', borderWidth: 1, marginTop: 30 }}
                        onPress={() => {}}
                    />
                    <View style={styles.cuent}>
                        <Text>¿Cuentas con una cuenta?</Text>
                        <TouchableOpacity>
                            <Text style={styles.linkR}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.aviso}>
                            <Text style={styles.linkR}>Aviso de privacidad</Text>
                        </TouchableOpacity>
                    </View>
                    <GoogleIconButton/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15%',
    },
    title: {
        fontSize: 24,
        marginBottom: 40,
    },
    formC: {
        alignItems: 'center',
    },
    form: {
        width: '80%',
        marginTop: 15,
    },
    textI: {
        fontSize: 18,
    },
    input: {
        height: 55,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#F7F7F7',
    },
    link: {
        marginTop: 20,
        alignSelf: 'flex-end',
    },
    linkText: {
        fontSize: 12,
        textDecorationLine: 'none',
    },
    cuent: {
        justifyContent: 'space-between',
        width: '65%',
        flexDirection: 'row',
        marginTop: 10,
        fontSize: 14,
    },
    linkR: {
        textDecorationLine: 'underline',
    },
    aviso: {
        marginTop: 10,
    },
});

export default Login;
