import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div><center><h1>Navbar</h1></center></div>
            <nav><center>
                <NavLink to="/Page1">Page 1</NavLink>
                <br/>
                <NavLink to="/Page2">Page 2</NavLink>
                <br/>
                <NavLink to="/Page3">Page 3</NavLink>
                <br/>
                <NavLink to="/Page4">Page 4</NavLink>
                <br/>
                <NavLink to="/Page5">Page 5</NavLink>
            </center>
            </nav>
            <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 50px;
          background: #263b80;
          font-family: Arial, sans-serif;
        }

        .logo {
          color: white;
          font-size: 26px;
          margin: 0;
        }
        

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #ffcc66;
        }

        @media (max-width: 650px) {
          .navbar {
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
          }
        }
      `}</style>

    </>
  );
}

export default Navbar;
      