import {ListItem, Button, Image} from './styledComponents'

const ChoiceItem = props => {
  const {eachChoice, ChoiceClicked} = props
  const {id, imageUrl} = eachChoice

  const onClickChoiceButton = () => {
    ChoiceClicked(id)
  }

  return (
    <ListItem>
      <Button type="button" onClick={onClickChoiceButton}>
        <Image src={imageUrl} alt="your choice" />
      </Button>
    </ListItem>
  )
}

export default ChoiceItem
