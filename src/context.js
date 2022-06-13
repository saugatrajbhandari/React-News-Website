import React, { useReducer, useEffect } from "react"
import reducer from "./reducer"

let initialState = {
    isLoading: true,
    query: '',
    nbPages: 0,
    page: 0,
    hits: [],

}

let url = 'https://hn.algolia.com/api/v1/search?';


const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const fetchApiData = async (url) => {
        dispatch({type: "SET_LOADING"})
        try{
            const response = await fetch(url)
            const data = await response.json()
            dispatch({type:"GET_STORIES", payload:{
                hits: data.hits,
                nbPages: data.nbPages,
            }})
            console.log(data)
        } catch(error){
            console.log(error);
        }
    }

    const getPrevPage = () => {
        dispatch({type:'PREV_PAGE'})
    }

    const getNextPage = () => {
        dispatch({type:'NEXT_PAGE'})
    }

    const removePost = (objectID) => {
        dispatch({type:'REMOVE_POST', payload: objectID})
    }

    const searchData = (data) => {
        dispatch({type:'SEARCH_DATA', payload:data})
    }

    useEffect(()=>{
        fetchApiData(`${url}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])

    return(
        <AppContext.Provider value={{...state, removePost, searchData, getNextPage, getPrevPage}}>   
        {children}
    </AppContext.Provider>
    )
}

export {AppContext, AppProvider}