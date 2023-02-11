import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  padding: 20px;
  display: flex;
  justify-content: center;
  font-family: 'Roboto';
`

export const GameContainer = styled.div`
  width: 80%;
  padding: 20px;
`
export const GameDetailsAndScoreContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 13px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameHeading = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-family: 'Bree Serif';
  font-weight: 500;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 220px;
  height: 180px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreParagraphText = styled.p`
  color: #223a5f;
  font-size: 30px;
  margin-bottom: 0px;
  font-weight: bold;
  font-family: 'Bree Serif';
`

export const Score = styled.h1`
  color: #223a5f;
  font-size: 40px;
  margin-top: 8px;
  font-weight: bold;
`

export const GameImageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UnorderedContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 500px;
  padding: 20px;
  flex-wrap: wrap;
`

export const PlayResultContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const GamePlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GamePlayer = styled(GamePlayerContainer)`
  flex-direction: column;
  align-items: center;
`

export const GamePlayerHeading = styled.h1`
  color: #ffffff;
  font-size: 28px;
`

export const GameResultImage = styled.img`
  width: 200px;
`

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameResultHeading = styled(GamePlayerHeading)`
  font-size: 35px;
`

export const PlayAgainButton = styled.button`
  width: 190px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  height: 46px;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`
