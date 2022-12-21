import React from 'react'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dataChart'
import './UserLists.css'
import './UserLocal.css'
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function UserLists() {
    const [userDatas, setUserDatas] = useState(userRows)


    const userDelete = userId => {
        setUserDatas(userDatas.filter(user => user.id != userId))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <Link to={`/users/${params.row.id}`}>
                        <section>
                            <img src={params.row.avatar} alt="" className='img-table' />
                            {params.row.username}
                        </section>
                    </Link>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={`/users/${params.row.id}`} >
                            <button className='edit-user-table'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='delete-user-table' fontSize='large' onClick={() => userDelete(params.row.id)} />
                    </>
                )
            }
        },
    ]

    return (
        <section className='tableUser'>
            <DataGrid rows={userDatas} columns={columns} disableSelectionOnClick pageSize={8} sx={{ p: 3 }} />

        </section>
    )
}
