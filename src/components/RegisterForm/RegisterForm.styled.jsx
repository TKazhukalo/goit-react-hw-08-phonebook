import styled from "styled-components";

export const RegisterForms = styled.form`
    width: 320px;
    margin-top: 20px;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto; 
`;
export const RegisterLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size:16px;
    
`;
export const RegisterInput = styled.input`
    width: 260px;
    padding: 12px 18px;
    border-radius: 4px;
    margin-top: 5px;
    font-size:12px;
    border:1px solid rgba(108, 82, 237, 0.3);
    outline:none;
    background-color: Field;
    color: #3768e3;
        &:hover{
    box-shadow: 0 0 10px #ebd7d7;
}
`;