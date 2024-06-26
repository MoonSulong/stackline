import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { ProductType, SaleType, fetchRetailData } from '../../mock/mockAPI';

export interface RetailState {
  retail: ProductType[],
  product: ProductType | null,
  sales: SaleType[],
  loading: boolean,
  error: boolean,
}

const initialState: RetailState = {
  retail: [],
  product: null,
  sales: [],
  loading: true,
  error: false,
};

// The function below is called a thunk and allows us to perform async logic.
export const fetchAsync = createAsyncThunk(
  'retail/fetchData',
  async () => {
    const response = await fetchRetailData();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const retailSlice = createSlice({
  name: 'retail',
  initialState,
  // This is empty because no extra action needed except fetching data
  reducers: {
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAsync.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
        state.retail = action.payload;
        state.product = action.payload[0];
        state.sales = action.payload[0].sales;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.retail.xxx)`
export const selectProduct = (state: RootState) => state.retail.product;
export const selectLoading = (state: RootState) => state.retail.loading;
export const selectSales = (state: RootState) => state.retail.sales;


export default retailSlice.reducer;
