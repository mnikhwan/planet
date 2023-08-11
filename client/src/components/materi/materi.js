import React, { Component } from "react";
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
// import '../../assets/js/custom.js'
// import '../../assets/css/materi.css'
// <b>Selamat datang,</b> {user.name.split(" ")[0]}!
class Materi extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  m1 = () => {
    var element = document.getElementById("sun");
    const el = findDOMNode(element);
    $(el).slideToggle();
  }
  
  m2 = () => {
    var element = document.getElementById("mercury");
    const el = findDOMNode(element);
    $(el).slideToggle();
}
  m3 = () => {
    var element = document.getElementById("venus");
    const el = findDOMNode(element);
    $(el).slideToggle();
}
  m4 = () => {
    var element = document.getElementById("earth");
    const el = findDOMNode(element);
    $(el).slideToggle();
}
  m5 = () => {
    var element = document.getElementById("mars");
    const el = findDOMNode(element);
    $(el).slideToggle();
}
  m6 = () => {
    var element = document.getElementById("jupiter");
    const el = findDOMNode(element);
    $(el).slideToggle();
}
  m7 = () => {
    var element = document.getElementById("saturn");
    const el = findDOMNode(element);
    $(el).slideToggle();
}
  m8 = () => {
    var element = document.getElementById("uranus");
    const el = findDOMNode(element);
    $(el).slideToggle();
}
  m9 = () => {
    var element = document.getElementById("neptune");
    const el = findDOMNode(element);
    $(el).slideToggle();
}

  render() {
    const { user } = this.props.auth;

    

// function m1s() {
//     var element = document.getElementById("sun");
//     element.classList.add("hide");
// }


// function m2() {
//     var element = document.getElementById("mercury");
//     const el = findDOMNode(element);
    //$(el).slideToggle();
// }
// function m2s() {
//     var element = document.getElementById("mercury");
//     element.classList.add("hide");
// }


// function m3() {
//     var element = document.getElementById("venus");
//     const el = findDOMNode(element);
   // $(el).slideToggle();
// }
// function m3s() {
//     var element = document.getElementById("venus");
//     element.classList.add("hide");
// }


// function m4() {
//     var element = document.getElementById("earth");
//     const el = findDOMNode(element);
   // $(el).slideToggle();
// }
// function m4s() {
//     var element = document.getElementById("earth");
//     element.classList.add("hide");
// }


// function m5() {
//     var element = document.getElementById("mars");
//     const el = findDOMNode(element);
   // $(el).slideToggle();
// }
// function m5s() {
//     var element = document.getElementById("mars");
//     element.classList.add("hide");
// }


// function m6() {
//     var element = document.getElementById("jupiter");
//     const el = findDOMNode(element);
   // $(el).slideToggle();
// }
// function m6s() {
//     var element = document.getElementById("jupiter");
//     element.classList.add("hide");
// }


// function m7() {
//     var element = document.getElementById("saturn");
//     const el = findDOMNode(element);
   // $(el).slideToggle();
// }
// function m7s() {
//     var element = document.getElementById("saturn");
//     element.classList.add("hide");
// }


// function m8() {
//     var element = document.getElementById("uranus");
//     const el = findDOMNode(element);
   // $(el).slideToggle();
// }
// function m8s() {
//     var element = document.getElementById("uranus");
//     element.classList.add("hide");
// }


// function m9() {
//     var element = document.getElementById("neptune");
//     const el = findDOMNode(element);
   // $(el).slideToggle();
// }
// function m9s() {
//     var element = document.getElementById("neptune");
//     element.classList.add("hide");
// }


    return (
      <div className="desktop">
          <img className="stars-backgrounds" alt="Stars background" src="image/stars-background.png" />
          <img className="rocket-injectfloat" alt="Rocket inject" src="image/rocket-inject-1.png" />
          
        
        

<section className="tengah">
        <br/>
        <div className="wrapper">
			<div className="sun">
				<div className="star"></div>
			</div>
			<div className="murcury">
				<div className="planet">
					<div className="shadow"></div>
				</div>
			</div>
			<div className="venus">
				<div className="planet">
					<div className="shadow"></div>
				</div>
			</div>
			<div className="earth">
				<div className="planet">
					<div className="shadow"></div>
				</div>
			</div>
			<div className="mars">
				<div className="planet">
					<div className="shadow"></div>
				</div>
			</div>
			<div className="jupiter">
				<div className="planet">
					<div className="shadow"></div>
				</div>
			</div>
			<div className="saturn">
				<div className="planet">
					<div className="shadow"></div>
				</div>
			</div>
		</div>


</section>
<section className="bawah">
        <p className="desk">
            Halo <b>{user.name}</b>!👋🏻. Setiap planet dalam tata surya berada pada garis edar berbentuk elips yang disebut orbit. Selama tetip berada di orbitnya, Planet-Planet tersebut tidak saling bertubrukan. Planet-planet yang mengelilingi Matahari adalah Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus.
        </p>
        <div  className="cntr">
            
            <a className="ccard tombol" onClick={this.m1}>
                <img src="image/planet-icon/sun.png" alt="" srcset=""/>
                <p>Matahari</p>
            </a>
            <a className="ccard tombol" onClick={this.m2}>
                <img src="image/planet-icon/mercury.png" alt="" srcset=""/>
                <p>Merkurius</p>
            </a>
            <a className="ccard tombol" onClick={this.m3}>
                <img src="image/planet-icon/venus.png" alt="" srcset=""/>
                <p>Venus</p>
            </a>
            <a className="ccard tombol" onClick={this.m4}>
                <img src="image/planet-icon/earth.png" alt="" srcset=""/>
                <p>Bumi</p>
            </a>
            <a className="ccard tombol" onClick={this.m5}>
                <img src="image/planet-icon/mars.png" alt="" srcset=""/>
                <p>Mars</p>
            </a>
            <a className="ccard tombol" onClick={this.m6}>
                <img src="image/planet-icon/jupiter.png" alt="" srcset=""/>
                <p>Jupiter</p>
            </a>
            <a className="ccard tombol" onClick={this.m7}>
                <img src="image/planet-icon/saturn.png" alt="" srcset=""/>
                <p>Saturnus</p>
            </a>
            <a className="ccard tombol" onClick={this.m8}>
                <img src="image/planet-icon/uranus.png" alt="" srcset=""/>
                <p>Uranus</p>
            </a>
            <a className="ccard tombol" onClick={this.m9}>
                <img src="image/planet-icon/neptune.png" alt="" srcset=""/>
                <p>Neptunus</p>
            </a>
            {/* <Link className="ccard tombol" onclick="m9();">
                    <button className="button kembali tombol">
                    <img src="image/planet-icon/neptune.png" alt="" srcset=""/>
                <p>Neptunus</p>
                    </button>
                    </Link> */}
        </div>
        
        <Link to="/dashboard">
                    <button className="button kembali tombol">Kembali</button>
                    </Link>
</section>
    
    
    
    
    <section id="sun" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h1>Matahari</h1>
                <p>
                    Sistem tata surya menjadikan Matahari sebagai pusatnya. Matahari adalah sebuah bintang raksasa yang sangat panas seperti bola pijar. Disekeliling bola berpijar, ada lingkar cahaya berisi gas panas yang disebut corona. Suhu di permukaannya hampir 6000 derajat Celsius. Suhu inti Matahari mencapai 15.000.000 derajat Celsius. Percikan panasnya dapat membakar segala sesuatu hingga 97 kilometer. Namun, Matahari hanya tergolong bintang sedang. Masih banyak bintang besar yang jauh lebih besar dan lebih panas dari matahari.
                </p>
                <button className="kembali tombol" onClick={this.m1}>Kembali</button>
            </div>
        </div>
        
    </section>

    <section id="mercury" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h3>Merkurius</h3>
                <p>
                    Planet apa yang terdekat dengan Matahari? Planet ini bernama Merkurius. Planet Markurus berjarak limapuluh delapan juta kilometer dari Matahari. Merkurius sulit terlihat di langit pada malam hari jika dilihat dari Bumi. Markurius boru terlihat setelah ) Matahari terbenam, atau sebelum Matahari terbit... Keunikan dari Merkurius adalah melesat cepat mengelilingi Matahari, tetapi berotasi sangat lambat. Satu hari di Merkurius sama dengan 30 hari di Bumi.
                </p>
                <button className="kembali tombol" onClick={this.m2}>Kembali</button>
            </div>
        </div>
    </section>

    <section id="venus" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h3>Venus</h3>
                <p>
                    Planet berikutnya adalah planet Venus. Planet Venus merupakan planet terdekat dari Bumi. Venus lebih panas dibanding Merkurius yang lebih dekat dengan Matahari. Hal ini terjadi karena Planet Venus memiliki lapisan atmosfer tebal yang dilapisi awan. Oleh karena itu, pancaran sinar Matahari terperangkap di dalamnya. Awan yang mengelilingi Venus menjadi salah satu keunikan planet ini. Awan tersebut terlihat indah karena memantulkan cahaya Matahari. Selain itu, Venus menjadi planet paling terang di antara planet-planet dalam sistem tata surya. 
                </p>
                <button className="kembali tombol" onClick={this.m3}>Kembali</button>
            </div>
        </div>
    </section>

    <section id="earth" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h3>Bumi</h3>
                <p>
                    Planet ketiga adaloh Bumi yang disebut sebagai Planet Biru. Sebagian besar Bumi ditutupi oleh lautan, sehingga nampak biru. Bumi diselimuti oleh udara tebal yang disebut atmosfer. Fungsi dari atmosfer untuk menyaring ponos dari Matahari sehingga tidak terbakar.
                </p>
                <button className="kembali tombol" onClick={this.m4}>Kembali</button>
            </div>
        </div>
    </section>

    <section id="mars" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h3>Mars</h3>
                <p>
                    Planet setelah Bumi adalah Mars. Mars dijuluki sebagai Planet Merah. Planet ini disebut-sebut paling menyerupai Bumi. Satu hari di Mars sama dengan 24,6 jam di Bumi ia juga memiliki kutub yang diselimuti es. Suhu udara di Mars lebih dingin dari pada suhu di Bumi, yaitu sekitar 63 derajat Celsius di bawah nol, karena letak Mars yang lebih jauh dari Matahari dibanding Bumi Mars juga memiliki lapisan atmosfer, namun lebih tipis dibanding Bumi.
                </p>
                <button className="kembali tombol" onClick={this.m5}>Kembali</button>
            </div>
        </div>
    </section>

    <section id="jupiter" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h3>Jupiter</h3>
                <p>
                    Planet kelima adalah planet Jupiter. Jupiter adalah planet terbesar di dalam tata surya. Suhu di planet ini pun Sangat rendah, mencapai kurang lebih minus 100 derajat Celsius. Planet Jupiter merupakan planet yang sebagian besar terdiri atas gas. Letak inti planetnya pun jauh di tengah. Planet ini memiliki bintik merah yang ternyata merupakan badai raksasa.
                </p>
                <button className="kembali tombol" onClick={this.m6}>Kembali</button>
            </div>
        </div>
    </section>

    <section id="saturn" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h3>Saturnus</h3>
                <p>
                    Planet keenam dalam sistem tata surya adalah planet Saturnus. Saturnus memiliki cincin yang melingkari tubuhnya. Cincin tersebut terdiri atas lingkaran bebatuan, debu, dan es yang terperangkap dalam orbit mengelilingi planet tersebut. Saturnus merupakan gas raksasa yang berputar sangat cepat Hal ini menyebabkan bagian ekuatornya menggembung. Oleh sebab itu Kutubnya tampak lebih datar dibanding planet lainnya. Saturnus memiliki beberapa satelit yang lebih banyak dibanding Bumi yang hanya memiliki satu.
                </p>
                <button className="kembali tombol" onClick={this.m7}>Kembali</button>
            </div>
        </div>
    </section>

    <section id="uranus" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h3>Uranus</h3>
                <p>
                    Planet Uranus merupakan planet ketujuh dalam sistem tata surya. PlanetUranus berputar miring karena porosnya yang hampir sejajar dengan orbitnya. Suhu planet ini sangat dingin, yaitu sekitar minus 212 derajat Celsius.
                </p>
                <button className="kembali tombol" onClick={this.m8}>Kembali</button>
            </div>
        </div>
    </section>

    <section id="neptune" className="atas hide">
        <div className="card">
            <div className="img"></div>
            <div className="kanan">
                <h3>Neptunus</h3>
                <p>
                    Planet yang berada di urutan paling jauh dari Matahari adalah planet Neptunus Planet ini tampak berwana biru gelap dari kejauhan dan tidak memiliki permukaan yang nyata samahalnya dengan Jupiter, Saturnus, dan Uranus, planet ini juga terdiri atas gumpalan gas. Atmosfenya dipenuhi dengan gas metana, dan sering terjadi badai yang sangat besar.
                </p>
                <button className="kembali tombol" onClick={this.m9}>Kembali</button>
            </div>
        </div>
    </section>


        
      </div>
    );
  }
}

Materi.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Materi);



