import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cartoes(){
  const dados = [
    {
      titulo:"Lata de Tinta Vermelha",
      preco:"R$72.00",
      descricao:"Lata de 3.6L de tinta de cor vermelha.",
      imagem:"https://www.gessorochdale.com.br/gessos/imagens/onde-vende-tinta-parede-branca.jpg"
    },
    {
      titulo:"Lata de Tinta Spray Azul",
      preco:"R$18.00",
      descricao:"Lata de 400mL de tinta spray de cor azul.",
      imagem:"https://www.lojamatergi.com.br/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/t/i/tinta_uso_geral_azul_mundial_prime_-_matergi.png"
    },
    {
      titulo:"Rolo de tinta",
      preco:"R$6.00",
      descricao:"Rolo de tinta de 8cm de comprimento",
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyO6rfjsJfwUKeJwOcTqcoMg5G2ixxle0WC4yCo2Qkm-6TPsLyPFPhKdXD2uSqfYmiHvA&usqp=CAU"
    }
  ]
    return(
    <>
      <CardGroup>
        {dados.map(({titulo, preco, descricao, imagem}) =>(
          <Card key={titulo}>
            <Card.Img variant='top' src={imagem}/>
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>
                {descricao}
              </Card.Text>
              <Card.Text>
                {preco}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
     {/* <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.gessorochdale.com.br/gessos/imagens/onde-vende-tinta-parede-branca.jpg" />
        <Card.Body>
          <Card.Title>Lata de Tinta Vermelha</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat harum odio voluptate ullam exercitationem accusamus mollitia tempora dicta fuga deserunt praesentium veniam tempore quibusdam a eum, blanditiis culpa vel!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.lojamatergi.com.br/media/catalog/product/cache/1/image/700x700/9df78eab33525d08d6e5fb8d27136e95/t/i/tinta_uso_geral_azul_mundial_prime_-_matergi.png" />
        <Card.Body>
          <Card.Title>Tinta Spray</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat harum odio voluptate ullam exercitationem accusamus mollitia tempora dicta fuga deserunt praesentium veniam tempore quibusdam a eum, blanditiis culpa vel!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyO6rfjsJfwUKeJwOcTqcoMg5G2ixxle0WC4yCo2Qkm-6TPsLyPFPhKdXD2uSqfYmiHvA&usqp=CAU" />
        <Card.Body>
          <Card.Title>Rolo de tinta</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat harum odio voluptate ullam exercitationem accusamus mollitia tempora dicta fuga deserunt praesentium veniam tempore quibusdam a eum, blanditiis culpa vel!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup> */}
    </>
    )
}
export default Cartoes