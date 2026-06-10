import { FileText, ClipboardCheck, Award } from "lucide-react";

function TeacherEvaluation() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900">
          Assessments & Evaluation
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Create quizzes, tests and evaluate assignments.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <FileText className="text-blue-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">25</h2>
            <p className="text-slate-500">Quizzes Created</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <ClipboardCheck className="text-emerald-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">180</h2>
            <p className="text-slate-500">Assignments Evaluated</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <Award className="text-indigo-600 mb-3" size={30} />
            <h2 className="text-3xl font-bold">92%</h2>
            <p className="text-slate-500">Average Score</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">

          <h2 className="text-2xl font-bold mb-5">
            Create New Quiz/Test
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Quiz/Test Name"
              className="border border-slate-200 rounded-xl p-3"
            />

            <select className="border border-slate-200 rounded-xl p-3">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

          </div>

          <textarea
            rows={4}
            placeholder="Instructions"
            className="w-full mt-4 border border-slate-200 rounded-xl p-3"
          />

          <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-xl">
            Create Assessment
          </button>

        </div>

      </div>
    </div>
  );
}

export default TeacherEvaluation;