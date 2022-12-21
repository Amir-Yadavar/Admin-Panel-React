import React from 'react'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { productData } from '../../dataChart'
import './Products.css'
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function  Products() {
    const [productDatas, setProductDatas] = useState(productData)


    const productDelete = productId => {
        console.log(productDatas)
        setProductDatas(productDatas.filter(product => product.id !== productId))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <Link to={`/products/${params.row.id}`}>
                        <section>
                            <img src={params.row.avatar} alt="" className='img-table' />
                            {params.row.title}
                        </section>
                    </Link>
                )
            }
        },
        { field: 'price', headerName: 'Price', width: 200 },
       
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={`/products/${params.row.id}`} >
                            <button className='edit-user-table'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='delete-user-table' fontSize='large' onClick={() => productDelete(params.row.id)} />
                    </>
                )
            }
        },
        { field: 'vga', headerName: 'VGA', width: 130 },
        { field: 'cpu', headerName: 'CPU', width: 160 },
        { field: 'ssd', headerName: 'SSD', width: 160 },
    ]

    return (
        <section className='tableUser'>
            <DataGrid rows={productData} columns={columns} disableSelectionOnClick pageSize={8} sx={{ p: 3 }} />

        </section>
    )
}
