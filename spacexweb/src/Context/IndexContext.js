import { createContext, useCallback, useContext, useState } from 'react'

const IndexContext = createContext();

export const IndexProvider = (props) => {
    const [indexValue, setIndex] = useState(0)
    const handleIndexChange = (index) => {
        setIndex(index)
    }
    return (
        <IndexContext.Provider value={{
            indexValue,
            handleIndexChange
        }}>
            {props.children}
        </IndexContext.Provider>
    )
}
export const IndexConsumer = IndexContext.Consumer
export const useIndex = () => useContext(IndexContext)
export default IndexContext