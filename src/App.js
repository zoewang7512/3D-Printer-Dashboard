//react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//context
import { InfoProvider } from "./context/InfoContext";
import { AuthProvider } from "./context/AuthContext";
//components
import PrivateRoute from "./components/PrivateRoute";
//pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import PMPage from "./pages/PMPage";
import MMPage from "./pages/MMPage";
import FMPage from "./pages/FMPage";
import ErrorPage from "./pages/ErrorPage";

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
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </InfoProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
