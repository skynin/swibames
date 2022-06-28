import { Box, Button, FormField, Header, Layer, Menu, Notification, TextInput } from "grommet";
import { Home as IcoHome } from 'grommet-icons'
import { pageStore } from "../pages/PageStore";
import { useNavigate } from 'react-router-dom'
import { useMemo, useState } from "react";
import UserModel from "../kernel/models/UserModel";

function HeaderMenu() {

  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  let currUser = new UserModel()
  
  const activedGames = [
    {label: 'one G', onClick: () => {navigate( + '/games/sadasdsa')}},
    {label: 'two G', onClick: () => {navigate( + '/games/cbcbvcbc')}},
  ]

  const leftMenu = useMemo(() => {
    const leftMenu = [
      { label: 'profile', onClick: () => navigate('/user') }
    ]

    if (currUser.isAuth) {
      leftMenu.push({ label: 'logout', onClick: () => {currUser.logout(); navigate('/')} })
    }
    else {
      leftMenu.push({ label: 'login', onClick: () => setShowModal(true)})
    }

    return leftMenu
  },[currUser.id, currUser.isAuth])

  return (
    <Header background="brand">
    <Button icon={<IcoHome />} hoverIndicator onClick={()=>navigate('/')}/>
    {activedGames.length != 0 && <Menu label="Активные игры" items={activedGames} /> }
    <Menu label="account" items={leftMenu} />
    {showModal && <AuthModal currUser={currUser} setShow={setShowModal}/>}
  </Header>  )
}

function AuthModal({setShow, currUser} : {setShow: (s: boolean)=>void, currUser: UserModel}) {

  const [secID, setSecID] = useState<string>()
  const [showNote, setShowNote] = useState<boolean>()

  function loginClick() {

    if (currUser.login(secID)) {
      setShow(false)
    }
    else {
      setShowNote(true)
    }
  }

  return (
    <>
    {showNote &&
    <Notification
        toast
        status="critical"
        title="Ошибка"
        message="Неверный секретный ID"
        onClose={() => setShowNote(false)}/>
    }
    <Layer
      onEsc={() => setShow(false)}
      onClickOutside={() => setShow(false)}
    >
      <Box pad="medium">
      <FormField label="Введите секретный ID">
        <TextInput placeholder="секретный ID" onChange={({target: {value}}) => setSecID(value)}/>
      </FormField>
      <Button label="Войти" onClick={() => loginClick()} />
      </Box>
    </Layer>
    </>
  )
}

export default HeaderMenu;