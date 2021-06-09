import React, { Component } from 'react'

export default class StudentForm extends Component {
  
    constructor(props) {
        super(props);
        this.state = {name: '',
                      sname:'',
                      age:"",
                      br:'',
                      sem:'',
                      mob:'',
                      
                      sname2:'',
                      age2:"",
                      br2:'',
                      sem2:'',
                      mob2:''
                      };
    
      }
    
      handleChange = (e) => {
        this.setState({
                      [e.target.name]:e.target.value
            });
      }
    
      handleSubmit = (e) => {
        // alert('A name was submitted: ' + this.state.value);
        e.preventDefault();
        this.setState({
          sname2:this.state.sname,
          age2:this.state.age,
          br2:this.state.br,
          sem2:this.state.sem,
          mob2:this.state.mob
        })

      }

      

      
    
      render() {
        return (

          <>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} name="sname"/> <br></br>
              AGE:
              <input type="number" value={this.state.value} onChange={this.handleChange} name="age" /><br></br>
              Date of Birth:
              <input type="date" value={this.state.value} onChange={this.handleChange} name="dob" /><br></br>
              BRANCH:
              <input type="text" value={this.state.value} onChange={this.handleChange} name="br" /><br></br>
              SEMESTER:
              <input type="text" value={this.state.value} onChange={this.handleChange} name="sem" /><br></br>
              MOBILE:
              <input type="number" value={this.state.value} onChange={this.handleChange} name="mob" /><br></br>
            </label>
            <input type="submit" value="Submit" />
          </form>
          {/* <button onClick={this.handleSubmit} >See Details</button> */}
          <div>
            <h1>Student Details</h1>
            <p>{this.state.sname2}</p>
            <p>{this.state.age2}</p>
            <p>{this.state.dob2}</p>
            <p>{this.state.br2}</p>
            <p>{this.state.sem2}</p>
            <p>{this.state.mob2}</p>
          </div>
          </>
        );
      }
}
