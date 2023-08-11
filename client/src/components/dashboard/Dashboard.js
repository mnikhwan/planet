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
          
        <table className="card">
          <tr>
            <td>
            <h2>
              Selamat datang, <b>{user.name}</b>!
              
            </h2>
            <p className="desk">Dibawah ini adalah menu untuk menjelajah Tata Surya dalam aplikasi ini<span role={'img'}>🤗.</span><br/>Silahkan Klik salah satu untuk mulai menjelajah!</p>
            </td>
          </tr>
          <tr className="btn-submenu">
            <td>
            <h4>
            <Link to="/materi">
              <button className="button btn-menu">Materi</button>
              </Link>
            </h4>
            </td>
            <td>
            <h4>
            <Link to="/latihan">
              <button className="button btn-menu">Latihan</button>
              </Link>
            </h4>
            </td>
            <td>
            <h4>
            <Link to="/peringkat">
              <button className="button btn-menu">Peringkat</button>
              </Link>
            </h4>
            </td>
          </tr>

          <tr>
            <td>
            <Link to="/peringkat">
              <button className="button btn-about">About App</button>
              </Link>
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
