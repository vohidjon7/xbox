import React from 'react'
import './contents.css'
import pic from './1.jpg'
import Loader from '../layouts/Loader';

export default function Contents({ posts, limit, getDetails }) {
    return (
        <div className='contents'>
            {
                posts.length ?
                    posts.map(({ item, store, itemId }, idx) => {
                        const { images, ratings } = item;
                        if (idx < limit) {
                            return (
                                <div className='card crt' key={idx}>
                                    <div className="place">
                                    <h4>{item.name}</h4>
                                    <b>{item.type}</b>
                                    
                                    <p>{item.description}</p>
                                    <div className='d-flex justify-content-around'>
                                        <p>Votes: {ratings.numberVotes}</p>
                                        <p>{ratings.avgStars > 4 ? (
                                            <div>
                                                {/* <i className='meterial-icons ic-color'>star_border</i>
                                                <i className='meterial-icons ic-color'>star_border</i>
                                                <i className='meterial-icons ic-color'>star_border</i>
                                                <i className='meterial-icons ic-color'>star_border</i>
                                                <i className='meterial-icons ic-color'>star_border</i> */}
                                            </div>
                                        ) : (
                                            <div>
                                                {/* <i className='meterial-icons ic-color'>star_border</i>
                                                <i className='meterial-icons ic-color'>star_border</i>
                                                <i className='meterial-icons ic-color'>star_border</i> */}
                                            </div>
                                        )}</p>
                                        <p>TotalPint: {ratings.TotalPoints}</p>
                                    </div>
                                    </div>
                                    <img src={images.featured ? images.featured : pic} width="300px" height="300px" className='pic' alt="logo" />
                                    <b>{store.cost}</b>
                                    <div className='d-flex'>
                                    <button className='btn btn-outline-danger m-2' onClick={()=>getDetails({id:itemId,name:item.name,cost:store.cost,img:images.icon},'shop')}>Buy Now</button>
                                    <button className='btn btn-outline-danger m-2' onClick={()=>getDetails({id:itemId,name:item.name,cost:store.cost,img:images.icon},'card')}>Add to cart</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                : <Loader/>
            }
        </div>
    )
}
