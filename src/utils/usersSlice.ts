import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type userStateType = { email?: string | null; displayName?: string | null };
const initialState: userStateType = {};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logIn: (_, action: PayloadAction<userStateType>):userStateType=> {
     return action.payload;
    },
    signUp: (_, action: PayloadAction<userStateType>) => {
      return action.payload;
    },
    logOut: () => {
      return {};
    },
  },
});

export const { logIn, signUp, logOut } = usersSlice.actions;

export default usersSlice.reducer;
