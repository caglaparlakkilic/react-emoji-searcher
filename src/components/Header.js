import React from 'react';
import emojiList from '../emojiList.json' ;
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <p>{emojiList[36].symbol}Emoji Searcher</p>
    </div>
  )
}

export default Header