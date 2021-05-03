import React from "react";
import Navigator from "./route/homeStack.js";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      {/* Zmienia kolor górnego paska (ten gdzie jest procent baterii, zasięg itd ) na czarny*/}
      <StatusBar backgroundColor="#000"></StatusBar>
      <Navigator />
    </>
  );
}
