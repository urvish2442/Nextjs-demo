export default function Counter({ myObj, dataFromChild }) {
    const buttonHandler = (e) => {
        const { name } = e.target;
        if (name === 'inc') {
            myObj.count++;
        } else if(name === 'dec'){
            myObj.count--;
        }
        dataFromChild(myObj)

    };

    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className='d-flex justify-content-center rounded'>
                <div className='align-middle'>
                    <button className='btn btn-secondary ' name='inc' onClick={buttonHandler}>
                        +
                    </button>
                </div>
                <div>
                    <h3 className='px-3'>{myObj?.count}</h3>
                </div>
                <div>
                    <button className='btn btn-secondary dec' name='dec' onClick={buttonHandler}>
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}
