import {Link} from "react-router-dom";


const Jumbotron = () => (
    <div className={'jumbotron'}>
        <h1 className={'display-4 fw-bold'}>Teatro Desde La Nada</h1>
        <p className={'col-md-8 fs-4'}>Espectáculos escénicos hechos por inquietos</p>
        <hr className={'my-4'} />
        <p>¡Nuestro taller de actuación está por comenzar!</p>
        <p className={'lead'}></p>
        <Link
            className="btn btn-primary          "
            role="button"
            to="/talleres"
        >
                Inscríbete
        </Link>
    </div>

);

export default Jumbotron;