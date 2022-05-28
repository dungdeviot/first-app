import { View, Text, TouchableOpacity } from "react-native";
import React from "react"; //key "rnfe"
import styles from './style';

const Task = () => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.square}>
          <Text style={styles.number}>01</Text>
        </View>
        <Text style={styles.content}>Task 1</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
