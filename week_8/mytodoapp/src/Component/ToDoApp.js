import React, { Component } from 'react'
import style from './ToDoApp.module.css'
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import DateTimePicker from 'react-datetime-picker';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
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

    render() {
        return (
            <div className={style.body}>
                <div className={style.body_frame}>
                <div className={style.logo_frame}>
                        <div>
                            <img src="./logo192.png" className={style.app_logo} alt="logo" />
                            <h3>Add Your Important Work Here</h3>
                        </div>
                        <div>
                            <h3>TODO APP</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
