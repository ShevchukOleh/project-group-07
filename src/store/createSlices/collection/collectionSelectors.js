export const selectTodos = state => state.collectionTask.todos;
export const selectLoading = state => state.collectionTask.loading;
export const selectError = state => state.collectionTask.error;
// example // use in component ==>
// const isLoggedIn = useSelector(selectError);
//  console.log(isLoggedIn);
