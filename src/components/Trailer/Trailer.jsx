// import PropTypes from 'prop-types';
// import Player from "@vimeo/player";
const Trailer = ({src}) => {
    // const iframe = document.querySelector("iframe");
// const player = new Player(playerRef);
// player.on();
    return (
        <>
    <iframe width="850" height="650" src={"https://www.youtube.com/embed/"+src}
    title="Video player" 
    // frameborder="0"
    // allow="autoplay; encrypted-media"
    // allowfullscreen="true"
    allow="fullscreen"
    ></iframe>
        </>
        );
    };
    export default Trailer;
