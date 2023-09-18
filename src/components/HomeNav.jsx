import { NavLink } from "react-router-dom";

function HomeNav() {
  const buttonStyle = {
    backgroundColor: '#393939',
    color: 'white',
    borderRadius: '10px',
    padding: '5px 15px',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: '10px'
  };

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col">
          <NavLink to={'/meals/Breakfast'} className="btn btn-sm" style={buttonStyle}>
            <h4 style={{ margin: 0 }}>Breakfast</h4>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={'/meals/Lunch'} className="btn btn-sm" style={buttonStyle}>
            <h4 style={{ margin: 0 }}>Lunch</h4>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={'/meals/Dinner'} className="btn btn-sm" style={buttonStyle}>
            <h4 style={{ margin: 0 }}>Dinner</h4>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to={'/meals/Dessert'} className="btn btn-sm" style={buttonStyle}>
            <h4 style={{ margin: 0 }}>Dessert</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
