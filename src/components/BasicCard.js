import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from './Image';
import Name from './Name';
import Description from './Description';
import Price from './Price';
/* functional component*/
// const BasicCard = (props) => {
//     const [name, setName] = useState("amina"); // Initialize state with useState

//     const handleClick = () => {
//         setName('arya'); // Update state when button is clicked
//     };
/*class coponent*/



class BasicCard extends React.Component {
    state = {
        name: "amina" 
    };
 
    handleClick = () => {
        this.setState({ name: 'arya' }); 
    };

    render() {
        return (
            <Card style={this.props.styleObject}>
                <Card.Img variant="top" src={Image()} />
                <Card.Body>
                    <Card.Title style={{ fontFamily: "fantasy", fontSize: 20, fontStyle: "oblique" }}>{this.state.name}</Card.Title>
                    <Card.Text style={{ fontFamily: "cursive", fontSize: 17 }}>
                        <Description styleinherit={this.props.styleinherit} />
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item style={{ textAlign: "center", fontFamily: "fantasy", fontSize: 20 }}>{Price()}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#" style={{ fontFamily: "cursive", fontSize: 15 }}>Previous Product</Card.Link>
                    <Card.Link href="#" style={{ fontFamily: "cursive", fontSize: 15 }}>Next Product</Card.Link>
                    
                    <h1>{this.state.name}</h1>
                    <button onClick={this.handleClick}>Click Me</button> 
                </Card.Body>
            </Card>
        );
    }
}

export default BasicCard;
