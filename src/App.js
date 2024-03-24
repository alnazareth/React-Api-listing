import React,{Component} from 'react'
import axios from 'axios'
import "./App.css"


class App extends Component {

  constructor(props){
   super(props);

   this.state={
    users:[],
    loading:false,
  }
}



render(){

 return <div className="app">
   {!this.state.loading ?
   this.state.users.map(user => 
   <div key={user.id.value}>
      <div>
         <img src={user.picture.medium}></img>
      </div>
      <div>
         <strong>Nombre:</strong>
         {user.name.first}&nbsp;{user.name.last} <strong>
         Edad:</strong>
         {user.dob.age} 
      </div>
      <div>
         <strong>
         Celular:</strong>
         {user.cell}
      </div>
      <div>
         <strong>
         Ciudad:</strong>
         {user.location.city}
      </div>
      <div>
         <strong>
         Correo:</strong>
         {user.email}
      </div>
      <hr>
      </hr>
   </div>
   ): "Loading Now......"} 
</div> 
}


getUsers(){
  this.setState({
    loading:true
  })
    axios('https://api.randomuser.me/?nat=US&results=50').then(response=>this.setState({
    users:response.data.results,
    loading:false,
  }))

}

componentDidMount(){
this.getUsers();
}

}
export default App;
