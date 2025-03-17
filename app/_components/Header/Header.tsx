'use client';

import { useErrorStore } from '@/store/useErrorStore';
import { SITE_MAP } from '@/utils/sitemap';
import { ExitToApp, Notifications } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { ToggleDarkMode } from '../ToggleDarkMode';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isError } = useErrorStore();
  const [profileOpen, setProfileOpen] = useState<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<HTMLElement | null>(null);
  const menuItemStyles = 'flex gap-2 h-12';

  const handleClick =
    (setState: Dispatch<SetStateAction<HTMLElement | null>>) =>
    (event: React.MouseEvent<HTMLElement>) => {
      setState(event.currentTarget);
    };
  const handleMenuListClose = (setState: Dispatch<SetStateAction<HTMLElement | null>>) => {
    setState(null);
  };
  const handleMenuRouting = (page: string) => {
    if (pathname === page) return;
    router.push(page);
  };

  return (
    <AppBar
      color='default'
      className='items-center'
      position={pathname === '/' || isError ? 'fixed' : 'sticky'}
    >
      <Box className='max-w-5xl w-full flex justify-between items-center p-2'>
        <Box className='flex items-center gap-2'>
          <Button
            onClick={() => router.push(SITE_MAP.HOME)}
            variant='text'
            className='flex items-center gap-4 w-max'
            color='inherit'
          >
            <Image src='/images/husky/eat_0.png' alt='logo' width={44} height={37} />
            <Typography variant='h5' whiteSpace='nowrap'>
              레벨지지
            </Typography>
          </Button>
          <Box className='hidden md:flex gap-2'>
            <Button color='inherit' onClick={() => handleMenuRouting(SITE_MAP.LIST)}>
              <Typography
                color={pathname === SITE_MAP.LIST ? 'warning' : 'textDisabled'}
                variant='body2'
              >
                레벨업 리스트
              </Typography>
            </Button>
            <Button color='inherit' onClick={() => handleMenuRouting(SITE_MAP.ADD)}>
              <Typography
                color={pathname === SITE_MAP.ADD ? 'warning' : 'textDisabled'}
                variant='body2'
              >
                사냥터 추천하기
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box className='flex items-center gap-1'>
          <Box className='flex md:hidden'>
            <IconButton onClick={handleClick(setMenuOpen)}>
              <MenuIcon />
            </IconButton>
            <Menu
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              open={!!menuOpen}
              anchorEl={menuOpen}
              onClose={() => handleMenuListClose(setMenuOpen)}
              onClick={() => handleMenuListClose(setMenuOpen)}
            >
              <MenuItem className={menuItemStyles} onClick={() => handleMenuRouting(SITE_MAP.LIST)}>
                <Typography
                  color={pathname === SITE_MAP.LIST ? 'warning' : 'textDisabled'}
                  variant='body2'
                >
                  레벨업 리스트
                </Typography>
              </MenuItem>
              <MenuItem className={menuItemStyles} onClick={() => handleMenuRouting(SITE_MAP.ADD)}>
                <Typography
                  color={pathname === SITE_MAP.ADD ? 'warning' : 'textDisabled'}
                  variant='body2'
                >
                  사냥터 추천하기
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <ToggleDarkMode />
          <IconButton onClick={handleClick(setProfileOpen)}>
            <Avatar src='/images/mushroom.png' />
          </IconButton>
          <Menu
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={!!profileOpen}
            anchorEl={profileOpen}
            onClose={() => handleMenuListClose(setProfileOpen)}
            onClick={() => handleMenuListClose(setProfileOpen)}
          >
            <MenuItem className={menuItemStyles}>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                }}
                src='/images/mushroom.png'
              />
              <Typography variant='body2'>마이 페이지</Typography>
            </MenuItem>
            <MenuItem className={menuItemStyles}>
              <Notifications />
              <Typography variant='body2'>공지사항</Typography>
            </MenuItem>
            <Divider />
            <MenuItem className={menuItemStyles}>
              <ExitToApp />
              <Typography variant='body2'>로그아웃</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </AppBar>
  );
};
