import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid'
import { editProduct } from '../services/storeData';



export default function EditProduct(product) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState(product.product.name)
    const [price, setPrice] = useState(product.product.price)
    const [img, setImage] = useState(product.product.img)
    const [description, setDescription] = useState(product.product.description)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        const productEdited = { id: product.product.id, name: name, price: price, img: img, description: description }
        editProduct(productEdited).then(res => {
            console.log(res)
        })
        setOpen(false);
    };
    return (
        <div>
            <div className="editProductKey" onClick={handleClickOpen}><FontAwesomeIcon className="editIcon" icon={Icons.faPaintBrush} style={{ fontSize: '15px' }}></FontAwesomeIcon></div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To edit this product, please enter the changes you want to make. We will send the
                        updates to the data base.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="product name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="product price"
                        type="text"
                        fullWidth
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="img"
                        label="product image"
                        type="text"
                        fullWidth
                        value={img}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="product description"
                        type="text"
                        fullWidth
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="primary">
                        save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}