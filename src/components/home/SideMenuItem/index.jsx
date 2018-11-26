import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as selectors from '../../../reducers';

import FolderItem from '../SideMenuFoldersItem';


const SideMenuItem = (props) => {
  const { currentOption } = props;
  if (currentOption === 'friends') {
    return <div></div>
  }
  return <FolderItem {...props} />
};

export default connect(
  (state, { id }) => ({
    currentOption: selectors.getCurrentNotebook(state),
  }),
  undefined
)(SideMenuItem);