import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getLove } from '../../services/loveServices';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Wrapper = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    `;
const ModalLove = styled.div`
        padding: 25px 20px;
        background: rgba(239, 219, 239, 0.5);
        z-index: 2;
        display: flex;
        justify-content: center;
        gap: 2rem;
        position: relative;
        width: 90%;
    `
const BoxContent = styled.div`
        flex:1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `
const NameTarot = styled.div`
        text-align: center;
        font-size: 50px;
        color: #fff;
    `
const ContentTarot = styled.div`
        font-size: 40px;
        color: #fff;
    `;
const BoxImg = styled.div`
    display: flex;
    align-items: center;
    margin-top: 71px;
    max-width: 300px;
`
const Close = styled.span`
    z-index: 2;
    position: absolute;
    top: 10px;
    right: 25px;
    line-height: 0.5;
    font-size: 70px;
    color: #fff;

    &:hover {
        cursor: pointer;
        color: red;
    }
`

function LoveModal() {
    const [love, setLove] = useState('')
    // get api
    // getLove()
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://103.121.91.135:8080/api/tarot/TINH_YEU')
            .then(res => { setLove(res.data); })
            .catch(err => { console.log(err); })
    }, [])
    return (
        <Wrapper>
            <ModalLove>
            <Close onClick={() => navigate(-1)}>x</Close>
                <BoxImg>
                    <img style={{width: '100%'}} src={`data:image/jpeg;base64,${love.img}`} alt="" />
                </BoxImg>
                <BoxContent>
                    <NameTarot>{love.name}</NameTarot>
                    <ContentTarot>
                        {love.description}
                    </ContentTarot>
                </BoxContent>
            </ModalLove>
        </Wrapper>
    )
}

export default LoveModal