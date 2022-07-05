import styled from 'styled-components';
import React from "react";
import logo from '../../assets/logo2.png';
import linkedin from '../../assets/whitelinkedin.png';


const Page = () => {
    return (
        <div>
            <Containerinspiire>
                <img src={logo} height={49} width={141} alt=""/>
            </Containerinspiire>
            <Containermention>
                <Textmention>@Inspiire 2022 Mentions légales</Textmention>
            </Containermention>
            <Containermentionsecond>
                <Textmentionsecond>designed by <Textmentionsecondbold>𝗖𝗟𝗘𝗢 𝗚𝗿𝗮𝗽𝗵𝗶𝗰 𝗗𝗲𝘀𝗶𝗴𝗻</Textmentionsecondbold></Textmentionsecond>
            </Containermentionsecond>
            <Containerlinkedin>
                <a href="https://www.linkedin.com/in/nicolas-sappey-8228361a/">
                    <img src={linkedin} height={60} width={60} alt=""/>
                </a>
            </Containerlinkedin>
            <Containerfollow>
                <Textmention>Nous suivre</Textmention>
            </Containerfollow>
        </div>
    );
};

const Containerinspiire = styled.div`
    position: relative;
    width: 1rem;
    top: 5rem;
    left: 8rem;
    text-align: left;
`;

const Containerfollow = styled.div`
    position: relative;
    width: auto;
    bottom: 5rem;
    right: 10rem;
    text-align: right;
`;

const Containerlinkedin = styled.div`
    position: relative;
    width: auto;
    top: 15px;
    right: 11.7rem;
    text-align: right;
`;

const Containermention = styled.div`
    top: 6rem;
    position: relative;
    text-align: center;
`;

const Textmention = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 22px;
    font-family: 'Nunito Sans';
`;

const Containermentionsecond = styled.div`
    top: 7rem;
    position: relative;
    text-align: center;
`;

const Textmentionsecond = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    color: white;
    font-size: 16px;
    font-family: 'Nunito Sans';
`;

const Textmentionsecondbold = styled.a`
    cursor: pointer;
    text-decoration: none;
    text-align: justify;
    font-weight: 400;
    color: white;
    font-size: 18px;
    font-family: 'Nunito Sans';
`;

export default Page;
