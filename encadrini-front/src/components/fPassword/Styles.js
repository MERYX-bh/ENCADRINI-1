import styled, { css } from 'styled-components';
export const StyledTitle = styled.h1`
    color: #3A0CA3;
    font-size: 300%;
    text-align: center;
    font-weight: bold;

`;
export const StyledTitle2 = styled.h1`
    color: #7B2CBF;
    font-size: 300%;
    text-align: center;
    font-weight: bold;

`;
export const StyledFormButton = styled.button`
display: inline-block;
    padding: 8px 8px;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #7B2CBF;
    border: none;
    border-radius: 50px;
    font-family: Poppins;
    margin-left: 18px;
    margin-top: 7px;

&:hover{
    background: #3A0CA3;
}`;
export const StyledButton = styled.button`
    font-size: 2em;
    background-color: #FFFFFF;
    place-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 30%;
    border-radius: 3px;
    margin-left: 18px;
    margin-top: 7px;
    color: #240046;
    border: 2px solid #EBEBEB;
    padding: 10px 10px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    font-size:100;
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  

&:hover{
    background: #4CC9F0;
    color: #fff;
}`;
export const UploadDiv = styled.div`
border: 2px solid #C4C4C4;
border-radius: 5px;
background-color: #FFFFFF;    
text-align:left;
padding: 50px;
margin: 25px 50px 75px 100px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`;

export const UploadBox = styled.input`
::-webkit-file-upload-button {
    background-color: peru;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  box-shadow: 0 2px 8px 1px #454545;
  cursor: pointer;
  }
  
  ::-webkit-file-upload-button:hover {
    background: #fff;
    border: 2px solid #535353;
    color: #000;
  }
  
`;
export const Chosen = styled.label`
font-size: 1em;
position: absolute;
  right: 200px;
  top: 100px;
    background-color: #4CC9F0;
    color: #FFFFFF;
    padding: 5px 15px;
    font-weight: bold;
    justify-content: center;
    font-size:100;
    border-radius: 50%;;



&:hover{
    background: #4CC9F0;
    color: #fff;
}
  
`;
export const CreationButton = styled.button`
display: inline-block;
    padding: 5px 15px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    position: absolute;
    right: 120px;
    top: 100px;
    color: #fff;
    background-color: #3A0CA3;
    border: none;
    border-radius: 50px;

&:hover{
    background: #7B2CBF;
}`;