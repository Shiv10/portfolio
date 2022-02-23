import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
// Assets

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <h1 className="font40 extraBold" style={{ textAlign: "center" }}>Let's get in touch</h1>
          <div style={{display: "flex", flexDirection: "column", gap:"1rem", alignItems:"center"}}>
            <a href="mailto:ishivansh0810@gmail.com" target="_blank">ishivansh0810@gmail.com</a>
            <a href="tel:+91-9557733535" target="_blank">+91 9557733535</a>
            <div style={{display: "flex", alignItems: "center", gap:"1rem"}}>
                <a href="https://www.facebook.com/sshivansh10/" target="_blank"><FaFacebook style={{fontSize: "2rem"}}/></a>
                <a href="https://twitter.com/Shivansh0810" target="_blank"><FaTwitter style={{fontSize: "2rem"}}/></a>
                <a href="https://github.com/Shiv10" target="_blank"><FaGithub style={{fontSize: "2rem"}}/></a>
                <a href="https://www.linkedin.com/in/sShivanshSharma/" target="_blank"><FaLinkedin style={{fontSize: "2rem"}}/></a>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









