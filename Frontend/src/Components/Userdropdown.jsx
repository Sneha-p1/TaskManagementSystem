import React from 'react';

const dropdownItems = [
  'User List',
  'Client List',
  'Teamlead List',
  'Team Member List',
  'Student List',
];

const Userdropdown = ({ visible }) => {
  if (!visible) return null;
  return (
    <ul className="sidebar-dropdown">
      {dropdownItems.map((item, idx) => (
        <li key={idx} className="sidebar-dropdown-item">{item}</li>
      ))}
    </ul>
  );
};

export default Userdropdown;

