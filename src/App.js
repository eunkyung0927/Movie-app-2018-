import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
  //Render: componentWillmount() -> render() -> componentDidMount()
  //Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
 
  state ={
   
    
  }

  componentDidMount(){
    setTimeout(() =>{
        this.setState({
          movies :[
            {
              title:"Intimate Strangers",
              poster:"http://image.cine21.com/resize/cine21/poster/2018/1106/11_51_55__5be101cb4ac53[X230,330].jpg"
            },
            {
              title:"Bohemian Rhapsody",
              poster:"https://www.musiclinkup.com/upload/post_image/15318345662197.jpg"
            },
            {
              title:"The Nutcracker",
              poster:"https://img.insight.co.kr/static/2018/09/13/700/66t9dr0kg6f1bdbyvjw2.jpg"
            },
            {
              title:"A Star Is Born",
              poster:"https://cdn.cinematerial.com/p/500x/0krc77b4/a-star-is-born-portuguese-movie-poster.jpg"
            },
            {
              title:"12 Feet Deep",
              poster:"https://images-na.ssl-images-amazon.com/images/I/81N5lrqQmOL._RI_.jpg"
            }
          ]
        })
    },5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index )=>{
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }
  render() {
    return (
      <div className="App">
       {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
