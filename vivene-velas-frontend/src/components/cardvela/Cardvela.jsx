const Cardvela = ({ imgSrc, title, description }) => {
    return (
        <>
            <div className="post-item clearfix col-lg-6">
                <img src={imgSrc} alt={title} />
                <h4><a href="#">{title}</a></h4>
                <p>{description}</p>
            </div>
            <div className="col-lg-2 colun">
                {/* <button type="button" className="btn btn-success"><i className="bi bi-check-circle"></i></button>
                <button type="button" className="btn btn-success"><i className="bi bi-check-circle"></i></button> */}
            </div>
        </>
    );
};

export default Cardvela;
