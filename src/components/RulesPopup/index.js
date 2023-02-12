import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  RulesCustomButton,
  RulesCustomHeading,
  PopupContainer,
  RulesCustomContainer,
  CustomBtn,
  CloseImage,
  BtnContainer,
} from './styledComponents'

const RulesPopup = () => (
  <Popup
    modal
    trigger={
      <RulesCustomContainer>
        <RulesCustomButton type="button">
          <RulesCustomHeading>RULES</RulesCustomHeading>
        </RulesCustomButton>
      </RulesCustomContainer>
    }
  >
    {close => (
      <PopupContainer>
        <BtnContainer>
          <CustomBtn type="button" onClick={() => close()}>
            <RiCloseLine size={20} />
          </CustomBtn>
        </BtnContainer>
        <CloseImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="image"
        />
      </PopupContainer>
    )}
  </Popup>
)

export default RulesPopup
