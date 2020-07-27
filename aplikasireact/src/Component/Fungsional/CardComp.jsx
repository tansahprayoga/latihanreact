import React from 'react'
import {Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://i.ibb.co/mBTrhNs/furnitur-miniblok-serba-hemat.jpg" alt="furnitur-miniblok-serba-hemat" />
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>Produk Furniture dengan berbahan Almunium yang Tahan Karat dan Awet Jangka Panjang</CardText>
                    <Button>
                        <Link to = {
                            {
                                pathname : '/detail/${props.id}',
                                state : {
                                    judul : props.judul,
                                    tanggal: props.tanggal
                                }
                            }
                        }>Detail</Link>
                        </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardComp;