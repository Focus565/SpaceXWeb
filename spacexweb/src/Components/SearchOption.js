import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useIndex } from '../Context/IndexContext'


const options = [
  'Rocket Name',
  'Launch Year'
];

const SearchOption = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { handleIndexChange } = useIndex();
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {   
    setSelectedIndex(index);
    handleIndexChange(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOnChange = () => {
    console.log(selectedIndex)
    handleIndexChange(selectedIndex);
  }
  return (
    <div style={{}}>
      <List component="nav">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Search Option"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Search Option" secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        // onChange={handleOnChange}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default SearchOption