import React from "react";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
// import Card from "../Card";
// import SearchForm from "../SearchForm";
// import PuppyDetail from "../PuppyDetail";
// import API from "../utils/API";

function Feed() {
  
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(require("https://i.imgur.com/qkdpN.jpg"))` } }>
      <h1>Feed</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet ryisus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
export default Feed;

// class Search extends React.Component {
// // state={
// //     results: {},
// //     query: ""
// // }

// // componentDidMount(){
// //     this.searchPuppy("shihtzu")
// // }

// // searchPuppy = query =>{
// //     API.search(query)
// //     .then(res => this.setState({results: res.data}))
// //     .catch(err => console.log(err));
// // };

// // handleInputChange = event => {
// //     const value = event.target.value;
// //     const name = event.target.name;
// //     this.setState({
// //       [name]: value
// //     });
// //   };

// //   handleFormSubmit = event => {
// //     console.log("hit");
// //     event.preventDefault();
// //     this.searchPuppy(this.state.query);
// //   };


// //  render(){
// //      console.log(!!this.state.query);
// //      console.log(this.state.results);
// //   return (
// //     <div>
// //         <Container>
// //         <Row>
// //           <Col size="md-8">
// //             <Card
// //               heading={this.state.query || "Search for a Puppy to begin"}
// //             >
// //               {this.state.query ? (
// //                   <ul>
// //                   {this.state.results.message.map(dog => {
// //                       return <PuppyDetail key={dog} image = {dog}/>
// //                   })}
// //                   </ul>
// //               ) : (
// //                 <h3>No Results to Display</h3>
// //               )}
// //             </Card>
// //           </Col>
// //           <Col size="md-4">
// //             <Card heading="Search">
// //               <SearchForm
// //                 value={this.state.query}
// //                 handleInputChange={this.handleInputChange}
// //                 handleFormSubmit={this.handleFormSubmit}
// //               />
// //             </Card>
// //           </Col>
// //         </Row>
// //       </Container>
    
// //     </div>
// //   );
// // }
// }


// to the left users will have a search bar with the ability to search by country
// all the people they follow would show up when they search
// in the middle they would have the profiles, any updates from their profiles would appear at the top
// another option is to have profiles 