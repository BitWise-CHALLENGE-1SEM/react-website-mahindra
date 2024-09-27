import styled from "styled-components";

export const LoginStyle = styled.section`

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(../src/assets/backgrounds/background-login.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    backdrop-filter: brightness(50%);
}

.wrapper{
    width: 420px;
    background: #222222;
    border: 2px solid rgba(255, 0, 0, 0.514);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .6);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
}

.wrapper h1{
    font-size: 36px;
    text-align: center;
}

.wrapper .input-box{
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
}

.input-box input{
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 0, 0, 0.514);
    border-radius: 40px;
}

.input-box input::placeholder{
    color: #fff;
}

.input-box i{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-40%);
    font-size: 20px;
}

.wrapper .remember-forgot{
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;

}

.remember-forgot label input{
    accent-color: rgba(255, 0, 0, 0.541);
    margin-right: 3px;
}

.remember-forgot a{
    color: #fff;
    text-decoration: none;
    transition: all .1s;
}

.remember-forgot a:hover{
    text-decoration: underline;
    transform: scale(1.02);
    transition: all .1s;
    color: rgba(255, 0, 0, 0.705);
}

.wrapper .btn{
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
}

.wrapper .register-link{
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
}

.register-link p a{
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: all .1s;
}

.register-link p a:hover{
    text-decoration: underline;
    transform: scale(1.02);
    color:rgba(255, 0, 0, 0.705);
    transition: all .1s;
}
`