//styles
import { Button, Div } from "../../styles";

//libraries - mui
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import { useState } from "react";
import { useDispatch } from "react-redux";

//redux
import { filterBySearch, resetFilter } from "../../features/postList/postListSlice";


function Header () {

    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const value = e.currentTarget.value;
        setTerm(value);
        dispatch(filterBySearch(value));
    }

    const handleReset = () => {
        dispatch(resetFilter());
        setTerm('');
    }

    return (
        <>    
            <Div row gray justifySpace>
                <p>Code Reddit</p>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        value={term}
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleSearch}
                        InputProps={{
                            endAdornment: (
                              term && (
                                <IconButton onClick={handleReset} edge="end">
                                  <ClearIcon />
                                </IconButton>
                              )
                            ),
                          }}
                    />
                </div>
                <Button secondary>Login</Button>
            </Div>            
        </>
    )
};

export default Header;