import React, { useState } from 'react'
import './Product.css'
import './productLocal.css'
import { Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import ChartsHome from './../../components/Charts/ChartsHome.jsx'
import { productChart } from '../../dataChart'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PublishIcon from '@mui/icons-material/Publish'
import { productData } from '../../dataChart'

export default function Product() {

  let param = useParams()

  const [productInfo, setProductInfo] = useState(productData)

  let temp = productInfo.filter(item => item.id == param.productId)




  return (
    <>
      <section className='container-product'>
        <section>
          <h3>Product</h3>
          <Link to="/newProduct">

            <Button variant="contained" color='success'>Create</Button>
          </Link>

        </section>

        <section className='top-product'>
          <section>
            <ChartsHome title="Sale in Month" data={productChart} dataKey='sale' />
          </section>

          <section>
            <div>
              <section>
                <img src="/img/newUser/3.jpg" alt="" />
                <span>Info LapTop</span>
              </section>

              <div>
                <span>ID :</span>
                <span>{temp[0].id}</span>
              </div>

              <div>
                <span>Name :</span>
                <span>{temp[0].title}</span>
              </div>
              <div>
                <span>price :</span>
                <span>{temp[0].price}</span>
              </div>
              <div>
                <span>CPU :</span>
                <span>{temp[0].cpu}</span>
              </div>
              <div>
                <span>VGA :</span>
                <span>{temp[0].vga}</span>
              </div>

            </div>

          </section>
        </section>

        <section className='container-product-bottom'>
          <section>
            <span>Product Info</span>

            <TextField
              required
              id="outlined-required"
              label="Product Name"
              defaultValue=""
            />

            <FormControl fullWidth sx={{ m: 2 }}>
              <InputLabel id="demo-simple-select-label">In Stock</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                label="In Stock"

              >
                <MenuItem>Yes</MenuItem>
                <MenuItem>No</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ m: 2 }}>
              <InputLabel id="demo-simple-select-label">Active</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                label="Active"

              >
                <MenuItem>Yes</MenuItem>
                <MenuItem>No</MenuItem>
              </Select>
            </FormControl>

          </section>

          <section>
            <section>
              <img src="/img/newUser/3.jpg" alt="" />
              <label><PublishIcon /></label>
            </section>
            <Button variant="contained" color='primary'>Edit</Button>
          </section>
        </section>


      </section>


    </>
  )
}
