import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {useSelector} from 'react-redux'


const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: "#cccccc",
  [`& .${treeItemClasses.content}`]: {
    color: "#cccccc",
    paddingRight: theme.spacing(0.1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:hover': {
      backgroundColor: "#46494B",
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `"green", ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(1),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr:1, color:"#cccccc"}} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit' }}>
            {labelText}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default function GmailTreeView() {

  const allShape=useSelector((state)=>state.app.shapeArray)
  console.log(allShape,"mmml")
  const a=["j","m"]

  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={['4']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="3" labelText="Folder" labelIcon={FolderIcon}>
        {a?.map((shape)=>(
          <div>{shape} is shape name</div>
        ))}
        {/* <StyledTreeItem
          nodeId="5"
          labelText="File-1"
          labelIcon={InsertDriveFileIcon}
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="File-2"
          labelIcon={InsertDriveFileIcon}
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="File-3"
          labelIcon={InsertDriveFileIcon}
          bgColor="#f3e8fd"
        /> */}
        <StyledTreeItem
          nodeId="8"
          labelText="File-4"
          labelIcon={InsertDriveFileIcon}
          bgColor="#f9f9f9"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="File" labelIcon={InsertDriveFileIcon} />
    </TreeView>
  );
}
