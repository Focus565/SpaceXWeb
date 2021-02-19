import { createContext, useCallback, useContext, useState } from 'react'

const IndexContext = createContext();

export const IndexProvider = (props) => {
    const [index, setIndex] = useState(0)
    const handleIndexChange = useCallback(
        (e) => {
            setIndex(e.target.value)
        }
    ,[])
    return (
        <IndexContext.Provider value={{
            index,
            handleIndexChange
        }}>
            {props.children}
        </IndexContext.Provider>
    )
}
export const IndexConsumer = IndexContext.Consumer
export const useIndex = () => useContext(IndexContext)
export default IndexContext