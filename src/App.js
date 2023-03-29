import React, { useState } from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Main from "./Pages/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
import Login from "./Pages/Login/Login"
import BlogOverzicht from "./Pages/Blogposts/BlogOverzicht";
import Blog from "./Pages/BlogpostID/Blog";
import Loguit from "./Pages/Login/Loguit";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <main>
        <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login toggleAuth={toggleIsAuthenticated} />} />
            <Route path="/blog" element={isAuthenticated ? <BlogOverzicht /> : <Navigate to="/login" />} />
            <Route path="/blog/:id" element={isAuthenticated ? <Blog /> : <Navigate to="/login" />} />
            <Route path="/uitloggen" element={isAuthenticated ? <Loguit toggleAuth={toggleIsAuthenticated} /> : <Navigate to="/login"/>} />
        </Routes>
    </main>
  );
}

export default App;