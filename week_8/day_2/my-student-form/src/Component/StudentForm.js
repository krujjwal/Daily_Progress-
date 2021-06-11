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
                      mob2:'',

                      stud:[]
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
          mob2:this.state.mob,
        })

        let data ={
          name:this.state.sname,
          agee : this.state.age,
          brr:this.state.br,
          semm:this.state.sem,
          mobb:this.state.mob
        }

        this.state.stud.push(data)

        this.setState({
          
          sname:"",
          age:"",
          dobb:"",
          br:"",
          sem:"",
          mob:"",

        })
        
      }

      handleDetails(i){
          alert(i)
          this.state.stud.splice(i,1)
          console.log(this.state.stud)
          this.forceUpdate();

          // this.setState({
          //   stud:this.state.stud
          // })
      }
      

      
    
      render() {

        return (

          <>
          
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.sname} onChange={this.handleChange} name="sname"/> <br></br>
              AGE:
              <input type="number" value={this.state.age} onChange={this.handleChange} name="age" /><br></br>
              Date of Birth:
              <input type="date" value={this.state.dob} onChange={this.handleChange} name="dob" /><br></br>
              BRANCH:
              <input type="text" value={this.state.br} onChange={this.handleChange} name="br" /><br></br>
              SEMESTER:
              <input type="text" value={this.state.sem} onChange={this.handleChange} name="sem" /><br></br>
              MOBILE:
              <input type="number" value={this.state.mob} onChange={this.handleChange} name="mob" /><br></br>
            </label>
            <input type="submit" value="Submit" />
          </form>
          {/* <button onClick={this.handleSubmit} >See Details</button> */}
          <div>
            <h1>Student Details</h1>
              {
                this.state.stud.map((e,i)=>{
                  return <>
                          <div key={i}>
                            <p>{e.name}</p>
                            <p>{e.agee}</p>
                            <p>{e.dobb}</p>
                            <p>{e.semm}</p>
                            <p>{e.brr}</p>
                            <p>{e.mobb}</p>
                            <button onClick={()=>{this.handleDetails(i)}}>Remove Details</button>
                          </div>
                        </>
                })
              }
          </div>
          </>
        );
      }
}
