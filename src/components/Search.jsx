import {ImSearch} from 'react-icons/im'
const Search = ({handleSearch}) => {
    return(
        <div className="search">
            <ImSearch className='search-icons' size="1.1em" />
            <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder='Type to search...' />
        </div>
    )
}

export default Search;