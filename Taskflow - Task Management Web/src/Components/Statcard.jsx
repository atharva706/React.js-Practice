
function Statcard(props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">

            {/* Total Tasks */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
                <p className="text-sm font-medium text-gray-500">
                    Total Tasks
                </p>
                <h2 className="text-3xl font-bold text-blue-600 mt-2">
                    {props.totalTasks}
                </h2>
            </div>

            {/* Pending Tasks */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition">
                <p className="text-sm font-medium text-gray-500">
                    Pending Tasks
                </p>
                <h2 className="text-3xl font-bold text-yellow-600 mt-2">
                    {props.pendingTasks}
                </h2>
            </div>

            {/* Completed Tasks */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition">
                <p className="text-sm font-medium text-gray-500">
                    Completed Tasks
                </p>
                <h2 className="text-3xl font-bold text-green-600 mt-2">
                    {props.completedTasks}
                </h2>
            </div>

        </div>
    );
}

export default Statcard;
