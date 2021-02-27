import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout/default_layout'
import { Container } from '../components/_util/formatting'
import Titlescreen from "../components/titelscreen"

const AppTitle: React.FC = () => {
    const Background = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    `
    const Title = styled.div`
        position: inherit;
        text-align: center;
        margin-top: 20%;
        font-size: 8vh;
        z-index: 1;
    `

    return (
        <Container style={{height: "100%"}}>
            <Title>
                <h1>Willkommmen!</h1>
                <h2>Checkout my blog.</h2>
            </Title>
            <Background>
                <Titlescreen style={{height: "100vh"}} />
            </Background>
        </Container>
    );
}

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <AppTitle />
        </Layout>
    );
}
export default IndexPage
