import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
     this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,

      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }

    };
    
  }
  render() {
    return (
     <>
    <div className='content-rating'>
        <h1>Lorem Ipsum</h1>
        <p>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor."
        </p>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
                Me gusta ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
                No me gusta ({this.state.dislikes})
            </button>
            <p>Total de interacciones: {this.state.totalRatings}</p>
        </div>
    </div>
     </>
    );
  }
}

export default ContentRating;
