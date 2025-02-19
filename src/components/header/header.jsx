//styles
import { Div, HeaderLogoLink } from "../../styles";

//libraries - mui
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

//react
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

//redux
import { filterBySearch, resetFilter } from "../../features/postList/postListSlice";

import logo from '../../assets/reddit-icon.png';


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
                <HeaderLogoLink width='50%' gray justifyStart row gap='20px'><NavLink to="/"><img src={logo} width='20px' alt='' /> <span>REDDIT about CODE</span></NavLink></HeaderLogoLink>
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
            </Div>            
        </>
    )
};

export default Header;