import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';


function MovieCard({item}) {
    const img_url = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
    const src = `${img_url}${item.poster_path}`;

    return (
        <>
            <Card style={{ width: '20rem' }} className='mx-3 my-2'>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <div className='d-flex flex-column'>
                        <div style={{ height: '3rem' }} className='overflow-hidden'>
                            <h5 className='fw-bolder'>{item.title}</h5>
                        </div>
                        <div style={{ height: '3rem' }} className='d-flex flex-column'>
                            <div>
                                <p>
                                    <span className='text-secondary'>Rating : </span>
                                    <span className='fw-bolder'>
                                        {item.vote_average}
                                        <span className='text-secondary'>/10 : </span>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className='text-secondary'>Relesed : </span>
                                    <span className='fw-bolder'>{moment(item.release_date).fromNow()}</span>
                                </p>
                            </div>
                        </div>
                        <div style={{ height: '100px' }} className='overflow-hidden mt-4'>
                            <p><span className='text-secondary'>Overview : </span>{item.overview}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
export default MovieCard;