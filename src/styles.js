import styled from "@emotion/styled";

export const Div = styled.div`
    width: ${(props) => props.width || '100%'};
    gap: ${(props) => props.gap || '0'};
    display: flex;
    justify-content: ${(props) =>
        props.justifySpace ? 'space-between' :
        props.justifyStart ? 'flex-start' :
        props.justifyEnd ? 'flex-end' :
        'center'
    };
    align-items: ${(props) =>
        props.alignStart ? 'flex-start' :
        props.alignEnd ? 'flex-end' :
        'center'
    };
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    flex-wrap: ${(props) => (props.row ? 'wrap' : '')};
    background-color: ${(props) => (props.gray ? '#f1f1f1' : 'white')};
    padding: ${(props) => props.padding || '10px'};

    /* Медиазапрос для мобильных устройств */
    @media (max-width: 480px) {
        width: ${(props) => props.mobileWidth || '100%'};
        justify-content: ${(props) =>
        props.mobileJustifySpace ? 'space-between' :
        props.mobileJustifyStart ? 'flex-start' :
        props.mobileJustifyEnd ? 'flex-end' :
        'center'
    };
    align-items: ${(props) =>
        props.mobileAlignStart ? 'flex-start' :
        props.mobileAlignEnd ? 'flex-end' :
        'center'
    };
    }
`;

export const MainPageDiv = styled(Div)`
    padding: 0;
`

export const SidebarDiv = styled(Div)`
    width: 25%;
    padding: 20px;

    h4 {
        &:hover {
            cursor: pointer;
        }
    }
`;

export const FooterDiv = styled(Div)`
    paddin: 20px;    

    h3 {
        font-size: 1.17em;
    }
    h4 {
        font-weight: 600;
        font-size: 14px;
    }
    p {
        font-size: 14px;
        width: 75%;
    }
    a {
        font-size: 14px;
        text-decoration: none;
        color: black;
    }
`

export const PostPageDiv = styled(Div)`
    width: 90%;
    margin: 20px;
    gap: 20px;
    padding: 20px;
`

export const PostsListDiv = styled(Div)`
    width: 100%;
`

export const PostCardDiv = styled(Div)`
    width: 90%;
    margin: 10px;
    padding: 20px;
    gap: 20px;
`;


export const Button = styled.button`
    background-color: ${(props) => 
        props.primary ? '#d93900' :
        props.secondary ? 'purple' :
        props.white ? 'white' :
        props.footer ? '#272727' :
        'transparent'
    };
    color: ${(props) => 
        props.primary ? 'white' :
        props.secondary ? 'white' :
        props.white ? 'black' :
        props.footerColor ? 'white' :
        'black'
    };
    padding: 12px 28px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    
    &:hover {
            
    }
`;

export const HeaderLogoLink = styled(Div)`
    a {
        text-decoration: none;
        color: #d93900;
        font-weight: 600;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
`

