import { styled, Switch } from '@mui/material';

export const titleFilterList = [
  {
    label: '제목',
    value: 'title',
  },
  {
    label: '작성자',
    value: 'writer',
  },
];

export const SearchSortSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#e0e0e0',
        ...theme.applyStyles('dark', {
          backgroundColor: '#707070',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#2196f3',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M10 8v6l4.7 2.9.8-1.2-4-2.4V8z"/><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M17.92 12c.05.33.08.66.08 1 0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-.34-.02-.67-.06-1z"/><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M20 5V2h-2v3h-3v2h3v3h2V7h3V5z" /></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#e0e0e0',
    ...theme.applyStyles('dark', {
      backgroundColor: '#707070',
    }),
    borderRadius: 20 / 2,
  },
}));
