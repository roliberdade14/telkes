import { Title, PostContainer } from '../style'
import { Card } from '../components/Card/Card'
import useRequestData from "../hooks/useRequestData";


const CommentsPage = () => {

  const [postagens, isLoading, isError] = useRequestData('comments')

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>

        {isError ? <h1>Tente Novamente...</h1> :
          isLoading ? <h1>Carregando...</h1> :
            postagens.map((post) => {
              //console.log(post);
              return (
                <Card
                  key={post.id}
                  text={post.body}
                  backgroudColor={'#1dc690'}
                  textColor={'#ffffff'}
                />)
            })}
      </PostContainer>
    </div>
  );
}

export default CommentsPage;



