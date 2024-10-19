import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerName: "",
  items: [],
  discount: 0,
  totalPrice: 0,
  subtotal: 0,
  date: null,
  billNumber: 0,
};

export const formShowSlice = createSlice({
  name: "formShow",
  initialState,
  reducers: {
    addForm: {
      reducer(state, action) {
        const { customerName, items, discount, totalPrice, subtotal, date, billNumber } = action.payload;
        state.customerName = customerName;
        state.items = items;
        state.discount = discount;
        state.totalPrice = totalPrice;
        state.subtotal = subtotal;
        state.date = date;
        state.billNumber = billNumber;
      },
      prepare(data) {
        const { items, discount, billNumber } = data;
        const itemPrices = {
          Lichie: 50,
          Grapes: 45,
          Apple: 70,
          Mango: 85,
        };

        let subtotal = 0;
        items.forEach((item) => {
          subtotal += itemPrices[item];
        });

        const discountedPrice = subtotal - (Number(discount) * subtotal / 100);
        const date = new Date();
         const nextBillNumber = (billNumber ?? initialState.billNumber) + 1 ;
        console.log(typeof(billNumber));
        // const nextBillNumber = initialState.billNumber === null ? billNumber = 1 : billNumber+1  ;
        return {
          payload: { ...data, totalPrice: discountedPrice, subtotal, date, billNumber: nextBillNumber },
        };
      },
    },
  },
});

export const { addForm } = formShowSlice.actions;

export default formShowSlice.reducer;
