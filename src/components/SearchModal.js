import { useHistory, Link } from "react-router-dom"
import { Modal, Button } from 'react-bootstrap'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchItem } from "../store/actions/searchActions"
import { seacrhActions } from "../store/reducer/search"
import Loading from "./Loading"


function SearchModal(showModal, setShowModal, cartId) {
    const [loading, setLoading] = useState('none')
    const history = useHistory()
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState('')
    function hideModal() {
        showModal.setShowModal(false)

    }
    function handleSearch() {
        history.push('/loading')
        dispatch(seacrhActions.emptySearch())
        dispatch(searchItem(searchKey))
        setTimeout(() => {
            showModal.setShowModal(false)
            history.push(`/search/${searchKey}`)
        }, 2000);
    }

    return (

        <Modal show={showModal.show} onHide={() => hideModal()} className="searchModal">
            <div className="searchModalContainer">
                <Modal.Header>
                    <div className="px-4 py-5">
                        <h5 className="text-uppercase">Search</h5>
                    </div>
                </Modal.Header>
                <Modal.Body >
                    <div className="FormInput">
                        <input type="text" placeholder="buy only what you need..." id="textarea-with-placeholder" className="form-control" onChange={(e) => setSearchKey(e.target.value)}></input>
                        <Button type="button" onClick={() => handleSearch()}></Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </div>

        </Modal >


    )
}

export default SearchModal