import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Login from './components/Login'
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

let isLoggedIn = false;

const App = () => {
	return (
		<AppProvider>
			{!isLoggedIn && 
			<Login></Login>}
			<h1 className='col-4 mt-3'>Budget Ultra Deluxe</h1>
			<div className='container'>
				<div className='row'>
					<Budget />
				</div>
				<div className='row'>
					<RemainingBudget />
				</div>
				<div className='row'>
					<ExpenseTotal />
				</div>
			</div>
			<h3 className='mt-3'>Expenses</h3>
			<div className='row '>
				<div className='col-sm'>
					<ExpenseList />
				</div>
			</div>
			<h3 className='mt-3'>Add Expense</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<AddExpenseForm />
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
