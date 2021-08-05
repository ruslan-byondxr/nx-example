import styled from 'styled-components'
import { Header } from '@stores/header'
import { Sidebar } from '@stores/sidebar'
import { useEffect, useState } from 'react'
import { shuffle } from '@stores/utils'

interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string
}

const StyledApp = styled.div`
  font-family: sans-serif;
  height: calc(100vh - 10px);
  display: grid;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
  grid-template-rows: min-content min-content 1fr min-content;
  gap: 1px;

  header {
    grid-column: 1/-1;
  }

  aside {
    grid-column: 1/2;
    grid-row: 2/4;
  }

  main {
    grid-column: 2/3;
  }

  .users-list {
    display: grid;
    grid-gap: 2rem;
  }

  .user-card {
    box-shadow: 0px 1px 7px rgb(115 115 115 / 23%);
    padding: 10px;
    border-radius: 5px;
  }

  .gutter-left {
    margin-left: 9px;
  }

  .col-span-2 {
    grid-column: span 2;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    padding: 0 36px;
  }

  p {
    text-align: center;
  }

  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    margin: 40px 0 10px 0;
  }

  .resources {
    text-align: center;
    list-style: none;
    padding: 0;
    display: grid;
    grid-gap: 9px;
    grid-template-columns: 1fr 1fr;
  }

  .resource {
    color: #0094ba;
    height: 36px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 3px 9px;
    text-decoration: none;
  }

  .resource:hover {
    background-color: rgba(68, 138, 255, 0.04);
  }

  pre {
    padding: 9px;
    border-radius: 4px;
    background-color: black;
    color: #eee;
  }

  details {
    border-radius: 4px;
    color: #333;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 3px 9px;
    margin-bottom: 9px;
  }

  summary {
    outline: none;
    height: 36px;
    line-height: 36px;
  }

  .github-star-container {
    margin-top: 12px;
    line-height: 20px;
  }

  .github-star-container a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
  }

  .github-star-badge {
    color: #24292e;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 3px 10px;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 3px;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
    margin-left: 4px;
    font-weight: 600;
  }

  .github-star-badge:hover {
    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
    border-color: rgba(27, 31, 35, 0.35);
    background-position: -0.5em;
  }
  .github-star-badge .material-icons {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
`

export function App() {
  const [users, setUsers] = useState<null | User[]>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://api.jsonserve.com/oi347N')
      const users = await res.json()
      if (users.length) {
        const randomUsers: User[] | any = shuffle(users)
        setUsers(randomUsers)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <StyledApp>
      <Header />
      <Sidebar />

      <main>
        <h2>Users &amp; list updated 2525</h2>
        <div className="users-list">
          {users
            ? users.map(
                ({
                  id,
                  first_name,
                  last_name,
                  email,
                  gender,
                  ip_address,
                }: User) => (
                  <div key={id} className="user-card">
                    <div>{first_name}</div>
                    <div>{last_name}</div>
                    <div>{email}</div>
                    <div>{gender}</div>
                    <div>{ip_address}</div>
                  </div>
                )
              )
            : 'Loading...'}
        </div>
      </main>
    </StyledApp>
  )
}

export default App
