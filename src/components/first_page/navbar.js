import styled from 'styled-components';
import React from "react";
import logo from '../../assets/logo2.png';
import '../../App.css';

const Navbar = () => {
    return (
        <Nav>
            <Logo href="">
                <img src={logo} height={49} width={171} alt=""/>
            </Logo>
            <Menu>
                <MenuLink href="">Raison d'être</MenuLink>
                <MenuLink href="">Expertises</MenuLink>
                <MenuLink href="">Identité</MenuLink>
                <MenuLink href="">Valeurs</MenuLink>
                <MenuLink href="">Carrière</MenuLink>
                <Contactplacement>
                    <Contact href="">Nous contacter</Contact>
                </Contactplacement>
            </Menu>
        </Nav>
    );
};

const Nav = styled.div`
    top: 3%;
    position: absolute;
    /* background-color: #11ffee00; */
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: baseline;
    flex-wrap: wrap;
`;

const MenuLink = styled.a`
    padding: 0rem 3rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    font-size: larger;
    font-family: 'Cairo';
`;

const Menu = styled.div`
    display: flex;
    top: 0.3rem;
    left: 15rem;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
    }
`;

const Contactplacement = styled.div`
    display: flex;
    left: 15rem;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        left: 0rem;
        overflow: hidden;
        flex-direction: column;
        width: 100%;
    }
`;

const Contact = styled.button`
    border: 2px solid white;
    background: #11ffee00;
    color: white;
    height: 50px;
    width: 150px;
    border-radius: 10px;
    font-family: 'Ubuntu';
    font-size: 1.2em;
    font-size: 20;
`;

const Logo = styled.a`
    padding: 0 1rem;
    text-decoration: none;
`;

export default Navbar;
