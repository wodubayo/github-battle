import React, { PropTypes } from 'react'
import { space } from '../styles'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

function ConfirmBattle({isLoading, playersInfo, onInitiateBattle}) {
    return isLoading === true
        ? <Loading speed={800} text={'Waiting'} />
        : <MainContainer>
            <h1>Confirm Player</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Player One'>
                    <UserDetails info={playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player Two'>
                    <UserDetails info={playersInfo[1]} />
                </UserDetailsWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12" style={space}>
                    <button className="btn btn-success btn-lg" onClick={onInitiateBattle}>Initiate Battle!</button>
                </div>
                <div className="col-sm-12" style={space}>
                    <Link to='/playerOne'>
                        <button className="btn btn-danger btn-lg">Reselect Players</button>
                    </Link>
                </div>
            </div>
        </MainContainer>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle