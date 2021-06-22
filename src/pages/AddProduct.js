import { FormControl, FormGroup, InputLabel, FormHelperText, Input } from '@material-ui/core';
import TopNavLayOut from '../components/TopNavLayOut'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'react-bootstrap';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useEffect, useState } from 'react'
import { getCategoris, sendNewProduct } from '../services/storeData'
const AddProduct = () => {
    const [category, setcategory] = useState(1);
    const [categoris, setCategoris] = useState([])
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [img, setImage] = useState()
    const [description, setDescription] = useState()
    useEffect(() => {
        getCategoris().then(res => { setCategoris(res) })
    }, [])

    async function handleSubmit() {
        console.log(name, price, category, img, description)
        const res = sendNewProduct({ name, price, category, img, description })
        console.log(res)
    }
    return (
        <TopNavLayOut>
            <div className="addItemAdmin">
                <div className="wrap cf">
                    <h1 className="projTitle">ADD PRODUCT</h1>
                </div>
                <Grid container spacing={3} className="additemform">
                    <Grid item xs={10}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Producet name"
                            fullWidth
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={10} >
                        <TextField
                            required
                            id="price"
                            name="price"
                            label="Price"
                            fullWidth
                            onChange={(e) => { setPrice(e.target.value) }}

                        />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            required
                            id="image"
                            name="image"
                            label="Image"
                            fullWidth
                            onChange={(e) => { setImage(e.target.value) }}

                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            onChange={(e) => { setcategory(e.target.value) }}

                        >
                            {
                                categoris.map(category => {
                                    return <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                                })
                            }

                        </Select>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="Description"
                            fullWidth
                            onChange={(e) => { setDescription(e.target.value) }}


                        />
                    </Grid>



                    <Grid item xs={12}>
                        <Button type="button" onClick={() => handleSubmit()}>SAVE</Button>
                    </Grid>
                </Grid>
            </div>


        </TopNavLayOut>


    )
}


export default AddProduct