import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {

    const {data, loading, error} = useFetch("https://hotel-project-backend-git-main-tek-rajs-projects.vercel.app/hotels")

    const [successMessage, setSuccessMessage] = useState("")
    // console.log(data)
    const handleDelete = async(hotelId) => {
        const response = await fetch(`https://hotel-project-backend-git-main-tek-rajs-projects.vercel.app/hotels/${hotelId}`,
            {
                method: "DELETE"
            },
        )

        if(!response.ok){
            throw "Failed to delete Hotel."
        }

        const data = await response.json()
        if(data){

            setSuccessMessage("Hotel deleted Successfully.")
            window.location.reload()
        }
    }

    return(
        <div>
            <h1>All Hotels</h1>
            {data?.hotel?.map((h) => (
                <ul>
                    <li key={h._id}>{h.name}{" "} <button onClick={() => handleDelete(h._id)}>Delete</button></li>
                </ul>
            ))}
            <p>{successMessage}</p>
        </div>
    )
}

export default Hotels