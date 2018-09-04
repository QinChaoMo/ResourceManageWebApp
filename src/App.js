import React from 'react';
import AppRouter from './router';
import './App.css';
import mockSignin from '../mock/auth';

if (process.env.NODE_ENV === 'development') {
  mockSignin();
}

export default function App() {
  return <AppRouter />;
}
