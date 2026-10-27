// import { createContext, useContext } from "react";

// export const TaskContext = createContext([
//     { id: 1, title: "Learn Props", status: "Completed", priority: "Low" },
//     { id: 2, title: "Practice React Router", status: "Pending", priority: "High" },
//     { id: 3, title: "Learn Context API", status: "Pending", priority: "Medium" }
// ])


// export const TaskProvider = TaskContext.Provider


// export function useTask() {
//     return useContext(TaskContext)
// }




import { createContext, useContext, useState } from "react";

const TaskContext = createContext(null);

const initialTasks = [
    {
        id: 1,
        title: "Learn Props",
        status: "Completed",
        priority: "Low"
    },
    {
        id: 2,
        title: "Practice React Router",
        status: "Pending",
        priority: "High"
    },
    {
        id: 3,
        title: "Learn Context API",
        status: "Pending",
        priority: "Medium"
    }
];

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (newTask) => {
        setTasks(prev => [
            ...prev,
            { id: Date.now(), ...newTask }
        ]);
    };

    const toggleTaskStatus = (id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? {
                        ...task,
                        status: task.status === "Completed"
                            ? "Pending"
                            : "Completed"
                    }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(prev =>
            prev.filter(task => task.id !== id)
        );
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                toggleTaskStatus,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export default function useTask() {
    const context = useContext(TaskContext);

    if (context === null) {
        throw new Error("useTask must be used within TaskProvider");
    }

    return context;
}
