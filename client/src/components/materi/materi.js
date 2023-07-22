import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
// import '../../assets/css/materi.css'
// <b>Selamat datang,</b> {user.name.split(" ")[0]}!
class Materi extends Component {
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
          
        
        

<section class="tengah">
        <br/>
        <div class="wrapper">
			<div class="sun">
				<div class="star"></div>
			</div>
			<div class="murcury">
				<div class="planet">
					<div class="shadow"></div>
				</div>
			</div>
			<div class="venus">
				<div class="planet">
					<div class="shadow"></div>
				</div>
			</div>
			<div class="earth">
				<div class="planet">
					<div class="shadow"></div>
				</div>
			</div>
			<div class="mars">
				<div class="planet">
					<div class="shadow"></div>
				</div>
			</div>
			<div class="jupiter">
				<div class="planet">
					<div class="shadow"></div>
				</div>
			</div>
			<div class="saturn">
				<div class="planet">
					<div class="shadow"></div>
				</div>
			</div>
		</div>


</section>
<section class="bawah">
        <p class="desk">
            Halo <b>{user.name}</b>!👋🏻. Setiap planet dalam tata surya berada pada garis edar berbentuk elips yang disebut orbit. Selama tetip berada di orbitnya, Planet-Planet tersebut tidak saling bertubrukan. Planet-planet yang mengelilingi Matahari adalah Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus.
        </p>
        <div  class="cntr">
            
            <a class="ccard tombol" onclick="m1();">
                <img src="image/planet-icon/sun.png" alt="" srcset=""/>
                <p>Matahari</p>
            </a>
            <a class="ccard tombol" onclick="m2();">
                <img src="image/planet-icon/mercury.png" alt="" srcset=""/>
                <p>Merkurius</p>
            </a>
            <a class="ccard tombol" onclick="m3();">
                <img src="image/planet-icon/venus.png" alt="" srcset=""/>
                <p>Venus</p>
            </a>
            <a class="ccard tombol" onclick="m4();">
                <img src="image/planet-icon/earth.png" alt="" srcset=""/>
                <p>Bumi</p>
            </a>
            <a class="ccard tombol" onclick="m5();">
                <img src="image/planet-icon/mars.png" alt="" srcset=""/>
                <p>Mars</p>
            </a>
            <a class="ccard tombol" onclick="m6();">
                <img src="image/planet-icon/jupiter.png" alt="" srcset=""/>
                <p>Jupiter</p>
            </a>
            <a class="ccard tombol" onclick="m7();">
                <img src="image/planet-icon/saturn.png" alt="" srcset=""/>
                <p>Saturnus</p>
            </a>
            <a class="ccard tombol" onclick="m8();">
                <img src="image/planet-icon/uranus.png" alt="" srcset=""/>
                <p>Uranus</p>
            </a>
            <a class="ccard tombol" onclick="m9();">
                <img src="image/planet-icon/neptune.png" alt="" srcset=""/>
                <p>Neptunus</p>
            </a>
            
        </div>
        
        <Link to="/dashboard">
                    <button className="button kembali tombol">Kembali</button>
                    </Link>
</section>
    
    
    
    
    <section id="sun" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h1>Matahari</h1>
                <p>
                    Sistem tata surya menjadikan Matahari sebagai pusatnya. Matahari adalah sebuah bintang raksasa yang sangat panas seperti bola pijar. Disekeliling bola berpijar, ada lingkar cahaya berisi gas panas yang disebut corona. Suhu di permukaannya hampir 6000 derajat Celsius. Suhu inti Matahari mencapai 15.000.000 derajat Celsius. Percikan panasnya dapat membakar segala sesuatu hingga 97 kilometer. Namun, Matahari hanya tergolong bintang sedang. Masih banyak bintang besar yang jauh lebih besar dan lebih panas dari matahari.
                </p>
            </div>
        </div>
        <a class="kembali tombol" onclick="m1s()">Kembali</a>
    </section>

