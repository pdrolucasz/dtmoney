import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        @media(max-width: 539px) {
            display: none;
        }
        
        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title)
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`

export const ResponsiveTable = styled.div`
    @media (min-width: 540px) {
        display: none;
    }

    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    p:first-child {
        color: var(--text-title)
    }

    p.deposit {
        color: var(--green);
    }

    p.withdraw {
        color: var(--red);
    }

    & + div {
        margin-top: 1rem;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0.5rem;
    }
`