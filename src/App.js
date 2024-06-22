import { InfoProvider } from "./context/InfoContext";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PMPage from "./pages/PMPage";
import MMPage from "./pages/MMPage";
import FMPage from "./pages/FMPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <InfoProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/pm" element={<PMPage />} />
              <Route path="/mm" element={<MMPage />} />
              <Route path="/fm" element={<FMPage />} />
            </Routes>
          </InfoProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
