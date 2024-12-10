import React from 'react'
import star from '../images/Star.svg'

function Card(props) {
    return (
        <div className="card">
            {props.tag && <div className="tag">{props.tag}</div>}
            <div className="img">
                <img src={props.img} alt="" />
            </div>
            <div className="details">
                <div className="ratting">
                    <img src={star} alt="" />
                    <span>{props.ratting}</span>
                    <span className='grey'>
                        ({props.reviewCount}) &middot;
                    </span>
                    <span className='grey'> {props.country}</span>
                </div>
                <div className="line">
                    {props.title}
                </div>
                <div className="rate">
                    <span className='bold-text'>From ${props.price}</span> / person
                </div>
            </div>
        </div>
    )
}

export default Card
