import { useParams, useNavigate } from "react-router-dom"

const TaskDetails = (props) => {
    const { id } = useParams()
   


    return (
        <>
            <div className="p-8">
                <h1 className="text-3xl font-bold">Task Details</h1>




                <div>
                    <p className="mt-4">
                        Select class ID: {id}
                    </p>



                </div>
            </div>
        </>
    )
}

export default TaskDetails