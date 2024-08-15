import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "constants/routes";
import { Provider } from "react-redux";
import store from "store";
import {TopRepsProvider} from 'Context/TopRepsContext.tsx'; // Import your context provider

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <TopRepsProvider>
      <RouterProvider router={routes} />
    </TopRepsProvider>
  </Provider>
);
