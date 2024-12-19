import styled from "@emotion/styled";

export const Div = styled.div`
    width: 100%;
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
    padding: 10px;
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

export const PostsListDiv = styled(Div)`
    width: 70%;
`

export const PostPageDiv = styled(Div)`
    width: 70%;
    margin: 20px;
    gap: 20px;
    padding: 20px;
`

export const PostCardDiv = styled(Div)`
    width: 100%;
    margin: 10px;
    padding: 20px;
    gap: 20px;
`;


export const Button = styled.button`
    background-color: ${(props) => 
        props.primary ? 'black' :
        props.secondary ? 'purple' :
        props.white ? 'white' :
        'transparent'
    };
    color: ${(props) => 
        props.primary ? 'white' :
        props.secondary ? 'white' :
        props.white ? 'black' :
        'black'
    };
    padding: 12px 28px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    
    &:hover {
            
    }
`;

export const HeaderWrapper = styled(Div)`
    padding: 10px 20px;
    justify-content: space-between;
    
`;

