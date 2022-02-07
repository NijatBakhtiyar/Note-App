 const Header = ({toggleMode}) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button onClick={() => toggleMode(a => !a)} className="toggle">Toggle Mode</button>
        </div>
    )
}

export default Header;