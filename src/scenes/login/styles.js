import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw; 

    h1 {
            color: white;
            font-size: 4vw;
            margin-left: 20px;
            font-weight: normal;
            font-family:Trattatello, fantasy;
            position:absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);        
        }

`

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    justify-content: center;
    background-color: #FFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 30px;
    width: 100%;
    max-width: 500px;
    gap: 20px 0px;

    h1 {
        color: white;
        font-size: 20px;
        font-weight: light;
    }
    

    p {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    a {
        color: white;
        font-size: 14px;
    }

`

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;

  p {
    color: #808080;
    font-size: 16px;
    font-weight: bold;
  }

  a {
    color: #808080;
    font-size: 16px;
    font-weight: bold;
    text-decoration:none;
  }
`