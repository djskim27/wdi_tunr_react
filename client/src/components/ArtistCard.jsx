import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ArtistStyles = styled.div`
margin-top: 10px;
width: 30%;
  box-shadow: 1px 1px 5px black;
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
  }
`

const ArtistCard = (props) => {
    const artist = props.artist
    return (
        <ArtistStyles>
            <Link to={`/artist/${artist.id}`}>
            <img src={artist.photo_url} alt={artist.name} />
            </Link>
            <h3>{artist.name}</h3>
        </ArtistStyles>
    );
};

export default ArtistCard;