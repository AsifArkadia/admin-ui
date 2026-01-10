import React, { useContext, useEffect, useState} from 'react'
import MainLayout from '../Components/Layouts/MainLayout'
import Card from '../Components/Elements/Card'
import CardBalance from '../Components/Fragments/CardBalance'
import CardGoal from '../Components/Fragments/CardGoal'
import CardUpcomingBill from '../Components/Fragments/CardUpcomingBill'
import CardRecentTransaction from '../Components/Fragments/CardRecentTransaction'
import CardStatistic from '../Components/Fragments/CardStatistic'
import CardExpenseBeakdown from '../Components/Fragments/CardExpenseBeakdown'
import { 
    balances,
    bills, 
    expensesBreakdowns, 
    expensesStatistics, 
    goals, 
    transactions,
} from '../data'
import { goalService } from '../services/dataService'
import { AuthContext } from '../context/authContext'
import AppSnackbar from '../Components/Elements/AppSnackbar'

function dashboard() {
    const [goals, setGoals] = useState({});
    const { logout } = useContext(AuthContext);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    }); 
  
    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const fetchGoals = async () => {
        try {
            const data = await goalService();
            setGoals(data);
        } catch (err) {
            setSnackbar({
                open: true,
                message: "Gagal mengambil data goals:",
                severity: "error",
            })
            if (err.status === 401) {
                logout();
            }
        }
    };

  useEffect(() => {
    fetchGoals();
  }, []);
  
    console.log("GOALS:", goals);
  
  return (
    <>
        <MainLayout>
            <div className='grid sm:grid-cols-12 gap-6'>
                <div className='sm:col-span-4'>
                    <CardBalance data={balances}/>
                </div>
                <div className='sm:col-span-4'>
                    <CardGoal data={goals}/>
                </div>
                <div className='sm:col-span-4'>
                    <CardUpcomingBill data={bills}/>
                </div>
                <div className="sm:col-span-4 sm:row-span-2">
                    <CardRecentTransaction data={transactions}/>
                </div>
                <div className="sm:col-span-8">
                    <CardStatistic data={expensesStatistics}/>
                </div>
                <div className="sm:col-span-8">
                    <CardExpenseBeakdown data={expensesBreakdowns}/>
                </div>
            </div>

            <AppSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />
        </MainLayout>
    </>
  )
}

export default dashboard