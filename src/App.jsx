import React from 'react';
import {Header} from './component/Header';
import {Balance} from './component/Balance';
import {IncomeExpenses} from './component/IncomeExpenses';
import {AddTransacton} from './component/AddTransacton';
import {TransactionList} from './component/TransactionList';
import { GlobalProvider } from './context/GlobalState'
import './App.css';

function App(){
    return(
     <GlobalProvider>
        <Header/>
        <div className="container">
            <Balance/>
             <IncomeExpenses/>
             <TransactionList/>
             <AddTransacton/>
        </div>
    </GlobalProvider>
   );
}

export default App;