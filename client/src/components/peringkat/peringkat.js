
 import React, { useContext, Component, useEffect, useState } from "react";
 import axios from "axios";
 import PropTypes from "prop-types";
 import { connect } from "react-redux";
 import { Link } from "react-router-dom";
 import { logoutUser, SkorData } from "../../actions/authActions";
 import $ from 'jquery';
 import "jquery-ui-dist/jquery-ui";
 
 class Peringkat extends Component {



     
   onLogoutClick = (e) => {
     e.preventDefault();
     this.props.logoutUser();
   };
   onSkorData = async (e) => {
     e.preventDefault();
     let a = this.props.SkorData();
     console.log(a);
   };
   

  //  const spotiflagu = document.getElementById("lagu");
  //  const spotifartis=document.getElementById("artis");
  //  async function spotifys(){
  //  const response=await fetch("https://api.lanyard.rest/v1/users/323017866867900416");
  //  const jsonData=await response.json();
  //  const songs = jsonData.data.spotify;
  //  spotiflagu.innerHTML=songs.song;
  //  spotifartis.innerHTML=songs.artist;
  //  };
  //  setInterval(spotifys,5000);

   render() {
    // const [countries, setCountries] = useState([]);

    
    // useEffect(() => {
    //   axios.get('/api/users/alluserdata')
    //   .then((res) => res.json())
    //   .then(data => {
    //     console.log(Object.keys(data))
    //   })
    //   .catch(err => 
    //     console.log(err))
    //   }, [])
    
   
    // const { nama } = this.state;

    $.get( "http://localhost:3000/alluserdata", function( data ) {
      alert( "Data Loaded: " + data );
    });

             return (
                 <div className="desktop">
           <img className="stars-backgrounds" alt="Stars background" src="image/stars-background.png" />
           <section className="mainsoals">
                     {/* <h1>Horee🎉Latihan Selesai. <br/> Kamu mendapatkan skor akhir: {this.state.score} Poin✨</h1> */}
                     <h3>Kamu dapat mengecek peringkat kamu pada Menu Peringkat di dashboard🤗</h3>
                     <button onClick={this.onSkorData} className="btn btn-large waves-effect waves-light hoverable blue accent-3">Refresh Peringkat</button>
                     {/* <button onClick={nama}></button> */}
                     {/* {AllData.map(c => <li key={c}>{c}</li>)} */}
                     {/* {!!nama && (<h2> Hi {nama}!</h2>)} */}
                     <p>Dibawah ini adalah jawaban benar dari soal latihan tadi:</p>
                     <ul>
                     {/* {nama.map(c => <li key={c}>{c}</li>)} */}
                     {/* {countries.map(c => <li key={c}>{c}</li>)} */}
                     </ul>
                     {/* <ul>
                         {SoalData.map((item, index) => (
                             <li className='options'
                                 key={index}>
                                     {item.answer}
                             </li>
                      ))}
                     </ul> */}






                     <Link to="/dashboard">
                     <button className="button kembali tombol">Kembali</button>
                     </Link>
                 </section>
                 </div>
             )
         
   }
 }
 
 Peringkat.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
 };
 
 const mapStateToProps = (state) => ({
   auth: state.auth,
 });
 
 export default connect(mapStateToProps, { logoutUser, SkorData })(Peringkat);
 
 
 
 