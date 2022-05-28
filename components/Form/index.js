import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, {useState} from "react";
import styles from "../Form/style";

const Form = (props) => {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if(task.length == 0) {
            alert("Vui lòng nhập công việc !")
            return false
        }
        //setTask("Hello world!")
        //alert(props.onAddTask)
        props.onAddTask(task)
        setTask('')
    }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput 
      value={task}
      onChangeText={(text) => setTask(text)}
      laceholder="Your Task" style={styles.input} />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
