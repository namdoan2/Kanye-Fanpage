import React from "react";
import './AlbumCard.css'

const AlbumCard = ({title, imageURL, body}) => {
    return(
        <div className="albumcard">
            <div className="image">
                <img src={imageURL} alt="image of album cover" />
            </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="body">
                    <p>{body}</p>
                </div>
        </div>
    )
}

export default AlbumCard;