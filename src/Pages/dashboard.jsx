import React from 'react'
import MainLayout from '../Components/Layouts/MainLayout'
import Card from '../Components/Elements/Card'
import CardBalance from '../Components/Fragments/CardBalance'
import CardGoal from '../Components/Fragments/CardGoal'
import CardUpcomingBill from '../Components/Fragments/CardUpcomingBill'
import CardRecentTransaction from '../Components/Fragments/CardRecentTransaction'
import CardStatistic from '../Components/Fragments/CardStatistic'
import CardExpenseBeakdown from '../Components/Fragments/CardExpenseBeakdown'
import { bills, expensesBreakdowns, transactions } from '../data'

function dashboard() {
    console.log(transactions);
  return (
    <>
        <MainLayout>
            <div className='grid sm:grid-cols-12 gap-6'>
                <div className='sm:col-span-4'>
                    <CardBalance/>
                </div>
                <div className='sm:col-span-4'>
                    <CardGoal/>
                </div>
                <div className='sm:col-span-4'>
                    <CardUpcomingBill data={bills}/>
                </div>
                <div className="sm:col-span-4 sm:row-span-2">
                    <CardRecentTransaction data={transactions}/>
                </div>
                <div className="sm:col-span-8">
                    <CardStatistic/>
                </div>
                <div className="sm:col-span-8">
                    <CardExpenseBeakdown data={expensesBreakdowns}/>
                </div>
            </div>    
        </MainLayout>
    </>
  )
}

export default dashboard