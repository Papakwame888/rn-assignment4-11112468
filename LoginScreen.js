import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.smallTitle}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orContinueWith}>Or continue with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.icon}>
          <Image source={require('./assets/apple.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={require('./assets/google.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={require('./assets/facebook.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        Haven't an account? <Text style={styles.register}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    color: '#1A1A1A',
  },
  smallTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#6B6B6B',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#3366CC',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContinueWith: {
    marginVertical: 20,
    color: '#6B6B6B',
  },
  socialIcons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  registerText: {
    color: '#6B6B6B',
  },
  register: {
    color: '#3366CC',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
