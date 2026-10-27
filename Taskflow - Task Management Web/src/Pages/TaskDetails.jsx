
import { useParams, useNavigate } from "react-router-dom";
import useTask from "../contexts/TaskContext";

const TaskDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks } = useTask();

    const matched = tasks.find(
        task => String(task.id) === id
    );

    const priorityColor = {
        High: "bg-red-100 text-red-700",
        Medium: "bg-yellow-100 text-yellow-700",
        Low: "bg-green-100 text-green-700",
    };

    const statusColor = {
        Completed: "bg-green-100 text-green-700",
        Pending: "bg-orange-100 text-orange-700",
        "In Progress": "bg-blue-100 text-blue-700",
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
            <div className="mx-auto max-w-3xl">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center gap-2 rounded-lg px-4 py-2
                    text-sm font-medium text-gray-600 transition
                    hover:bg-gray-200 hover:text-gray-900"
                >
                    ← Back
                </button>

                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Task Details
                </h1>
                <p className="mt-2 text-gray-500">
                    View information about your task.
                </p>

                {matched ? (
                    <div className="mt-8 overflow-hidden rounded-2xl border
                    border-gray-200 bg-white shadow-sm">

                        <div className="border-b border-gray-100
                        bg-gradient-to-r from-indigo-600 to-violet-600
                        px-6 py-8 sm:px-8">
                            <p className="text-sm font-medium text-indigo-100">
                                TASK #{matched.id}
                            </p>

                            <h2 className="mt-2 break-words text-2xl
                            font-bold text-white sm:text-3xl">
                                {matched.title}
                            </h2>
                        </div>

                        <div className="space-y-6 p-6 sm:p-8">

                            <div>
                                <p className="mb-2 text-sm font-semibold
                                text-gray-500">
                                    Task Status
                                </p>

                                <span className={`inline-flex rounded-full
                                px-4 py-1.5 text-sm font-semibold
                                ${statusColor[matched.status] ||
                                "bg-gray-100 text-gray-700"}`}>
                                    {matched.status}
                                </span>
                            </div>

                            <div>
                                <p className="mb-2 text-sm font-semibold
                                text-gray-500">
                                    Priority Level
                                </p>

                                <span className={`inline-flex rounded-full
                                px-4 py-1.5 text-sm font-semibold
                                ${priorityColor[matched.priority] ||
                                "bg-gray-100 text-gray-700"}`}>
                                    {matched.priority}
                                </span>
                            </div>

                            <div className="border-t border-gray-100 pt-5">
                                <p className="text-sm text-gray-500">
                                    Task ID
                                </p>
                                <p className="mt-1 font-semibold text-gray-800">
                                    #{matched.id}
                                </p>
                            </div>

                            <button
                                onClick={() => navigate("/dashboard")}
                                className="w-full rounded-xl bg-indigo-600
                                px-5 py-3 font-semibold text-white
                                shadow-sm transition hover:bg-indigo-700
                                active:scale-[0.98] sm:w-auto"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="mt-8 rounded-2xl border border-red-200
                    bg-white p-8 text-center shadow-sm">
                        <div className="mx-auto flex h-14 w-14 items-center
                        justify-center rounded-full bg-red-100 text-2xl">
                            !
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-gray-900">
                            Task Not Found
                        </h2>

                        <p className="mt-2 text-gray-500">
                            No task exists with ID #{id}.
                        </p>

                        <button
                            onClick={() => navigate(-1)}
                            className="mt-6 rounded-lg bg-indigo-600 px-5 py-2.5
                            font-semibold text-white transition
                            hover:bg-indigo-700"
                        >
                            Go Back
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskDetails;
