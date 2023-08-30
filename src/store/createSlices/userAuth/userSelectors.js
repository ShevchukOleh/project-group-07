export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUser = state => state.user.user;
export const selectToken = state => state.user.token;
export const selectLoading = state => state.user.loading;
export const selectError = state => state.user.error;
export const getCurrentUser = state => state.user.currentUser;

// example // use in component ==>
// const isLoggedIn = useSelector(selectIsLoggedIn);
//  console.log(isLoggedIn);
