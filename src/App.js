import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./components/Navigation/Routes/Routes";

function App() {
  return (
    // if you provide the page from a subdirectory:
    // <BrowserRouter basename="my-app">
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
