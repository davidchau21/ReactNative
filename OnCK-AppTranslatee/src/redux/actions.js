export const setUser = (user) => ({type: 'SET_USER', user});
export const addVocabulary = (english, vietnamese) => ({type:'ADD_VOCABULARY',english, vietnamese});
export const deleteVocabulary = (id) => ({type:'DELETE_VOCABULARY',id});