    <section id="mercury" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h3>Merkurius</h3>
                <p>
                    Planet apa yang terdekat dengan Matahari? Planet ini bernama Merkurius. Planet Markurus berjarak limapuluh delapan juta kilometer dari Matahari. Merkurius sulit terlihat di langit pada malam hari jika dilihat dari Bumi. Markurius boru terlihat setelah ) Matahari terbenam, atau sebelum Matahari terbit... Keunikan dari Merkurius adalah melesat cepat mengelilingi Matahari, tetapi berotasi sangat lambat. Satu hari di Merkurius sama dengan 30 hari di Bumi.
                </p>
            </div>
        </div>
        <a class="kembali tombol" onclick="m2s()">Kembali</a>
    </section>

    <section id="venus" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h3>Venus</h3>
                <p>
                    Planet berikutnya adalah planet Venus. Planet Venus merupakan planet terdekat dari Bumi. Venus lebih panas dibanding Merkurius yang lebih dekat dengan Matahari. Hal ini terjadi karena Planet Venus memiliki lapisan atmosfer tebal yang dilapisi awan. Oleh karena itu, pancaran sinar Matahari terperangkap di dalamnya. Awan yang mengelilingi Venus menjadi salah satu keunikan planet ini. Awan tersebut terlihat indah karena memantulkan cahaya Matahari. Selain itu, Venus menjadi planet paling terang di antara planet-planet dalam sistem tata surya. 
                </p>
            </div>
        </div>
        <a class="kembali tombol" onclick="m3s()">Kembali</a>
    </section>

    <section id="earth" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h3>Bumi</h3>
                <p>
                    Planet ketiga adaloh Bumi yang disebut sebagai Planet Biru. Sebagian besar Bumi ditutupi oleh lautan, sehingga nampak biru. Bumi diselimuti oleh udara tebal yang disebut atmosfer. Fungsi dari atmosfer untuk menyaring ponos dari Matahari sehingga tidak terbakar.
                </p>
            </div>
        </div>
        <a class="kembali tombol" onclick="m4s()">Kembali</a>
    </section>

    <section id="mars" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h3>Mars</h3>
                <p>
                    Planet setelah Bumi adalah Mars. Mars dijuluki sebagai Planet Merah. Planet ini disebut-sebut paling menyerupai Bumi. Satu hari di Mars sama dengan 24,6 jam di Bumi ia juga memiliki kutub yang diselimuti es. Suhu udara di Mars lebih dingin dari pada suhu di Bumi, yaitu sekitar 63 derajat Celsius di bawah nol, karena letak Mars yang lebih jauh dari Matahari dibanding Bumi Mars juga memiliki lapisan atmosfer, namun lebih tipis dibanding Bumi.
                </p>
            </div>
        </div>
        <a class="kembali tombol"onclick="m5s()">Kembali</a>
    </section>

    <section id="jupiter" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h3>Jupiter</h3>
                <p>
                    Planet kelima adalah planet Jupiter. Jupiter adalah planet terbesar di dalam tata surya. Suhu di planet ini pun Sangat rendah, mencapai kurang lebih minus 100 derajat Celsius. Planet Jupiter merupakan planet yang sebagian besar terdiri atas gas. Letak inti planetnya pun jauh di tengah. Planet ini memiliki bintik merah yang ternyata merupakan badai raksasa.
                </p>
            </div>
        </div>
        <a class="kembali tombol" onclick="m6s()">Kembali</a>
    </section>

    <section id="saturn" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h3>Saturnus</h3>
                <p>
                    Planet keenam dalam sistem tata surya adalah planet Saturnus. Saturnus memiliki cincin yang melingkari tubuhnya. Cincin tersebut terdiri atas lingkaran bebatuan, debu, dan es yang terperangkap dalam orbit mengelilingi planet tersebut. Saturnus merupakan gas raksasa yang berputar sangat cepat Hal ini menyebabkan bagian ekuatornya menggembung. Oleh sebab itu Kutubnya tampak lebih datar dibanding planet lainnya. Saturnus memiliki beberapa satelit yang lebih banyak dibanding Bumi yang hanya memiliki satu.
                </p>
            </div>
        </div>
        <a class="kembali tombol" onclick="m7s()">Kembali</a>
    </section>

    <section id="uranus" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h3>Uranus</h3>
                <p>
                    Planet Uranus merupakan planet ketujuh dalam sistem tata surya. PlanetUranus berputar miring karena porosnya yang hampir sejajar dengan orbitnya. Suhu planet ini sangat dingin, yaitu sekitar minus 212 derajat Celsius.
                </p>
            </div>
        </div>
        <a class="kembali tombol" onclick="m8s()">Kembali</a>
    </section>

    <section id="neptune" class="atas hide">
        <div class="card">
            <div class="img"></div>
            <div class="kanan">
                <h3>Neptunus</h3>
                <p>
                    Planet yang berada di urutan paling jauh dari Matahari adalah planet Neptunus Planet ini tampak berwana biru gelap dari kejauhan dan tidak memiliki permukaan yang nyata samahalnya dengan Jupiter, Saturnus, dan Uranus, planet ini juga terdiri atas gumpalan gas. Atmosfenya dipenuhi dengan gas metana, dan sering terjadi badai yang sangat besar.
                </p>
            </div>
        </div>
        <a class="kembali tombol" onclick="m9s()">Kembali</a>
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



