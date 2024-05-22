import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaPost } from '../../routes/coordinator'
import { Card } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'

export default function CardPost({ post }) {

  const [postUser, setPostUser] = useState({})

  const navigate = useNavigate()

  //console.log(post.id);

  useEffect(() => {

    axios.get(`${BASE_URL}/posts/postuser?idPost=${post.id}`)
      .then((resp) => {
        let [idUser] = resp.data

        axios.get(`${BASE_URL}/users?idUser=${idUser.user_id}`)
          .then((resp) => {
            let [user] = resp.data
            setPostUser(user)
          })
          .catch((err) => {
            //console.log('user id', err);
          })
      })
      .catch((erro) => {
        console.log(erro);
      })

  }, [])



  //console.log();

  return (
    <Card onClick={() => { irParaPost(navigate, post.id) }}>
      <p>{post.text_post}</p>
      <p>@{postUser.name}</p>
    </Card>
  )
}
