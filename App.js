import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
        

      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#E8F8F7',
    flex : 1
  },

  containerTop : {
    backgroundColor : 'green',
    flex : 1
  },

  top : {
    marginHorizontal: 20,
    marginTop : 25,
    paddingHorizontal : 10,
    paddingVertical : 10,
    backgroundColor : '#FAF3FA',
    borderWidth : 3,
    borderColor : 'red'
  },
  
  topText: {
    fontSize : 20,
    color : '#3390FF'
  },

  containerCenter : {
    backgroundColor : 'red',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  
  center : {
    width : 150,
    height : 150,
    backgroundColor : '#FAF3FA',
    borderRadius : 100,     //Bo tròn background
    justifyContent : 'center',  //Canh giữa chiều dọc
    alignItems : 'center'   //Canh giữa chiều ngang
  },
  
  centerText: {
    fontSize : 20,
    color : '#3390FF',
    fontWeight : 'bold'   //In đậm chữ
  },

  containerBottom : {
    backgroundColor : 'yellow',
    flex : 1
  },
  
  bottom : {
    marginHorizontal: 20,
    marginTop : 170,
    paddingHorizontal : 10,
    paddingVertical : 10,
    backgroundColor : '#FAF3FA',
    borderWidth : 3,
    borderColor : 'red',
    borderRadius : 22     //Bo tròn background
    
  },
  
  bottomText: {
    textAlign : 'right',
    fontSize : 20,
    color : '#3390FF',
    fontWeight : 'bold'   //In đậm chữ
  }
});

export default App;