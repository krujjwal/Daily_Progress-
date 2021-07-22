import React, { Component } from 'react'
import Style from './ToDoApp.module.css'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateTimePicker from 'react-datetime-picker';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import EditIcon from '@material-ui/icons/Edit';
// import DoneAllIcon from '@material-ui/icons/DoneAll';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
// import Divider from '@material-ui/core/Divider';


export default class ToDoApp extends Component {

    constructor(props){
        super(props)
        this.state={
            add_task_dialog:false,
            title:'',
            time:'',
            discription:'',
            date:'',
            duedate:'',
            priority:'',
            work_status:'',
            id:1,
            tabvalue:0,
            alltask:[],
            completetask:[],
            search:'',
            sort:'',
            error_msg:'',
            dialog_title:'Add Task'
        }
       
    }

    componentDidMount=()=>{
        this.setState({
            date:new Date()
        })
    }

    handleOpen=()=>{
        this.setState({
            add_task_dialog:true
        })
    }
    handleClose=()=>{
        this.setState({
            add_task_dialog:false,
            dialog_title:"Add Task"
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <div className={Style.logo_frame}>
                        {/* <div>
                            <img src="./logo192.png" className={style.app_logo} alt="logo" />
                            <h3>Add Your Important Work Here</h3>
                        </div>
                        <div>
                            <h3>TODO APP</h3>
                        </div> */}

                        <div>
                            <img src="./logo192.png" className={Style.app_logo} alt="logo" />
                            <Typography variant="h5">Every Thing is connected</Typography>
                        </div>
                        <div>
                            <Typography variant="h4">ToDo App</Typography>
                        </div>
                    </div>

                    <div className={Style.card_div}>
                        <Card className={Style.card}>
                            <Button color="inherit" onClick={this.handleOpen} size="large">Add new Task</Button>
                        </Card>
                    </div>

                    <div>
                        <Dialog onClose={this.handleClose} open={this.state.add_task_dialog}>
                            <div className={Style.add_task_dialog}>
                                <div className={Style.dialog_title}>
                                    <DialogTitle  onClose={this.handleClose}>{this.state.dialog_title}</DialogTitle>
                                    
                                    <IconButton  className={Style.closeButton} onClick={this.handleClose}>
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                                <DialogContent dividers>
                                    <div style={{display:"flex", justifyContent:'center', width:"100%"}}>
                                        <Typography variant="p" style={{color:"red"}}>{this.state.error_msg}</Typography>
                                    </div>
                                    <form  noValidate autoComplete="off" className={Style.form}>
                                        <div className={Style.input_arrng}>
                                            <div className={Style.lable_arrng}>
                                                <lable>Title:</lable>
                                                <TextField  label="Title" variant="outlined" name="title" value={this.state.title} onChange={this.handleChange}/>
                                            </div>
                                            <div className={Style.lable_arrng}>
                                                <lable>Time:</lable>
                                                <DateTimePicker
                                                    format="h:mm:ss:a"
                                                    value={this.state.date}
                                                    amPmAriaLabel="Select AM/PM"
                                                    disableCalendar="true"
                                                    disableClock="true"
                                                />
                                            </div>
                                        </div>
                                        <div className={Style.discription_arrng}>
                                            <lable>Discription:</lable>
                                            <TextField  label="Discription" variant="outlined" value={this.state.discription} name="discription"style={{width:"100%"}} onChange={this.handleChange}/>
                                        </div>
                                        <div className={Style.input_arrng}>
                                            <div className={Style.lable_arrng}>
                                                <lable>Date:</lable>
                                                <DateTimePicker
                                                    format="dd-MM-y"
                                                    value={this.state.date}
                                                    
                                                    
                                                />
                                            </div>
                                            <div className={Style.lable_arrng}>
                                                <lable>Due Date:</lable>
                                                <DateTimePicker
                                                    format="dd-MM-y"
                                                    onChange={this.datechange=(e)=>{this.setState({duedate:e})}}
                                                    value={this.state.duedate}
                                                    onCalendarClose={this.ramu}
                                                />
                                            </div>
                                            <div className={Style.lable_arrng}>
                                                <lable>priority:</lable>
                                                <Select
                                                    value={this.state.priority}
                                                    onChange={this.handleChange}
                                                    variant='outlined'
                                                    style={{width:"150px", height:"30px"}}
                                                    name="priority"
                                                    >
                                                    <MenuItem value="">
                                                        <em>Select</em>
                                                    </MenuItem>
                                                    <MenuItem value="Low">Low</MenuItem>
                                                    <MenuItem value="High">High</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={this.savedata} color="primary">
                                        Submit
                                    </Button>
                                </DialogActions>
                            </div>
                        </Dialog>
                    </div>

                </div>
                
                <div className={Style.body_searchbox}>
                    <input className={Style.searchbox} placeholder="Search Task" name="search" onChange={this.onSearch}></input>
                    <select className={Style.selectbox}name="sort" onChange={this.onSearch}>
                        <option>Select</option>
                        <option>Low</option>
                        <option>High</option>
                    </select>
                </div>
                <div className={Style.tabbar}>
                    <AppBar position="static" style={{width:"100%", background:"#7274ff"}}>
                        <Tabs value={this.state.tabvalue} aria-label="simple tabs example">
                            <Tab label="Pending Task"  onClick={this.tabChange=()=>{this.setState({tabvalue:0})}}/>
                            <Tab label="Complete Task" onClick={this.tabChange=()=>{this.setState({tabvalue:1})}}/>
                            
                        </Tabs>
                    </AppBar>
                </div>
                
            </div>
        )
    }
}
