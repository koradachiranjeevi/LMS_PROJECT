function BookDemo() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-[500px]">

        <h1 className="text-3xl font-bold mb-6">
          Free Demo Session
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <select className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10">
          <option>Select Course Interest</option>
          <option>Artificial Intelligence</option>
          <option>Machine Learning</option>
          <option>Data Science</option>
          <option>Web Development</option>
        </select>

        <button className="w-full bg-blue-600 py-3 rounded-lg">
          Book Demo Session
        </button>

      </div>
    </div>
  );
}

export default BookDemo;