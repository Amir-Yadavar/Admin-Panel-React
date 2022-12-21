import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { userRows } from '../../../dataChart';
import { Button, Alert, AlertTitle } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './User.css'
import './UserLocal.css'

export default function User() {

    let param = useParams()

    const [userInfo, setUserInfo] = useState(userRows)

    let temp = userInfo.filter(item => item.id == param.userId)

    const [statusInfo, setStatusInfo] = useState('')

    const handleChange = (event) => {
        setStatusInfo(event.target.value);
    };

    return (
        <section className='container-user'>
            <div>
                <span>ID : {temp[0].id}</span>
                <Button variant="contained" color='success'>Save</Button>
            </div>

            <div>
                <TextField
                    label="Fullname"
                    defaultValue={temp[0].username}
                    className='item-textField'
                />
                <TextField
                    label="Email"
                    defaultValue={temp[0].email}
                    className='item-textField'
                />
            </div>
            <div>
                <TextField
                    label="Transaction"
                    defaultValue={temp[0].transaction}
                    className='item-textField'
                />

                <FormControl sx={{ minWidth: 220 }}  className='item-textField'>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        label={temp[0].status}
                        value={statusInfo}

                    >
                        <MenuItem value={'active'}>active</MenuItem>
                        <MenuItem value={'non-active'}>non-active</MenuItem>
                    </Select>
                </FormControl>
            </div>

            

            <Alert severity="info" className='alert-user'>
                <AlertTitle>Attention</AlertTitle>
                Please check the details again before saving !!
            </Alert>
        </section>
    )
}
