import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.9,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#fff",
    width: "70%",
    marginLeft: 25,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    width: 210,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    marginHorizontal: 10,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
