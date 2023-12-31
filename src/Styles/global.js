import { createGlobalStyle } from "styled-components";
import scrollbar from "../assets/scrollbar.png";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        
        /* -webkit-font-smoothing: antialiased; */
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;

    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    ::-webkit-scrollbar {
        width: 10px;
        
        
    }
    ::-webkit-scrollbar-thumb {
        /* background-color: ${({ theme }) => theme.COLORS.ORANGE}; */
        background-image: url(${scrollbar});
        background-repeat: no-repeat;
    }

    
`;
