import { Provider } from "react-redux";
import { store } from "./index";
import { persistStore } from "redux-persist";

const ReduxProvider = ({ children }: { children: React.ReactNode; }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
export default ReduxProvider