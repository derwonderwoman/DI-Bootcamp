import { useEffect, useState } from 'react'
import './App.css'
import Counter from "./components/BuggyCounter"
import ErrorBoundary from './components/ErrorBoundary';
import Color from './components/Color';

function App() {
  
  return (
    <>
      <ErrorBoundary>
        <Counter/>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
      <Counter/>

      <Color/>

    </>
  );
}

export default App
