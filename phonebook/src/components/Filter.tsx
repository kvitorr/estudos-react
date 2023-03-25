type Filter = {
    searchTerm: string
    handleSearchTermOnChange: any
}


const Filter: React.FC<Filter> = ({searchTerm, handleSearchTermOnChange}) => {
    
    return (
        <div>
            filter shown with: <input value={searchTerm} onChange={handleSearchTermOnChange}/>
        </div>
    )
}

export default Filter