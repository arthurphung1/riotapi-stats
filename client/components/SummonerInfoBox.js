import React from 'react'
import {connect} from 'react-redux'
import {fetchMatchDetails, fetchMatchTeams} from '../store/summoner'

import {Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SummonerInfoBox extends React.Component {
  componentDidMount() {
    this.props.loadMatchSet()
  }

  render() {
    const matchSet = this.props.summonerData.matchSet
    console.log(matchSet, 'MATCHSET DATA')

    return (
      <div className="root">
        <Container>
          {matchSet.map(match => (
            <Row key={match.id} className="m-5">
              <Col sm={1}>
                <Row>{match.gameMode}</Row>
                <Row>{match.teamOutcome === 'Fail' ? 'Defeat' : 'Victory'}</Row>
              </Col>
              <Col sm={3}>
                <Row>
                  <Col>
                    <Row className="justify-content-center">
                      <img
                        src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${
                          match.championName
                        }.png`}
                      />
                    </Row>
                    <Row className="justify-content-center">
                      {match.championName}
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <img
                        src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/${
                          match.spell1
                        }.png`}
                      />
                    </Row>
                    <Row>
                      <img
                        src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/${
                          match.spell2
                        }.png`}
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col sm={1}>{`${match.kills}/${match.deaths}/${
                match.assists
              }`}</Col>
              <Col sm={3}>
                <Row className="justify-content-sm-center">
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/${
                      match.item0
                    }.png`}
                  />
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/${
                      match.item1
                    }.png`}
                  />
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/${
                      match.item2
                    }.png`}
                  />
                </Row>
                <Row className="justify-content-sm-center">
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/${
                      match.item3
                    }.png`}
                  />
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/${
                      match.item4
                    }.png`}
                  />
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/${
                      match.item5
                    }.png`}
                  />
                </Row>
                <Row className="justify-content-sm-center">
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/${
                      match.item6
                    }.png`}
                  />
                </Row>
              </Col>
              <Col sm={2}>
                <Row>{match.teammate1}</Row>
                <Row>{match.teammate2}</Row>
                <Row>{match.teammate3}</Row>
                <Row>{match.teammate4}</Row>
                <Row>{match.teammate5}</Row>
              </Col>
              <Col sm={2}>
                <Row>{match.opponent1}</Row>
                <Row>{match.opponent2}</Row>
                <Row>{match.opponent3}</Row>
                <Row>{match.opponent4}</Row>
                <Row>{match.opponent5}</Row>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    )
  }
}

const mapState = state => {
  return {
    summonerData: state.summoner
  }
}

const mapDispatch = dispatch => {
  return {
    loadMatchSet: () => dispatch(fetchMatchDetails())
  }
}

export default connect(mapState, mapDispatch)(SummonerInfoBox)
