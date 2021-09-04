import { Title, Frame, Header, Body, Container, Inner, Item } from '../styles/accordion'
import { useState, useContext, createContext } from 'react'
const ToggleContext = createContext()

const Accordion = ({children, ...restProps}) => {
    return (
        <Container { ...restProps }>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Accordion.Title = ({children, ...restProps}) => {
    return (
        <Title { ...restProps}>
            {children}
        </Title>
    )
}

Accordion.Frame = ({children, ...restProps}) => {
    return (
        <Frame { ...restProps}>
            { children }
        </Frame>
    )
}

Accordion.Item = function AccordionItem ({children, ...restProps}) {
    const [ToggleShow, setToggleShow] = useState(false)
    return (
        <ToggleContext.Provider value={{ToggleShow, setToggleShow}}>
        <Item { ...restProps}>
            {children}
        </Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
    const { ToggleShow, setToggleShow } = useContext(ToggleContext)
    return (
        <Header onClick={() => setToggleShow(!ToggleShow)} {...restProps}>
            {children}
            {ToggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="Open" />
            )}
        </Header>
    )
}

Accordion.Body = function AccordioBody ({children, ...restProps}) {
    const { ToggleShow } = useContext(ToggleContext)
    return (
        <Body className={ToggleShow ? 'open' : 'closed'} {...restProps}>
            <span>{children}</span>
        </Body>
        )
}

export default Accordion
