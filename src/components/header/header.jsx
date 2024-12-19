import { Button, Div } from "../../styles";

import TextField from '@mui/material/TextField';



function Header () {
    return (
        <>    
            <Div row gray justifySpace>
                <p>Code Reddit</p>
                <div>
                    <TextField id="outlined-basic" label="Search" variant="outlined" size="small" fullWidth />
                </div>
                <Button secondary>Login</Button>
            </Div>            
        </>
    )
};

export default Header;