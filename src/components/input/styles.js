import styled from "styled-components";

export const InputCustomizado = styled.input`
    color: #808080;
    font-size: 20px;
    background-color: white;
    border: 2px solid transparent;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.10);
    padding: 16px 20px;
    width: 100%

    input::placeholder{
        color: #FFF;
        font-size: 12px;
        opacity 0.7;
    }
`