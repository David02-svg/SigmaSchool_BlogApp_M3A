import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<HomePage/>}/>
                    <Route path="*" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
      // < >
      //   <AuthPage/>
      // </>
    );
}

export default App;