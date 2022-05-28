import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Task from "./components/Task";
import styles from "./App.components.style";
import Form from "./components/Form";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    //Add task
    setTaskList([...taskList, task]); //Coppy lại toàn bộ Array cũ và thêm 1 task vừa nhập vào
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>List Task</Text>

        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return <Task key={index} />;
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
