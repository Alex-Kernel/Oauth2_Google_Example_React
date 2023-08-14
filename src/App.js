import LoginPageComponent from "./pages/LoginPageComponent";
import UsersComponent from "./pages/UsersComponent";
import AuthComponent from "./pages/AuthComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {



  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="sign-in" element={<LoginPageComponent/>}/>
                <Route path="auth" element={<AuthComponent/>}/>
                <Route path="/" element={<UsersComponent/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
