import Carousel from 'react-bootstrap/Carousel';

function Banner(){
    return(
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/15013713/pexels-photo-15013713/free-photo-of-baguncado-desornado-tintas-respingos-de-tinta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Super Ofertas</h3>
          <p>Compre suas cores ideais por 50% de desconto</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6068821/pexels-photo-6068821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <Carousel.Caption>
          <h3>Temos Tinata Spray</h3>
          <p>Novidade na loja tinta spray de todas as cores</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7217928/pexels-photo-7217928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Pacote Casa Nova</h3>
          <p>Compre o nosso novo pacote para dar cara para sua nova casa</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}
export default Banner