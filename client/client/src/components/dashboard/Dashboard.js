import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// <b>Selamat datang,</b> {user.name.split(" ")[0]}!
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="desktop">
          <img className="stars-backgrounds" alt="Stars background" src="image/stars-background.png" />
          <img className="rocket-injectfloat" alt="Rocket inject" src="image/rocket-inject-1.png" />
          
        <table>
          <tr>
            <td>
            <h4>
              <b>Selamat datang,</b> {user.name}!
              
            </h4>
            </td>
          </tr>
          <tr>
            <td>
            <h4>
            <Link to="/materi">
              <button className="button">Materi</button>
              </Link>
            </h4>
            </td>
            <td>
            <h4>
            <button>Games</button>
            </h4>
            </td>
            <td>
            <h4>
            <button>Peringkat</button>
            </h4>
            </td>
          </tr>
          
        </table>
        <table>
          <tr>
            <td>
            <h4>
              <b>Profile</b>
            </h4>
            </td>
          </tr>
          <tr>
            <td>
            <p>
              Nama    :<br/>
              Nisn    :<br/>
              Sekolah :<br/>
              Email   :<br/>
            </p>
            </td>
            <td>
            <p>
              {user.name}<br/>
              {user.nisn}<br/>
              {user.sekolah}<br/>
              {user.email}<br/>
              </p>
            </td>
          </tr>
          <tr>
            <td>
            <h4>
              Logout?
              <button onClick={this.onLogoutClick} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Logout
            </button>
            </h4>
            </td>
          </tr>
          
        </table>


        
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
