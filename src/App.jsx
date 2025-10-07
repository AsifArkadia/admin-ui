import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <h2 className="mb-2">LATIHAN 1</h2>
        <nav className="flex flex-col md:flex-row justify-between  p-4 bg-gray-100 rounded">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <hr />

        {/* LATIHAN 2 - GRID GALERI */}
        <h2 className="mb-2">LATIHAN 2</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>

        <hr />

        {/* LATIHAN 3 - PRICING TABLE */}
        <h2 className="mb-2">LATIHAN 3</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center p-4">
          <div className="bg-gray-200 p-6 rounded shadow">
            <h3>Basic</h3>
            <p>Rp 50.000</p>
          </div>
          <div className="bg-blue-200 p-8 rounded shadow-md scale-105">
            <h3>Pro</h3>
            <p>Rp 100.000</p>
          </div>
          <div className="bg-gray-200 p-6 rounded shadow">
            <h3>Premium</h3>
            <p>Rp 200.000</p>
          </div>
        </div>

        <hr />

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <h2 className="mb-2">LATIHAN 4</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[100vh] gap-2">
          <header className="md:col-span-12 bg-gray-300 p-4 rounded">Header</header>
          <aside className="md:col-span-3 bg-gray-200 p-4 rounded">Sidebar</aside>
          <main className="md:col-span-9 bg-white p-4 border rounded">Content</main>
          <footer className="md:col-span-12 bg-gray-300 p-4 rounded">Footer</footer>
        </div>

        <hr />

        {/* LATIHAN 5 - CARD PRODUCT */}
        <h2 className="mb-1">LATIHAN 5</h2>
        <div className="flex flex-col items-center text-center p-4 border rounded shadow md:flex-row md:items-start md:text-left md:gap-4">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="rounded-md"
          />
          <div className="flex-col p-4">
            <h3 className="font-bold text-lg">Nama Produk</h3>
            <p className="text-sm text-gray-600">
              Deskripsi produk singkat...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
