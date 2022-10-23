import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function ContainerOutsideExample() {
  return (
    <Container className="text-secondary pt-3">
      <Navbar expand="lg" className='bg-dark rounded '  >
        <Container>
          <Navbar.Brand href="#"> <img src="https://www.pngkey.com/png/full/275-2757097_apple-iphone-white-logo-png.png" alt="" height="55px" /> </Navbar.Brand>

          <div className='d-flex w-50 justify-content-evenly'>
            <h5> Home </h5>
            <h5> Pricing </h5>
            <h5> Contact</h5>
            <Link to='/cart'> <h5><i class="fi fi-sr-shopping-cart"></i> Cart</h5> </Link>   
          </div>  
        
        <div>
            <button className='btn btn-outline-light me-2 text-secondary'> Log-in </button>
            <button className="btn btn-warning"> Sign-up </button>
        </div>
          
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;