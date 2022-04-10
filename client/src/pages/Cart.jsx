import Navbar from '../components/Navbar'
// import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})};
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled"? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none"})};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
`;

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
    `;

const ProductDetail = styled.div`
    flex; 2;
    display: flex;
`;

const Image= styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-ites: center;
    justify-content: center;
`; 

const ProductAmountConatiner = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 50px"})};
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px"})};
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    boreder-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
    display: flex;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span`
    display: flex;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="id1.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>USE AND THROW MASK (SET OF 10)</ProductName>
                                <ProductId><b>ID:</b>938137182930</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>Set of 10</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountConatiner>
                               <Add/>
                               <ProductAmount>2</ProductAmount>
                               <Remove/> 
                            </ProductAmountConatiner>
                            <ProductPrice>Rs.100/-</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="id2.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>Savlon Surface Disinfectant Spray
                                                            <br/>Spray Sanitizer, Germ Protection on Hard
                                                            <br/> and Soft Surfaces</ProductName>
                                <ProductId><b>ID:</b>938137182720</ProductId>
                                <ProductColor color="none"/>
                                <ProductSize><b>Size:</b>170ml</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountConatiner>
                               <Add/>
                               <ProductAmount>2</ProductAmount>
                               <Remove/> 
                            </ProductAmountConatiner>
                            <ProductPrice>Rs.160/-</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Rs.260/-</SummaryItemPrice> 
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>Rs.100/-</SummaryItemPrice> 
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Disount</SummaryItemText>
                        <SummaryItemPrice>-Rs.100/-</SummaryItemPrice> 
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>Rs.260/-</SummaryItemPrice> 
                    </SummaryItem>
                    <Button>Checkout Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
