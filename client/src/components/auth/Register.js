import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import {toast} from 'react-hot-toast';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nisn: "",
      sekolah: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      toast.success(`Berhasil Masuk, Selamat Datang!`)
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      nisn: this.state.nisn,
      sekolah: this.state.sekolah,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (

      <div className="desktop">
        <img className="stars-backgrounds" alt="Stars background" src="image/stars-background.png" />

    <form noValidate onSubmit={this.onSubmit}>
    
      <h3>Daftar Akun</h3>
      <div>
      <label htmlFor="name">Nama</label>
      <input
      onChange={this.onChange}
      value={this.state.name}
      error={errors.name}
      id="name"
      type="text"
      className={classnames("", {invalid: errors.name,})} required/>
      <br/>
      <span className="red-text">{errors.name}</span>
      </div>
      <div>
      <label htmlFor="nisn">Nisn</label>
      <input
      onChange={this.onChange}
      value={this.state.nisn}
      error={errors.nisn}
      id="nisn"
      type="text"
      className={classnames("", {invalid: errors.nisn,})} required/>
      <br/>
      <span className="red-text">{errors.nisn}</span>
      </div>
      <div>
      <label htmlFor="name">Sekolah</label>
      <input
      onChange={this.onChange}
      value={this.state.sekolah}
      error={errors.sekolah}
      id="sekolah"
      type="text"
      className={classnames("", {invalid: errors.sekolah,})} required/>
      <br/>
      <span className="red-text">{errors.sekolah}</span>
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input
      onChange={this.onChange}
      value={this.state.email}
      error={errors.email}
      id="email"
      type="email"
      className={classnames("", {
      invalid: errors.email,})} required/>
      <br/>
      <span className="red-text">{errors.Email}</span>
      </div>
      <div>
      <label htmlFor="password">Password</label>
      <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,})} required/>
                    <br/>
      <span className="red-text">{errors.password}</span>
      </div>
      <div>
      <label htmlFor="password2">Confirm Password</label>
      <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                /><br/>
      <span className="red-text">{errors.password2}</span>
      </div>
      
      <button type='submit'>Daftar</button>
      {/* <Link to="/" className="btn-flat waves-effect">Back</Link> */}
      <p>Sudah mempunyai akun? <Link to='/login'>Masuk Sekarang</Link>.</p>
    </form>

    </div>






      // <div className="container">
      //   <div className="row">
      //     <div className="col s8 offset-s2">
      //       <Link to="/" className="btn-flat waves-effect">
      //         <i className="material-icons left">keyboard_backspace</i> Back to
      //         home
      //       </Link>

      //       <div className="col s12" style={{ paddingLeft: "11.250px" }}>
      //         <h4>
      //           <b>Register</b> below
      //         </h4>
      //         <p className="grey-text text-darken-1">
      //           Already have an account? <Link to="/login">Log in</Link>
      //         </p>
      //       </div>

      //       <form noValidate onSubmit={this.onSubmit}>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.name}
      //             error={errors.name}
      //             id="name"
      //             type="text"
      //             className={classnames("", {
      //               invalid: errors.name,
      //             })}
      //           />
      //           <label htmlFor="name">Name</label>
      //           <span className="red-text">{errors.name}</span>
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.nisn}
      //             error={errors.nisn}
      //             id="nisn"
      //             type="text"
      //             className={classnames("", {
      //               invalid: errors.nisn,
      //             })}
      //           />
      //           <label htmlFor="nisn">Nisn</label>
      //           <span className="red-text">{errors.nisn}</span>
      //         </div>
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.sekolah}
      //             error={errors.sekolah}
      //             id="sekolah"
      //             type="text"
      //             className={classnames("", {
      //               invalid: errors.sekolah,
      //             })}
      //           />
      //           <label htmlFor="sekolah">Sekolah</label>
      //           <span className="red-text">{errors.sekolah}</span>
      //         </div>

      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.email}
      //             error={errors.email}
      //             id="email"
      //             type="email"
      //             className={classnames("", {
      //               invalid: errors.email,
      //             })}
      //           />
      //           <label htmlFor="email">Email</label>
      //           <span className="red-text">{errors.email}</span>
      //         </div>

      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password}
      //             error={errors.password}
      //             id="password"
      //             type="password"
      //             className={classnames("", {
      //               invalid: errors.password,
      //             })}
      //           />
      //           <label htmlFor="password">Password</label>
      //           <span className="red-text">{errors.password}</span>
      //         </div>

      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password2}
      //             error={errors.password2}
      //             id="password2"
      //             type="password"
      //             className={classnames("", {
      //               invalid: errors.password2,
      //             })}
      //           />
      //           <label htmlFor="password2">Confirm Password</label>
      //           <span className="red-text">{errors.password2}</span>
      //         </div>

      //         <div className="col s12" style={{ paddingLeft: "11.250px" }}>
      //           <button
      //             style={{
      //               width: "150px",
      //               borderRadius: "3px",
      //               letterSpacing: "1.5px",
      //               marginTop: "1rem",
      //             }}
      //             type="submit"
      //             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //           >
      //             Sign up
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
