import toast from "react-hot-toast";

const baseStyle = {
  minWidth: "320px",
  padding: "14px 16px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
};
const baseStyle2 = {
  minWidth: "180px",
  padding: "14px 16px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
};

/* ❗ ERROR TOAST */
export const toastError = (message) => {
  toast.custom((t) => (
    <div
      style={{ ...baseStyle, backgroundColor: "#dc2626" }}
      className={`transition-all duration-300 ${
        t.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* ICON ERROR */}
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-red-600 font-extrabold text-lg">
          !
        </div>

        {/* TEXT */}
        <span className="text-sm font-medium">{message}</span>
      </div>

      {/* CLOSE */}
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-sm"
      >
        ✕
      </button>
    </div>
  ));
};

/* ✅ SUCCESS TOAST */
export const toastSuccess = (message) => {
  toast.custom((t) => (
    <div
      style={{ ...baseStyle2, backgroundColor: "#16a34a" }}
      className={`transition-all duration-300 ${
        t.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* ICON SUCCESS */}
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-600 font-extrabold text-lg">
          ✓
        </div>

        {/* TEXT */}
        <span className="text-sm font-medium">{message}</span>
      </div>

      {/* CLOSE */}
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-sm"
      >
        ✕
      </button>
    </div>
  ));
};
