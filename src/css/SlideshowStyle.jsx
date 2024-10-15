import styled from "styled-components";

export const SlideshowStyle = styled.section`

.secao1{    
    padding: 100px 0px 50px 0px;
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
    font-size: 37px;
    text-align: center;
    padding-bottom: 100px;
    text-transform: uppercase;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 1.5px;
}

.slideshow {
    position: relative;
    width: 100%;
    overflow: hidden;
    display:flex;
    padding-left: 50vh;
}

.slideImage{
    display: flex ;
}

.slideImage img {
    width: 650px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 25px;
    border: 8px solid var(--color5);
}


`