import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
  },
  square: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  even: {
    backgroundColor: "#f5e97a",
  },
  odd: {
    backgroundColor: "#35bbf0",
  },
  number: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    width: "80%",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
