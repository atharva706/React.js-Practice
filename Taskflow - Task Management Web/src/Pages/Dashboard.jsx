import Statcard from "../Components/Statcard";
import Taskcard from "../Components/Taskcard";
import useTask from "../contexts/TaskContext.jsx";

function Dashboard() {
  const { tasks, toggleTaskStatus, deleteTask } = useTask();

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((val) => val.status === "Pending").length;
  const completedTasks = tasks.filter(
    (val) => val.status === "Completed",
  ).length;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <main className="flex-1 min-w-0 px-4 py-10 sm:px-6 lg:px-8">
        {/* Your existing dashboard content */}

        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
              Workspace
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Task Dashboard
            </h1>

            <p className="text-slate-500 mt-2">
              Organize your work and track your progress.
            </p>
          </header>

          {/* Statistics */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Overview
            </h2>

            <Statcard
              totalTasks={totalTasks}
              pendingTasks={pendingTasks}
              completedTasks={completedTasks}
            />
          </section>

          {/* Task List */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
              <h2 className="text-xl font-bold text-slate-900">Your Tasks</h2>

              <span className="text-sm text-slate-500">
                {totalTasks} tasks in total
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tasks.map((val) => (
                <Taskcard key={val.id} {...val} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
