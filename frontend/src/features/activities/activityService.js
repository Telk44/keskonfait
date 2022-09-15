//create new activity
const API_URL = '/activity/'
const createActivity = async (activityData, token) => {
    const formData = new FormData();
    formData.append("imageURL", activityData.file)
    formData.append("title", activityData.title)
    formData.append("categoryId", activityData.categoryId)
    formData.append("ageId", activityData.ageId)
    formData.append("description", activityData.description)
    formData.append("startDate", activityData.startDate)
    formData.append("endDate", activityData.endDate)
    formData.append("price", activityData.price)
    formData.append("phone", activityData.phone)
    formData.append("bookingEmail", activityData.bookingEmail)

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    };

    const response = await fetch(API_URL, requestOptions)
    const data = await response.json();

    return data;
}


//Get user activities
const API_URL_GET = '/activity/user/'
const getActivities = async (userId, token) => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    const response = await fetch(API_URL_GET + userId, requestOptions)
    const data = await response.json();

    return data;

}

//Get one activity
const API_URL_ACTIVITY = '/activity/'
const getActivity = async (activityId) => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }
    };

    const response = await fetch(API_URL_ACTIVITY + activityId, requestOptions)

    const data = await response.json();
    console.log("la reponse de get one", data)
    return data;
}

//Get all activities
const API_URL_GET_ALL = '/activity/'
const getAllActivities = async () => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }
    };

    const response = await fetch(API_URL_GET_ALL, requestOptions)
    const data = await response.json();

    return data;
}

//modifyActivity

const activityService = {
    createActivity,
    getActivities,
    getActivity,
    getAllActivities,
}

export default activityService

