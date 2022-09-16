import React from 'react';
import {useState} from 'react';
import emojiList from '../emojiList.json';
import './Filter.css';


function Filter() {
    const [filteredEmoji, setFilteredEmoji]= useState('');

    const searched = emojiList.filter((item)=>{
        return Object.keys(item).some((key)=>{ 
            return (
            item[key].toString().toLowerCase().includes(filteredEmoji.toLocaleLowerCase()));
        })
    })


    console.log(searched)

    function listEmoji(){
        let listArray = []
        if(filteredEmoji==='null'){
                for(let i=0; i<20; i++){
                    listArray[i]=emojiList[i];
                }
            return (
                <div>
                    {
                        listArray.map((item,key)=>(
                            <div key={key}>
                                <div>
                                    {item.symbol} {item.title}
                                </div>
                            </div>
                            
                        ))}
                </div>
            );
        }


    }

    listEmoji();

    const [symbol, setSymbol]= useState("");

    const handleClick = ({symbol})=> {
        setSymbol(symbol);
        navigator.clipboard.readText(symbol);
    }

    console.log(symbol);
    



  return (
    <div>
        <input name='filter' placeholder='Search Emoji' value={filteredEmoji} onChange={(e)=>setFilteredEmoji(e.target.value)} className="input"/>
            {searched &&
                searched.map((emoji,key)=>{
                    return(
                        <div key={key} className="emojiContainer" onClick={()=> handleClick(emoji?.symbol)}>
                            <div className='emojies' title='emojiListesi'>
                                <span className='symbol'>{`${emoji?.symbol}`}</span>
                                <span className='title'>{`${emoji?.title}`}</span>
                            </div>
                            <div className='button'>
                                <button className='copy'>Click to copy emoji!</button>
                            </div>
                        </div>
                    )

                })
            }

    </div>
    
  )
}

export default Filter