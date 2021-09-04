import styled from 'styled-components'


export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`

export const Inner = styled.div`
    display: flex;
    align-items:  center;
    justify-content: space-between;
    flex-direction: ${({direction}) => (direction)};
    margin: auto;
    max-width: 1100px;
    width: 100%;

    @media (max-width: 1000px) {
    flex-direction: column;
}
`
export const Pane  = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`

export const Title = styled.h1`
    line-height: 1.1;
    margin-bottom: 8px;
    font-size: 50px;

    @media (max-width:600px) {
        font-size: 35px;
    }
`

export const SubTitle = styled.h3`
    font-size: 26px;
    font-weight: lighter;
    line-height: 1.1;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;

`

export const Container = styled.div` 
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`