import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

import NotFound from "./pages/notFound/NotFound";
import Header from "./components/header/Header";
import Download from "./pages/download/Download";


import { AuthProvider } from "./utils/auth";
import { RequireAuth } from "./utils/RequireAuth";
import Profile from "./pages/profilePage/profile";
import Login from "./pages/signin/login";
import SignIn from "./pages/signin/signin";

// https://github.com/stharanzn/FPS_ShooterLauncher/releases/download/0.0.1/fps_shooterlauncher-1.0.0.Setup.exe

function App() {
  return (
    <>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/download" element={<Download/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/profile/:username" element={<RequireAuth><Profile/></RequireAuth>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

      </AuthProvider>

    </>
  );
}

export default App;
