    export function Navbar({address, setView})
   {
    return(
    <div className="navbar-container">
        <div className="navbar">
        <div onClick = {() => setView("home")}>Home</div>
        <div onClick = {() => setView("profile")}>My Profile</div>
        </div>
        <div className="user-account">
            It's Good To See Yaa, {address}
        </div>
        </div>
   )
    }
