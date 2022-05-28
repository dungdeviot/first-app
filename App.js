import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import Task from "./components/Task";
import styles from "./App.components.style";
import Form from "./components/Form";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    //Add task
    setTaskList([...taskList, task]); //Coppy lại toàn bộ Array cũ và thêm 1 task vừa nhập vào
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Thông báo !", "Bạn chắc chắn muốn xóa công việc ?", [
      {
        text: "OK",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
      { text: "Cancel", onPress: () => {} },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>List Task</Text>

        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
