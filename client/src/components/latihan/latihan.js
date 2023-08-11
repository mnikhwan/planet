import React, { Component } from "react";
// import axios from "axios"; - useEffect, useState,
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import {SoalData} from './SoalData';
// import '../../assets/js/custom.js'
// import '../../assets/css/materi.css'
// <b>Selamat datang,</b> {user.name.split(" ")[0]}!

class Latihan extends Component {
    
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };


  state = {
    userAnswer:null,    //current users answer
    currentIndex:0,  //current questions index
    options: [],       //the four options
    SoalEnd: false,
    score: 0,
    disabled: true
}
    

    //Component that holds the current quiz
    loadSoal = () => {
        const {currentIndex} = this.state //get the current index
        this.setState(() => {
            return {
                question: SoalData[currentIndex].question,
                options : SoalData[currentIndex].options,
                answer: SoalData[currentIndex].answer          
            }
        }
        )
    }

    //Handles Click event for the next button
    nextQuestionHander = () => {
        const {userAnswer, answer, score} = this.state
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })

        //Check for correct answer and increment score
        if(userAnswer === answer){
            this.setState({
                score: score + 10
            })
        }
    }

    //Load the quiz once the component mounts
    componentDidMount(){
        this.loadSoal();
    }

    //Update the component
    componentDidUpdate(prevProps, prevState){
        const{currentIndex} = this.state;
        if(this.state.currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                    disabled: true,
                    question: SoalData[currentIndex].question,
                    options : SoalData[currentIndex].options,
                    answer: SoalData[currentIndex].answer          
                }
            });

        }
    }

    //Check the answer
    checkAnswer = answer => {
        const {userAnswer, score} = this.state
        if(userAnswer === answer){
            this.setState({
                score: score + 10
            })
        }
        this.setState({
            userAnswer: answer,
            disabled:false
        })
    }

    //Responds to the click of the finish button
    finishHandler =() => {
        if(this.state.currentIndex === SoalData.length -1){
            this.setState({
                SoalEnd:true
            })
        }

    }


  render() {
    
      
    const { user } = this.props.auth;

    const {question, options, currentIndex, userAnswer, SoalEnd} = this.state //get the current state       
        if(SoalEnd) {
            return (
                <div className="desktop">
          <img className="stars-backgrounds" alt="Stars background" src="image/stars-background.png" />
          <section className="mainsoals">
                    <h1>Horee🎉Latihan Selesai. <br/> Kamu mendapatkan skor akhir: {this.state.score} Poin✨</h1>
                    <h3>Kamu dapat mengecek peringkat kamu pada Menu Peringkat di dashboard🤗</h3>
                    <p>Dibawah ini adalah jawaban benar dari soal latihan tadi:</p>
                    <ul>
                        {SoalData.map((item, index) => (
                            <li className='options'
                                key={index}>
                                    {item.answer}
                            </li>
                     ))}
                    </ul>
                    <Link to="/dashboard">
                    <button className="button kembali tombol">Kembali</button>
                    </Link>
                </section>
                </div>
            )
        }
        
        // const loginUser = async (e) => {
        //     e.preventDefault()
        //     const [datauser, setData] = useState();
        //     const {nisn, email, password} = datauser;
        //     try {
        //       const {datauser} = await axios.post('/login').then(response => {
        //         setData(response.json())
        //       });
        //       // const { data: responseData } = await response;
        
        //       if(data.error){
        //         toast.error(data.error)
        //       } else {
        //         // localStorage.setItem('token', res.data)
        //         setData({});
        //         // setUser(data.user);
        //         toast.success(`Berhasil Masuk, Selamat Datang!`)
        //         navigate('/menu');
                
        //       }
        //     } catch (error) {
        //     }
        //   }
        
    //     async function a(){
    //         await fetch('/api/users').then(response => {
    //          console.log(response.json())
    //        });

    //    }
    //    a();
              // const { data: responseData } = await response;
        

    return (
      <div className="desktop">
          <img className="stars-backgrounds" alt="Stars background" src="image/stars-background.png" />
          

          <div className="lat-atas">
          <p className="deskk">
            <h4>Latihan dalam mengenal Tata Surya</h4>
            
            <span>
            
              Nama    : {user.name}<br/>
              Nisn    : {user.nisn}<br/>
              Sekolah : {user.sekolah}<br/>
            
            </span>
        </p>
          <section className="mainsoal">
            <h4>
              <b>Pilih salah satu jawaban yang kamu anggap benar!</b>
            </h4>
            <div className="masuksoal">
                <span className="no-soal">{`Soal nomor ${currentIndex+1} dari ${SoalData.length}`}</span>
               <h2>{question}</h2>
                <div className="jawaban">
                {options.map(option => (  //for each option, new paragraph
                    <p key={option.id} 
                    className={`options ${userAnswer === option ? "selected" : null}`}
                    onClick= {() => this.checkAnswer(option)}>
                        {option}
                    </p>
                ))}
                </div>
                {currentIndex < SoalData.length -1 &&  
                // Next button only displays if the above is true
                <button 
                    className="ui inverted button-jwb" 
                    disabled = {this.state.disabled}
                    onClick = {this.nextQuestionHander}
                 >Selanjutnya</button>
                }
                 {currentIndex === SoalData.length -1 &&
                    <button
                    className="ui inverted button-jwb"
                    disabled = {this.state.disabled}
                    onClick = {this.finishHandler}
                    >Selesai✨</button>
                 }
            </div>
            
            
            

          </section>

          </div>
      </div>
    );
  }
}

Latihan.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Latihan);



