import React from 'react'
import './card1.css'

export default function Card1({ setIsOpen, shop, removeList, isOpen, convertToShop }) {
  return (
    <div className='card1' onClick={() => setIsOpen({
      open: false,
      status: ''
    })}>
      <div className="card2" onClick={(e) => e.stopPropagation()}>
        <div className="hidden-div1"></div>
        <div className="hidden-div2"></div>
        <div className="hidden-div3"></div>
        <div className="hidden-div4"></div>
        <div className="hidden-div5"></div>
        <div className="hidden-div6"></div>
        <div className="hidden-div7"></div>
        <div className="hidden-div8"></div>
        <div className='card30'>
          {
            shop.length ?
              shop.map((val) => {
                return (
                    <div className="card4" key={val.id}>
                      <img src={val.img} alt="logp" />
                      <b>{val.cost*val.miqdor}</b>
                      <h5>{val.name.slice(0,7)}</h5>
                      <h5>{val.miqdor}</h5>
                      {
                        isOpen.status == 'card' &&  
                        <button className='btn btn-outline-warning' onClick={()=>convertToShop(val)}>Buy</button>
                      }
                      <button className='btn btn-outline-warning btn22' onClick={()=>removeList(val.id)}>Remove</button>
                    </div>
                )
              })
              : 'Empty'
          }
        </div>
      </div>
    </div>
  )
}
