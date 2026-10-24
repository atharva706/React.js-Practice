
function Taskcard(props) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
            <div className="flex justify-between mb-4">
                <span className="text-sm text-gray-500">
                    ID: {props.id}
                </span>

                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    props.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                }`}>
                    {props.status}
                </span>
            </div>

            <h2 className="text-lg font-bold text-gray-800 mb-4">
                {props.title}
            </h2>

            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Priority</span>

                <span className={`font-semibold text-sm ${
                    props.priority === "High"
                        ? "text-red-600"
                        : props.priority === "Medium"
                        ? "text-orange-500"
                        : "text-green-600"
                }`}>
                    {props.priority}
                </span>
            </div>
        </div>
    );
}

export default Taskcard;
