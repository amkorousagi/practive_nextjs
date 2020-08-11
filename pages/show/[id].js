import Link from 'next/link';

function Show({show}) {
    return (
    //<p>{JSON.stringify(show)}</p>
    <>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>

        <h1>{show.name}</h1>
        <p>{show.summary}</p>
        {show.image ? <img src={show.image.medium}/>:null}
    </>
    );
}


Show.getInitialProps = async function(context) {
    const {id} = context.query;
    //console.log({id});

    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    

    return {show};
}

export default Show;