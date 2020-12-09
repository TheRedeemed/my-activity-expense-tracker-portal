import React from 'react';

const AppContent = () => {
    return (
        <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', margin: '15px 350px'}}>
            <h2>Activities & Expenses</h2>
            <div style={{display: 'flex', flexFlow: 'wrap'}}>
                <div style={{display:'flex', flexFlow: 'column', border: '2px solid', width: '350px', padding: '15px', margin: '10px', borderRadius: '15px'}}>
                    <h3>Martial Art</h3>
                    <p>Description: Martial art activity with Mark. Every monday at 6pm</p>
                    <p>Balance : $0</p>
                    <p>Last balance upate: 12/08/2020 11:20 PM</p>
                    <div style={{display: 'flex', flexFlow: 'row', justifyContent:'flex-end', padding: '5px'}}>
                        <button>Add Expense</button>
                        <button>Pay Balance</button>
                    </div>
                </div>
                <div style={{display:'flex', flexFlow: 'column', border: '2px solid', width: '350px', padding: '15px', margin: '10px', borderRadius: '15px'}}>
                    <h3>Workout</h3>
                    <p>Description: Workout with Andrew. Every Tuesday and Thursday at 7:30am</p>
                    <p>Balance : $30</p>
                    <p>Last balance upate: 12/08/2020 11:20 PM</p>
                    <div style={{display: 'flex', flexFlow: 'row', justifyContent:'flex-end', padding: '5px'}}>
                        <button>Add Expense</button>
                        <button>Pay Balance</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppContent;