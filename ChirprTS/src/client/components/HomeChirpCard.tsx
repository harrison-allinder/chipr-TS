import * as React from 'react';
import { IChirp } from '../utils/types';
import { useHistory } from 'react-router-dom';

import { RefactorActionInfo } from 'typescript';

const HomeChirpCard: React.FC<HomeChirpCardProps> = props => {

const history = useHistory();



    return (
        <div className="col-md-6 mx-1">
            <div onClick={() => history.push(`/details/${props.chirp.id}`)} className="card my-2 shadow">
                <div className="card-body text-center">
                    <h4 className="card-title">@{props.chirp.username}</h4>  {/* the @ symbol is just cosmetic, it makes the usernames on the webpage say @username like insta or twitter */}
                    <p className="card-text">{props.chirp.message}</p>
                    
                </div>
            </div>
        </div>
    );
;
}

interface HomeChirpCardProps {
    chirp: IChirp
}

export default HomeChirpCard;





//to add stuff to a div type periods instead of spaces: like div.card.m-2.shadow turns into
// <div className="card my-2 shadow"></div> when you hit enter
