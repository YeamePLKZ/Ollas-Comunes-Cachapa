import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import supabase from '../lib/supabase';
import CustomButton from '../components/CustomButton';

export default function RegistroScreen() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    const { data: { user }, error } = await supabase.auth.signUp({
      email: correo,
      password: contrasena,
      options: {
        data: {
          full_name: nombre,
        }
      }
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else if (user) {
      Alert.alert('Success', 'Revisa tu correo para verificar tu cuenta.');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />
      <CustomButton
        title={loading ? 'Registrando...' : 'Registrarse'}
        onPress={handleRegister}
        disabled={loading}
      />
      <Link href="/login" style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, justifyContent: 'center', textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 8 },
  link: { color: '#3F51B5', marginTop: 10, textAlign: 'center' },
});