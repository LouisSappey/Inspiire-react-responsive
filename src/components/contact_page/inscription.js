import styled from 'styled-components';
import React, { Component } from "react";

class SimpletextareaName extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
    handleChange(event) {
      console.log(event.target.value)
    }
    render() {
      return (
        <div>
            <label style={{
                fontFamily: 'Nunito Sans',
                fontSize: 'larger',
            }}>Nom*</label>
          <input style={{
            width:'100%',
            height: '5rem',
            backgroundColor: '#F1F1F1',
            border: '3px',
            borderRadius: '14px',
            position: 'relative',
            fontSize: 'large',
            fontFamily: 'Nunito Sans',
            paddingLeft: '2rem',
            }}
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
            placeholder="Votre nom..."
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Votre nom..."}
          />
        </div>
      );
    }
}

class SimpletextareaMiddlename extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
    handleChange(event) {
      console.log(event.target.value)
    }
    render() {
      return (
        <div>
            <label style={{
                fontFamily: 'Nunito Sans',
                fontSize: 'larger',
            }}>Prénom*</label>
          <input style={{
            width:'100%',
            height: '5rem',
            backgroundColor: '#F1F1F1',
            border: '3px',
            borderRadius: '14px',
            position: 'relative',
            fontSize: 'large',
            fontFamily: 'Nunito Sans',
            paddingLeft: '2rem',
            }}
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
            placeholder="Votre prénom..."
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Votre prénom..."}
          />
        </div>
      );
    }
}

class Simpletextareamail extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
    handleChange(event) {
      console.log(event.target.value)
    }
    render() {
      return (
        <div>
            <label style={{
                fontFamily: 'Nunito Sans',
                fontSize: 'larger',
            }}>Mail*</label>
          <input style={{
            width:'100%',
            height: '5rem',
            backgroundColor: '#F1F1F1',
            border: '3px',
            borderRadius: '14px',
            position: 'relative',
            fontSize: 'large',
            fontFamily: 'Nunito Sans',
            paddingLeft: '2rem',
            }}
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
            placeholder="exemple@gmail.com"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "exemple@gmail.com"}
          />
        </div>
      );
    }
}

class Simpletextareaphone extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
    handleChange(event) {
      console.log(event.target.value)
    }
    render() {
      return (
        <div>
            <label style={{
                fontFamily: 'Nunito Sans',
                fontSize: 'larger',
            }}>Téléphone*</label>
          <input style={{
            width:'100%',
            height: '5rem',
            backgroundColor: '#F1F1F1',
            border: '3px',
            borderRadius: '14px',
            position: 'relative',
            fontSize: 'large',
            fontFamily: 'Nunito Sans',
            paddingLeft: '2rem',
            }}
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
            placeholder="+33"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "+33"}
          />
        </div>
      );
    }
}

class Simpletextareamessage extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
    handleChange(event) {
      console.log(event.target.value)
    }
    render() {
      return (
        <div>
            <label style={{
                fontFamily: 'Nunito Sans',
                fontSize: 'larger',
            }}>Message*</label>
          <input style={{
            width:'100%',
            height: '10rem',
            backgroundColor: '#F1F1F1',
            border: '3px',
            borderRadius: '14px',
            position: 'relative',
            fontSize: 'large',
            fontFamily: 'Nunito Sans',
            paddingLeft: '2rem',
            }}
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
            placeholder="Votre message"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Votre message"}
          />
        </div>
      );
    }
}

const Inscription = () => {
    return (
        <div style={{
            height: '1rem',
        }}>
            <Namepos>
                <SimpletextareaName/>
            </Namepos>
            <Middlenamepos>
                <SimpletextareaMiddlename/>
            </Middlenamepos>
            <Mailpos>
                <Simpletextareamail/>
            </Mailpos>
            <Phonepos>
                <Simpletextareaphone/>
            </Phonepos>
            <Messagepos>
                <Simpletextareamessage/>
            </Messagepos>
        </div>
    );
};

const Namepos = styled.div`
    left: 40rem;
    bottom: 15rem;
    width: 33rem;
    flex-direction: column;
    position: relative;
`;

const Middlenamepos = styled.div`
    left: 80rem;
    bottom: 21.7rem;
    width: 33rem;
    flex-direction: column;
    position: relative;
`;

const Mailpos = styled.div`
    left: 40rem;
    bottom: 20rem;
    width: 33rem;
    flex-direction: column;
    position: relative;
`;

const Phonepos = styled.div`
    left: 80rem;
    bottom: 26.7rem;
    width: 33rem;
    flex-direction: column;
    position: relative;
`;

const Messagepos = styled.div`
    left: 40rem;
    bottom: 25rem;
    width: 73rem;
    flex-direction: column;
    position: relative;
`;

  export default Inscription;