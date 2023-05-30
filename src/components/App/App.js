import React from "react";
import './app.css'
import CardItem from  '../Card'

export class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        error: null, 
        isLoaded: false,
        items: []
      }
    }

    componentDidMount() {
      fetch("http://localhost:3000/jobs")
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            items: response
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
    }

    render() {
      const {error, isLoaded, items} = this.state
      if (error) {
        return <h1>Error {error}</h1>
      }else if (!isLoaded) {
        return <h1>Loading</h1>
      }else {
        return (
          <div className="container">
              <ul>
                {items.map(item => (
                  <CardItem job={item}/>
                ))}
              </ul>
          </div>
        )
      }

     
    }
}


