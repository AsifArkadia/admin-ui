import { useEffect, useState } from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import ExpenseCard from "../Components/Fragments/ExpenseCard";
import CircularProgress from "@mui/material/CircularProgress";

function expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        setExpenses([
          {
        category: "Housing",
        total: 250,
        percent: 15,
        trend: "up",
        items: [
          { name: "House Rent", amount: 230, date: "17 May 2023" },
          { name: "Parking", amount: 20, date: "17 May 2023" },
        ],
      },
      {
        category: "Food",
        total: 350,
        percent: 8,
        trend: "down",
        items: [
          { name: "Grocery", amount: 230, date: "17 May 2023" },
          { name: "Restaurant Bill", amount: 120, date: "17 May 2023" },
        ],
      },
      {
        category: "Transportation",
        total: 50,
        percent: 12,
        trend: "down",
        items: [
          { name: "Taxi Fare", amount: 30, date: "17 May 2023" },
          { name: "Metro Card Bill", amount: 20, date: "17 May 2023" },
        ],
      },
      {
        category: "Entertainment",
        total: 80,
        percent: 15,
        trend: "down",
        items: [
          { name: "Movie Ticket", amount: 30, date: "17 May 2023" },
          { name: "iTunes", amount: 50, date: "17 May 2023" },
        ],
      },
      {
        category: "Shopping",
        total: 420,
        percent: 25,
        trend: "up",
        items: [
          { name: "Shirt", amount: 230, date: "17 May 2023" },
          { name: "Jeans", amount: 190, date: "17 May 2023" },
        ],
      },
      {
        category: "Others",
        total: 50,
        percent: 23,
        trend: "up",
        items: [
          { name: "Donation", amount: 30, date: "17 May 2023" },
          { name: "Gift", amount: 20, date: "17 May 2023" },
        ],
          },
        ]);
      } catch (err) {
        setError("Failed to load expenses");
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <MainLayout>
      <h1 className="text-xl text-gray-400 mb-6">
        Expenses Comparison
      </h1>


      {loading && (
        <div className="flex flex-col justify-center items-center h-64 text-primary">
          <CircularProgress color="inherit" size={50} />
          <p className="mt-3 text-sm">Loading Data</p>
        </div>
      )}

      {!loading && error && (
        <div className="text-center text-red-500">
          {error}
        </div>
      )}

      {!loading && !error && expenses.length === 0 && (
        <div className="text-center text-gray-400">
          No expenses data available
        </div>
      )}

      {!loading && !error && expenses.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {expenses.map((item, index) => (
            <ExpenseCard key={index} data={item} />
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default expenses;
