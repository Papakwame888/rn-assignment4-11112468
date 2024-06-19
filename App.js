import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './LoginScreen'; 
import HomeScreen from './HomeScreen.js';    

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (name, email) => {
    setUser({ name, email });
  };

  return (
    <View style={styles.container}>
      {user ? (
        <HomeScreen user={user} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
