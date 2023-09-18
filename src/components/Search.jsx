import styled from "styled-components"
import { useState } from "react"
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {
    const[input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate("searched/" + input)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 2rem 0; /* Add margin top and bottom */

    div {
        position: relative;
        width: 80%; /* Reduce the width here */
        margin: 0 auto; /* Center the input */
    }

    input {
        border: none;
        background: #424242;
        width: 100%;
        font-size: 1rem;
        color: #fff;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`

export default Search
