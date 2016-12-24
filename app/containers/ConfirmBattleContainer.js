import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import { getPlayersInfo } from '../utils/githubHelpers'

const ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentDidMount: function () {
        const {query} = this.props.location;
        getPlayersInfo([query.PlayerOne, query.PlayerTwo])
            .then(function (players) {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            }.bind(this));
    },
    handleInitialBattle: function () {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitialBattle} />
        )
    }
});

export default ConfirmBattleContainer