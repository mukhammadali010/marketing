import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';
import Contact from '../components/Contact';

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar navbar={navbar} />}>
        {navbar.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Route>
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Root;
