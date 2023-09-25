// import { useState } from 'react';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '../assets/react.svg';
import '../App.css';
import Header from '@/components/Header';
import TodosLogic from './TodosLogic';

function TodoApp() {
  return (
    <>
      <Header />
      <TodosLogic />
    </>
  );
}

export default TodoApp;
