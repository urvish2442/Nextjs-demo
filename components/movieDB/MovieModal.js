import Modal from 'react-bootstrap/Modal';
import React from 'react';
import moment from 'moment';

function MyVerticallyCenteredModal(props) {
    const poster_path = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' + props.info.poster_path;
    var backdrop_path = `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces` + props.info.backdrop_path + `")`;

    const styles = {
        bgImage: {
            backgroundImage: `${backdrop_path}`,
            backgroundRepeat: 'no-repeat',
            color: 'black',
            backgroundPosition: 'center',
            boxSizing: 'border-box',
            backgroundSize: 'cover',
        },
        opacity: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(255, 230, 200, 0.75)',
        },
    };

    return (
        <Modal {...props} size='lg' className='my-modal' aria-labelledby='contained-modal-title-vcenter' centered>
            <div className='d-flex' style={styles.bgImage}>
                <div style={styles.opacity} className='d-flex flex-column flex-wrap'>
                    <div className='m-4'>
                        <div className='d-flex'>
                            <div style={{ Width: '25rem' }} className='rounded overflow-hidden m-1'>
                                <img src={poster_path} alt={props.info.title}></img>
                            </div>
                            <div className='d-flex flex-column flex-wrap m-2'>
                                <div className='d-flex flex-column flex-wrap'>
                                    <h3>
                                        <span className='fw-bolder'>{props.info.title}</span> ({moment(props.info.release_date).format('YYYY')})
                                    </h3>
                                </div>
                                <div style={{ width: '25rem' }} className='text-justify mt-3'>
                                    <span className='fw-bolder'>Original Language: </span>
                                    {props.info.original_language}
                                </div>
                                <div style={{ width: '25rem' }} className='text-justify mt-3'>
                                    <span className='fw-bolder'>Release Date: </span>
                                    {moment(props.info.release_date).format('L')}
                                </div>
                                <div style={{ width: '25rem' }} className='text-justify mt-3'>
                                    <span className='fw-bolder'>Overview: </span>
                                    {props.info.overview}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-row-reverse'>
                            <button onClick={props.onHide} className='btn btn-primary'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
