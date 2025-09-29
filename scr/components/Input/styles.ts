import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  input: {
    flex: 1,
    color: "purple",
    backgroundColor :"white",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 60,
    width: "70%"
  },
  button: {
    backgroundColor: "black",
    marginLeft: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});