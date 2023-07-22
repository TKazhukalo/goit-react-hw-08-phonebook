import styled from "styled-components";

export const ContainerMenu = styled.div`
    max-width: 960px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 12px;
`;
export const ButtonMenu = styled.button`
    background-image: linear-gradient(to right, #c2e59c 0%, #64b3f4  51%, #c2e59c  100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    border:0;
        &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #3768e3;
        text-decoration: none;
        cursor: pointer;
        }           
`;
export const UserName=styled.p`
     font-weight: 600;
     color: rgb(55, 104, 227);
     font-size:20px;
`