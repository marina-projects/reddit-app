import { Button, Div } from "../../styles";


function Header () {
    return (
        <>    
            <Div row gray justifySpace>
                <p>Code Reddit</p>
                <p>Search</p>
                <Button secondary>Login</Button>
            </Div>            
        </>
    )
};

export default Header;