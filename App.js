import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

// -- animacao
import paraquedas from './src/json/paraquedasCaixa.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Teste de animação com lottie</Text>
      <View style={styles.viewAnimacao}>
        <LottieView resizeMode="contain" source={paraquedas} autoPlay loop />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAnimacao: {
    width: 400,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
