import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import activityService from './activityService'


const initialState = {
    activities: [],
    activity:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

//create new activity
export const createActivity = createAsyncThunk(' activities /create', async (activityData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        // const userId = thunkAPI.getState().auth.user.userId
        // console.log("le user trouvé est ",userId)
        return await activityService.createActivity(activityData, token)

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//Get user activities
export const getActivities = createAsyncThunk(' activities /getAll ', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token

        return await activityService.getActivities(thunkAPI.getState().auth.user.userId, token )

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//Get user activity
export const getActivity = createAsyncThunk(' activities /get', async (activityId, thunkAPI) => {
    try {
        // const token = thunkAPI.getState().auth.user.token

        return await activityService.getActivity(activityId )

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//Get all activities
export const getAllActivities = createAsyncThunk(' activities /all ', async (_, thunkAPI) => {
    try {

        return await activityService.getAllActivities()

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})




export const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createActivity.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createActivity.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createActivity.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getActivities.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getActivities.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.activities = action.payload
            })
            .addCase(getActivities.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getActivity.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getActivity.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.activity = action.payload
            })
            .addCase(getActivity.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllActivities.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllActivities.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.activities = action.payload
            })
            .addCase(getAllActivities.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { reset } = activitySlice.actions
export default activitySlice.reducer