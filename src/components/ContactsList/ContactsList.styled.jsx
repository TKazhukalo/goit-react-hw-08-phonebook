import styled from '@emotion/styled';

export const ContactItem=styled.li`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 500px;
    margin-bottom: 10px;
    font-size:16px;
`
export const Button=styled.button`
    background-image: linear-gradient(to right, #c2e59c 0%, #64b3f4  51%, #c2e59c  100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #3768e3;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    cursor: pointer;
    border:0;
        &:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
`
export const ListItem = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 0;
    align-items: center;
`
export const ItemContact=styled.span`
    color: #3768e3;
 
`