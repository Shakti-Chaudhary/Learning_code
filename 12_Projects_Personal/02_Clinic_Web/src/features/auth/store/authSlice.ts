import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User { id: string; name: string; role: 'ADMIN' | 'USER'; email: string; }
interface AuthState { user: User | null; loading: boolean; error: string | null; }

const initialState: AuthState = { user: null, loading: false, error: null };

export const loginUser = createAsyncThunk('auth/login', async (data: any, { rejectWithValue }) => {
  try {
    // Simulated API Call
    return { id: '1', name: 'John Doe', role: 'ADMIN', email: 'admin@clinic.com' } as User;
  } catch (err: any) {
    return rejectWithValue('Invalid Credentials');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => { state.user = null; localStorage.removeItem('token'); },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
