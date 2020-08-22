import React from 'react';
import { Header } from './components/Header';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
      <div className="container abc">
        <GlobalProvider>
        <Header />
       <br></br>
        <div className="row">
          
        <div className="col-lg-6"><IncomeExpense /></div>
          <div className="col-lg-6"><AddTransaction /></div>
          <div className="col-lg-12">
          <TransactionList />
          </div>
        </div>
        
      <Footer></Footer>
    </GlobalProvider>
      </div>
  );
}

export default App;
