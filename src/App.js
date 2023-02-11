import {Component} from 'react'

import ChoiceItem from './components/ChoiceItem'

import {
  AppContainer,
  GameContainer,
  GameDetailsAndScoreContainer,
  GameHeading,
  ScoreContainer,
  GameDetails,
  ScoreParagraphText,
  Score,
  GameImageContainer,
  UnorderedContainer,
  PlayResultContainer,
  GamePlayerHeading,
  GameResultImage,
  GamePlayerContainer,
  GamePlayer,
  GameResultContainer,
  GameResultHeading,
  PlayAgainButton,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {isGameEnded: false}

  ChoiceClicked = id => {
    console.log(id)
    this.setState({isGameEnded: true})
  }

  onClickPlayAgain = () => {
    this.setState({isGameEnded: false})
    console.log('Play Again')
  }

  renderGamePlayingView = () => (
    <UnorderedContainer>
      {choicesList.map(eachChoice => (
        <ChoiceItem
          eachChoice={eachChoice}
          key={eachChoice.id}
          ChoiceClicked={this.ChoiceClicked}
        />
      ))}
    </UnorderedContainer>
  )

  renderGameResultView = () => (
    <PlayResultContainer>
      <GamePlayerContainer>
        <GamePlayer>
          <GamePlayerHeading>YOU</GamePlayerHeading>
          <GameResultImage src={choicesList[2].imageUrl} alt="your choice" />
        </GamePlayer>
        <GamePlayer>
          <GamePlayerHeading>OPPONENT</GamePlayerHeading>
          <GameResultImage src={choicesList[1].imageUrl} alt="your choice" />
        </GamePlayer>
      </GamePlayerContainer>
      <GameResultContainer>
        <GameResultHeading>YOU WON</GameResultHeading>
        <PlayAgainButton onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultContainer>
    </PlayResultContainer>
  )

  render() {
    const {isGameEnded} = this.state

    return (
      <AppContainer>
        <GameContainer>
          <GameDetailsAndScoreContainer>
            <GameDetails>
              <GameHeading>ROCK</GameHeading>
              <GameHeading>PAPER</GameHeading>
              <GameHeading>SCISSORS</GameHeading>
            </GameDetails>
            <ScoreContainer>
              <ScoreParagraphText>Score</ScoreParagraphText>
              <Score>0</Score>
            </ScoreContainer>
          </GameDetailsAndScoreContainer>
          <GameImageContainer>
            {isGameEnded
              ? this.renderGameResultView()
              : this.renderGamePlayingView()}
          </GameImageContainer>
        </GameContainer>
      </AppContainer>
    )
  }
}

export default App
