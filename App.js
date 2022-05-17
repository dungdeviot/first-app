import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.text}>Top Left</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
        <Text style={styles.text}>Bottom Left</Text>
        </View>
         
        <View style={styles.bottomRight}>
          <View style={styles.bottomRightTop}>
            {/* Dùng mảng để đọc cả 2 thuộc tính, ưu tiên nhận cái sau cùng */}
            <Text style={[styles.text,styles.textBottom]}>Bottom Right</Text>
          </View>
          <View style={styles.bottomRightBottom}> 
            <Text style={[styles.text,styles.textBottom]}>Bottom Right</Text> 
          </View>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  },

  top :  {
    flex : 1,
    backgroundColor : 'yellow',
    justifyContent : 'center',
    alignItems : 'center'
  },
  text : {
    fontSize : 22,
    fontWeight : 'bold',
    color : 'blue'
  },

  bottom : {
    flex : 1,
    flexDirection : 'row'   //Mặc định là 'Col'
  },
  bottomLeft : {
    flex : 1,
    backgroundColor : 'green',
    alignItems : 'center',
    justifyContent : 'center'
  },

  bottomRight : {
    flex : 1,
  },
  bottomRightTop : {
    flex : 2,   //flex gấp đôi bottomRightBottom
    backgroundColor : '#ee3ee7',
    alignItems : 'center',
    justifyContent : 'center'
  },
  bottomRightBottom : {
    flex : 1,
    backgroundColor : '#379fd9',
    alignItems : 'center',
    justifyContent : 'center'
  },
  textBottom : {  //Dùng mảng để set nhận cả 2 thuộc tính, ưu tiên nhận cái sau cùng
    color : 'white',
    fontSize : 18
  }
  
});

export default App;