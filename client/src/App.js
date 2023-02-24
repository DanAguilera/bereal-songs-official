import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import client from './config/apolloClient';



import './styles/index.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import { App } from 'antd';


const httpLink = createHttpLink({
    uri: '/graphql',
})

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
  
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  
  });
  
  const loggedIn = false
  // const isLoading = false
  const user = {}
  const handleLogin = () => {}
  // const songsList = []
  // const postsList = []
  // const err = {}


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={ <Home loggedIn={loggedIn} currentUser={user} onLogin={handleLogin} onLogout={() => {}} />} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/signup" element={<Signup />}/>
          
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
