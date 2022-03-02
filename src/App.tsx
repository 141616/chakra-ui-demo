import React from "react";
import { Center } from "@chakra-ui/react";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Center w="full" minHeight="100vh" bg="white.600">
      <Login></Login>
    </Center>
  );
}

export default App;
