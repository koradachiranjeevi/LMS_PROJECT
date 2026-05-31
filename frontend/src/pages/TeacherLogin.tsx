function TeacherLogin() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-96">

        <h1 className="text-3xl font-bold mb-6">
          Teacher Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        />

        <button className="w-full bg-emerald-600 py-3 rounded-lg">
          Login
        </button>

      </div>
    </div>
  );
}

export default TeacherLogin;