"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { FormControl, Select } from '@mui/material';
import { MenuItem as MuiMenuItem } from '@mui/material';
import Flag from 'react-world-flags';
import { useTranslation } from "react-i18next";
import Link from 'next/link';

import MaterialUISwitch from './MaterialUISwitch';
const pages = ['home', 'whoWeAre', 'services', 'testimonials','videos', 'contact'];

function Header({ toggleMode, mode }) {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [language, setLanguage] = useState('fr');
    const handleLanguageChange = (event) => {
        const lng = event.target.value;
        setLanguage(lng);
        i18n.changeLanguage(lng);
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'transparent', color: mode === 'light' ? theme.one.main : theme.five.main }} className='bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0 }} >
                        <Link href={'/'}>
                            <Tooltip title="M-W">
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={mode === 'light' ? '/logos/MWtransparent.png' : '/logos/MW.png'} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Box>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Labomonétaire
                    </Typography> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}> {t(page)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Labomonétaire
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link key={page} href={page === 'home' ? '/' : page} passHref>
                                <Button
                                    variant="p"
                                    key={page}
                                    sx={{ display: 'block' }}                                    >
                                    {t(page)}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", }}>
                        <FormControl sx={{ mr: 2 }} size="small">
                            <Select
                                value={language}
                                onChange={handleLanguageChange}
                                displayEmpty
                                size="small"
                                sx={{
                                    boxShadow: "none",
                                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                }}
                            >
                                <MuiMenuItem value="ar">
                                    <Avatar sx={{ bgcolor: theme.five.main }}><Flag
                                        code="MA"
                                        alt="Arabe"
                                        style={{ width: 24, height: 16 }}
                                    />
                                    </Avatar>
                                </MuiMenuItem>
                                <MuiMenuItem value="fr">
                                    <Avatar sx={{ bgcolor: theme.five.main }}><Flag
                                        alt="Français"
                                        code="FR"
                                        style={{ width: 24, height: 16 }}
                                    />
                                    </Avatar>
                                </MuiMenuItem>
                                <MuiMenuItem value="en">
                                    <Avatar sx={{ bgcolor: theme.five.main }}><Flag
                                        alt="Anglais"
                                        code="US"
                                        style={{ width: 24, height: 16 }}
                                    />
                                    </Avatar>
                                </MuiMenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <MaterialUISwitch checked={!isLightMode} onChange={toggleMode} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
