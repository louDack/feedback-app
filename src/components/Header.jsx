function Header({ text }) {
    const headerStyles = {
        backgroundColor: 'blue',
        color: 'red'
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

export default Header
