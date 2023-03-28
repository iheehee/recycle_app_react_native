import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import store, { persistor } from "./modules/store";

export default function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Gate />
    </PersistGate>
  </Provider>
  );
};
