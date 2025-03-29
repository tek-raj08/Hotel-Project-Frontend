import { useState } from "react"

const HotelForm = () => {

    const [formData, setFormData] = useState({

        name: "",
        category: "",
        location: "",
        rating: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime:"",
        amenities: "",
        priceRange: "",
        reservationsNeeded: false,
        isParkingAvailable: "",
        isWifiAvailable: false,
        isPoolAvailable: "",
        isSpaAvailable: false,
        isRestautantAvailable: "",
        photos: ""

    })

    const handleChange = (e) => {

        const {name, value} = e.target
        setFormData((preState) => ({
            ...preState, [name]: name === rating ? parseInt(value) : value
        }))
    }

    const formHandler = async(event) => {

        event.preventDefault()

        

        try{
            const response  = await fetch("https://hotel-project-backend-git-main-tek-rajs-projects.vercel.app/hotels",
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            )
            if(!response.ok){
                throw "Failed to add Hotel."
            }

            const data = await response.json()
            console.log("Add Hotel", data)

        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <h1>Add New Hotel</h1>
            <form onSubmit={formHandler}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="category">Category:</label><br />
            <select name="category" id="category" value={formData.category} onChange={handleChange}>
                <option value='Budget'>Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Luxury">Luxury</option>
                <option value="Boutique">Boutique</option>
                <option value="Resort">Resort</option>
                <option value="Other">Other</option>
            </select>
            
            <br />
            <br />

            <label htmlFor="location">Location:</label><br />
            <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="rating">Rating:</label><br />
            <input type="number" name="rating" id="rating" value={formData.rating} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="website">Website:</label><br />
            <input type="text" name="website" id="website" value={formData.website} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="phoneNumber">Phone Number:</label><br />
            <input type="text" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="checkInTime">CheckInTime:</label><br />
            <input type="text" name="checkInTime" id="checkInTime" value={formData.checkInTime} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="checkOutTime">CheckOutTime:</label><br />
            <input type="text" name="checkOutTime" id="checkOutTime" value={formData.checkOutTime} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="amenities">Amenities:</label><br />
            <input type="text" name="amenities" id="amenities" value={formData.amenities} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="priceRange">Price Range:</label><br />
            <select name="priceRange" id="priceRange" value={formData.priceRange} onChange={handleChange}>
                <option value="$$ (11-30)">$$ (11-30)</option>
                <option value="$$$ (31-60)">$$$ (31-60)</option>
                <option value="$$$$ (61+)">$$$$ (61+)</option>
                <option value="Other">Other</option>
            </select>
            <br />
            <br />

            
            <input type="checkbox" name="reservationsNeeded" id="reservationsNeeded" value={formData.reservationsNeeded} onChange={handleChange}/>
            <label htmlFor="reservationsNeeded">Reservation Needed:</label>
            <br />
            <br />

            
            <input type="checkbox" name="isParkingAvailable" id="isParkingAvailable" value={formData.isParkingAvailable} onChange={handleChange} />
            <label htmlFor="isParkingAvailable">Is Parking Available:</label>
            <br />
            <br />

            
            <input type="checkbox" name="isWifiAvailable" id="isWifiAvailable" value={formData.isWifiAvailable} onChange={handleChange} />
            <label htmlFor="isWifiAvailable">Is Wifi Available:</label>
            <br />
            <br />

            
            <input type="checkbox" name="isPoolAvailable" id="isPoolAvailable" value={formData.isPoolAvailable} onChange={handleChange} />
            <label htmlFor="isPoolAvailable">Is Pool Available:</label>
            <br />
            <br />

            
            <input type="checkbox" name="isSpaAvailable" id="isSpaAvailable" value={formData.isSpaAvailable} />
            <label htmlFor="isSpaAvailable">Is Spa Available:</label>
            <br />
            <br />

            
            <input type="checkbox" name="isRestaurantAvailable" id="isRestaurantAvailable" value={formData.isRestautantAvailable} />
            <label htmlFor="isRestaurantAvailable">Is Restaurant Available:</label>
            <br />
            <br />

            
            <input type="text" name="photos" id="photos" value={formData.photos} onChange={handleChange}/>
            <label htmlFor="photos">Photos:</label>
            <br />
            <br />

            <button type="submit">Add Hotel</button>
            </form>

            
        </div>
    )
}

export default HotelForm