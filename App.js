import React from "react";
import MainStackNavigator from "./src/routes/AppNavigator";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <StoreProvider store={store}>
      <MainStackNavigator />
    </StoreProvider>
  );
}
