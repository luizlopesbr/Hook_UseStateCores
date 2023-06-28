import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react'

export default function App() {

const [cor,setCor] = useState('black')

const mudarCorTexto = () => {
  cor == 'black' ? setCor('white') : setCor('black')
}


  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <View style={styles.container1}>
        <Text style={{ color: cor, fontSize: 26}}>Container1 </Text>
        <Button 
          onPress={mudarCorTexto}
          title="Mudar cor"
        ></Button>
      </View>

      <View style={styles.container2}>
      <Text>Container2</Text>
      </View>



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
  container1:{
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center'
  },
  textCont1:{
    fontSize: 26
  },
  container2:{
    flex: 2,
    backgroundColor: 'darkorange',
    width: '100%',
    justifyContent: 'center'
  }
});
