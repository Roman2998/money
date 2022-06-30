import React from 'react';
import './App.css';
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
        <div>
            <div className="sum">Сумма</div>
            <Input />
            <div className="date">на 30 дней</div>
        </div>
        <div>
            <div className="remainingMoney">Остаток на сегодня</div>
            <Input />
        </div>
        <div>
            <Input />
        </div>
    </div>
  );
}

export default App;
