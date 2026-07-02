import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Clock,
  Star,
  User,
  GraduationCap,
} from "lucide-react";

function BrowseCourses() {
  const [search, setSearch] = useState("");

  const courses = [
    {
      id: 1,
      title: "React Development",
      instructor: "John Smith",
      duration: "8 Weeks",
      lessons: 40,
      rating: 4.9,
      price: "Free",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Java Programming",
      instructor: "David Wilson",
      duration: "10 Weeks",
      lessons: 55,
      rating: 4.8,
      price: "₹999",
      category: "Programming",
    },
    {
      id: 3,
      title: "Python for Beginners",
      instructor: "Sarah Johnson",
      duration: "6 Weeks",
      lessons: 32,
      rating: 4.7,
      price: "Free",
      category: "Programming",
    },
    {
      id: 4,
      title: "Machine Learning",
      instructor: "Michael Brown",
      duration: "12 Weeks",
      lessons: 68,
      rating: 4.9,
      price: "₹1999",
      category: "AI",
    },
    {
      id: 5,
      title: "Data Structures",
      instructor: "Alex Martin",
      duration: "7 Weeks",
      lessons: 38,
      rating: 4.8,
      price: "₹799",
      category: "Programming",
    },
    {
      id: 6,
      title: "UI/UX Design",
      instructor: "Emma Davis",
      duration: "5 Weeks",
      lessons: 25,
      rating: 4.6,
      price: "Free",
      category: "Design",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Browse Courses
          </h1>

          <p className="text-slate-500 mt-2">
            Explore available courses and start learning.
          </p>
        </div>

        <Link
          to="/student/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
        >
          Dashboard
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow p-5 mb-8">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Banner */}
            <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <GraduationCap size={60} className="text-white" />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-800">
                {course.title}
              </h2>

              <p className="text-slate-500 mt-1">
                {course.category}
              </p>

              <div className="flex items-center gap-2 mt-4 text-slate-600">
                <User size={18} />
                {course.instructor}
              </div>

              <div className="flex items-center gap-2 mt-2 text-slate-600">
                <Clock size={18} />
                {course.duration}
              </div>

              <div className="flex items-center gap-2 mt-2 text-yellow-500">
                <Star fill="currentColor" size={18} />
                {course.rating}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    course.price === "Free"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {course.price}
                </span>

                <span className="text-slate-500">
                  {course.lessons} Lessons
                </span>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                  Enroll
                </button>

                <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center mt-20 text-slate-500 text-lg">
          No courses found.
        </div>
      )}
    </div>
  );
}

export default BrowseCourses;