import './index.css'

function App() {
  return (
    <>
      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-indigo-600 mb-4">TaskFlow</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Organize your tasks, flow through your day
          </h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            A simple, smart way to manage your daily to-dos — focus on what matters and get more done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow">
              Try TaskFlow — Free
            </button>
            <button className="cursor-pointer border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium">
              Learn more
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-12">Features</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
                <div className="text-indigo-600 text-4xl mb-4">🗂️</div>
                <h4 className="text-xl font-semibold mb-2">Smart To-Do Lists</h4>
                <p>Organize everything with lists, due dates, and smart priority so you finish important work first.</p>
              </div>
              <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
                <div className="text-indigo-600 text-4xl mb-4">📅</div>
                <h4 className="text-xl font-semibold mb-2">Calendar & Planner</h4>
                <p>Plan your day at a glance — drag & drop tasks to reschedule in seconds.</p>
              </div>
              <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
                <div className="text-indigo-600 text-4xl mb-4">📈</div>
                <h4 className="text-xl font-semibold mb-2">Progress Insights</h4>
                <p>Weekly and monthly summaries show how you’re improving so you can optimize your workflow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-12">What Our Users Say</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <blockquote className="p-6 bg-white shadow rounded-lg italic">
                “TaskFlow helped me stop switching between apps — I get so much more done.”
                <footer className="mt-4 font-semibold">— Mariam, Content Designer</footer>
              </blockquote>
              <blockquote className="p-6 bg-white shadow rounded-lg italic">
                “Clean UI and reliable reminders — exactly what I needed.”
                <footer className="mt-4 font-semibold">— Ahmed, Web Developer</footer>
              </blockquote>
              <blockquote className="p-6 bg-white shadow rounded-lg italic">
                “We use it across our team — meetings got shorter because everyone knows what to do.”
                <footer className="mt-4 font-semibold">— Oasis Studio Team</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-12">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Free */}
              <div className="p-6 shadow rounded-lg">
                <h4 className="text-2xl font-semibold mb-2">Free</h4>
                <p className="mb-4 text-gray-600">Unlimited tasks, basic calendar, email support</p>
                <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
                  Join Free
                </button>
              </div>
              {/* Pro */}
              <div className="p-6 shadow rounded-lg border-2 border-indigo-600">
                <h4 className="text-2xl font-semibold mb-2">Pro</h4>
                <p className="mb-4 text-gray-600">Advanced reminders, exportable reports, advanced priority</p>
                <p className="text-indigo-600 font-bold mb-4">$6/month</p>
                <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
                  Go Pro
                </button>
              </div>
              {/* Team */}
              <div className="p-6 shadow rounded-lg">
                <h4 className="text-2xl font-semibold mb-2">Team</h4>
                <p className="mb-4 text-gray-600">Team management, roles & shared boards, priority support</p>
                <p className="text-indigo-600 font-bold mb-4">$15/month per user</p>
                <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
                  Try for Teams
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-gray-300 text-center">
          <p className="mb-2">Contact: hello@taskflow.app · +1 (555) 123-4567</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
          <p className="text-sm">&copy; 2025 TaskFlow. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}

export default App
