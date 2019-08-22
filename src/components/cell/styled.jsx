import styled from 'styled-components'

export const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
`

export const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
`

export const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid var(--text-color);
    padding: 30px 0;
`
