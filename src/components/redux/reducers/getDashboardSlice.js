import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDashboardData = createAsyncThunk(
  "fetchDashboardData",
  async () => {
    const response = await fetch(
      "https://listed-backend-aman.onrender.com/dashboard"
    ).then((res) => res.json());

    // console.log(response);
    // console.log("Reducer call");
    return response;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    isLoading: true,
    data: {},
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDashboardData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDashboardData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchDashboardData.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default dashboardSlice.reducer;
