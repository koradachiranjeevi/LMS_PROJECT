function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">CodeVirus LMS</h1>
      </nav>

      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-4xl font-bold mb-4">
          Learn. Practice. Grow.
        </h2>

        <p className="text-gray-600 mb-8">
          Learning Management System
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Student Login
          </button>

          <button className="bg-green-500 text-white px-6 py-3 rounded-lg">
            Teacher Login
          </button>

          <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;