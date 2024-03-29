import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { auth, provider} from "../../firebase"
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${({ theme }) => theme.bgLighter};
border: 1px solid ${({ theme }) => theme.soft};
padding: 20px 50px;
gap: 10px;
`;

const Title = styled.h1`
font-size: 24px;
`;

const SubTitle = styled.h2`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft};
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;
`;

const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
display: flex;
font-size: 12px;
margin-top:10px;
color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
margin-left: 50px;
`;

const Link = styled.span`
margin-left: 30px;
`;

const SignIn = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const dispatch = useDispatch()

    const handleLogin = async (e) =>{
        e.preventDefault();
        dispatch(loginStart)
        try {
            const res = await axios.post("/auth/signin", {nome, senha})
            dispatch(loginSuccess(res.data))
        } catch (error) {
          dispatch(loginFailure)  
        }
    }

    const signInWithGoogle = async () =>{
        dispatch(loginStart())
        signInWithPopup(auth, provider).then((result) =>{
            axios.post("auth/google", {
                nome: result.user.displayName,
                email: result.user.email,
                img: result.user.photoURL,
            }).then((res) =>{
                dispatch(loginSuccess(res.data))
            })
            .catch((error) =>{
                dispatch(loginFailure())
            })
        })
    }

    return(
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <SubTitle>To continue to MyTube</SubTitle>
                <Input placeholder="username" onChange={e => setNome(e.target.value)} />
                <Input type="password" placeholder="password" onChange={e => setSenha(e.target.value)} />
                <Button onClick={handleLogin}>Sign in</Button>
                <Title>or</Title>
                <Button onClick={signInWithGoogle}>Signin with google</Button>
                <Title>or</Title>
                <Input placeholder="username" onChange={e => setNome(e.target.value)} />
                <Input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="password" onChange={e => setSenha(e.target.value)} />
                <Button>Sign up</Button>
            </Wrapper>
            <More>
                English(USA)
                <Links>
                 <Link>Help</Link>
                 <Link>Privacy</Link>
                 <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default SignIn