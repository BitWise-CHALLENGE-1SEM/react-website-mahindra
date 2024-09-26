import styled from "styled-components";
export const HomeStyle = styled.section`

/* .secao1{
    padding-top: 150px;
    position: relative;
    background-image: radial-gradient( #444444 ,#222222 );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    border-bottom: 8px solid #242424b6 ;
}

.secao1 h3{
    color: white;
    padding-bottom: 50px;
    font-size: 37px;
    text-transform: uppercase;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 1.5px;
}

.slider{
    padding: 0 0 0 410px;
    width: 100%;
    height: 620px;
    overflow: hidden;
}

.slides{
    width: 310%;
    height: 650px;
    display: flex;
}

.slides input{
    display: none;
}

.slide{
    width: 25%;
    position: relative;
    transition: 2s;
}

.slide img{
    width: 93%;
    height: 80%;
    border: 8px solid var(--color5);
}

#radio1:checked ~ .first{
    margin-left: 0;

}

#radio2:checked ~ .first{
    margin-left: -25%;

}

#radio3:checked ~ .first{
    margin-left: -50%;

}

#radio4:checked ~ .first{
    margin-left: -75%;

}*/

.secao1-2{
    width: 100%;
    display:flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    background-image: radial-gradient( #ececec , #dddddd);
    border-bottom: 8px solid var(--color1);
}

.text{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    margin-left: 150px;
    padding: 3rem;
    border-radius: 10px;
    font-size: 18px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
}

.text a{
    text-decoration: none;
    text-align: center;
    background-color: #e0042c;
    color: #fff;
    width: 150px;
    margin-top: 20px;
    border-radius: 5px;
    padding: 1rem 0.2rem 1rem 0.2rem;
    transition: all .3s;
}

.text a:hover{
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    transition: all .3s;
}


.container-expand{
    width: 50%;
    display: flex;
    justify-content: center;
    height: 500px;
    gap: 10px;
    
}
.container-expand >div{
    flex: 0 0 120px;
    border-radius: 0.5rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    border: 2px solid #b90022;
    position: relative;
    overflow: hidden;
}
.container-expand > div:nth-of-type(1){
    background: url(../img/de_vries.png) no-repeat 44%/cover #222222;
}
.container-expand > div:nth-of-type(2){
    background: url(../img/mortara.png) no-repeat 45%/cover #222222;
}
.container-expand > div:nth-of-type(3){
    background: url(../img/king.png) no-repeat 45%/cover #222222;
}
.container-expand > div:nth-of-type(4){
    background: url(../img/CEO-mahindra.webp) no-repeat 39%/cover;
}
.container-expand > div .content-expand{
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 15px;
    opacity: 0;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    background: #02022e;
    background: linear-gradient(0deg, rgba(19, 19, 19, 0.705) 0%,rgba(255, 255, 255, 0)100%);
    transform: translateY(100%);
    transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s;
    visibility: hidden;
}
.container-expand > div .content-expand span{
    display: block;
    margin-top: 5px;
    font-size: 1.2rem;
}
.container-expand >div:hover{
    flex: 0 0 250px;
    box-shadow: 1px 3px 15px #e0042c;
    transform: translateY(-30px);
}
.container-expand > div:hover .content-expand{
    opacity: 1;
    transform: translateY(0%);
    visibility: visible;
}

` 