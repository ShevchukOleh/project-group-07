export const selectBoards = state => state.board.boards;
export const selectColumns = state => state.board.columns;
export const selectAllColumnCards = state => state.board.columnCards;
export const filteredAllCards = state => state.board.filteredAllCards;

export const selectBackgrounds = state => state.board.backgrounds;

export const selectLoading = state => state.board.loading;
export const selectError = state => state.board.error;
export const selectMyCards = state => state.board.cardsCollection;
export const selectedInPriority = state => state.board.selectedPriority;
