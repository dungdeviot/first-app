import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addTask: {
    paddingHorizontal: 15,
    width: "100%",
    bottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  input: {
    height: 45,
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#877aeb",
    paddingHorizontal: 20,
  },
  iconWrapper: {
    height: 44,
    width: 44,
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#364e80",
    borderWidth: 2,
    borderColor: "#211a5c",
  },
  icon: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;
