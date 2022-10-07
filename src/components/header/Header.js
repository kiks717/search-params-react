import React from 'react'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes['header-div']}>
      <h1 className={classes['header-title']}>Search Blog List</h1>
    </div>
  )
}

export default Header