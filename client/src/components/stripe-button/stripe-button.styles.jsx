import styled from 'styled-components';
import { img_transition } from '../../assets/__OO7BTS.v1.0';

export const StripeBtn = styled.button`
    width:200px;
    height:55px;
    border-radius: 5px;
    background: #000;
    border:1px solid #222;
    color:#fff;
    letter-spacing: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    ${img_transition(0.3)}
    &:hover{
        background: #fff;
        color:#222;
    }
`;