import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { RefactorActionInfo } from 'typescript';
import { IChirp } from '../utils/types';
import { stringify } from 'querystring';

const Details: React.FC<DetailsProps> = () => {

    const { id } = useParams();
    const history = useHistory();

    const [chirp, setChirp] = useState<IChirp>(null);

    useEffect(() => {
        (async () => {
            let res = fetch(`/api/cjhirps/${id}`);
            let chirp = await (await res).json();
            setChirp(chirp);
        })(),
    }, [id]);

    return (
        <main className="container">
            <section className="row my justify-content-center">
                <div className=" col md 12">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <h4 className="crd-title">@{chirp?.username}</h4>  {/*the ? means it checks to see if theres a value to be read or not */}
                            <p className="card-text">{chirp?.message}</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <button onClick={() => history.goBack()} className="btn btn-outline-primary mx-1">Go Back</button>
                                <Link className="btn btn-outline-info mx-1" to={`/admin/${chirp?.id}`}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

interface DetailsProps { }

export default Details;