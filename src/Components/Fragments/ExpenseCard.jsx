import Icon from "../Elements/Icon";

const categoryIconMap = {
  Housing: Icon.House,
  Food: Icon.Food,
  Transportation: Icon.Transport,
  Entertainment: Icon.Gamepad,
  Shopping: Icon.Shopping,
  Others: Icon.Other,
};

function ExpenseCard({ data }) {
  const CategoryIcon = categoryIconMap[data.category] || Icon.Expense;
  const TrendIcon = data.trend === "up" ? Icon.ArrowUp : Icon.ArrowDown;

  return (
    <div>
      {/* ===== HEADER (DI LUAR CARD) ===== */}
      <div className="flex justify-between items-start mb-3">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="bg-special-bg p-3 rounded-lg shadow-sm ring-1 ring-gray-100">
            <CategoryIcon size={20} className="text-gray-700" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-500">{data.category}</p>
            <p className="text-xl font-semibold">${data.total}</p>
          </div>
        </div>

        {/* Right */}
        <div className="text-right">
          <div className="flex justify-end items-center gap-1 text-sm font-semibold">
            <span className="text-gray-500">{data.percent}%</span>

            {data.trend === "up" ? (
              <TrendIcon size={14} className="text-red-500" />
            ) : (
              <TrendIcon size={14} className="text-green-500" />
            )}
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Compare to the last month
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-xs shadow-sm px-4 py-6">
        {data.items.map((item, index) => (
          <div key={index}>
            {index !== 0 && (
              <div className="border-t border-gray-200 my-3"></div>
            )}

            <div className="flex justify-between items-start">
              <p className="text-sm text-gray-500 font-medium">{item.name}</p>

              <div className="text-right">
                <p className="text-sm text-gray-500 font-semibold">${item.amount}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseCard;
