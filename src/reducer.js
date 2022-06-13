const reducer = (state, action) => {
    switch(action.type){
        case "GET_STORIES":
            return {
                ...state, 
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
            
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "REMOVE_POST":
            return{
                ...state, 
                hits: state.hits.filter((curEl) => {
                    return curEl.objectId !== action.payload;
                })
            }

        case "SEARCH_DATA":
            return{
                ...state, 
                query: action.payload
            }
        
        case "PREV_PAGE":
            let pageNumDec = state.page -1
            if(pageNumDec <= 0){
                pageNumDec = 0
            }
            return {
                ...state,
                page: pageNumDec
            }


        case "NEXT_PAGE":
            let pageNum = state.page +1;
            if(pageNum >= state.nbPages){
                pageNum = 0
            }
            return {
                ...state, 
                page: pageNum
            }
        default:
            break
    }
    
}

export default reducer