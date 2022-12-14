import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
// import shoes from '../../images/shoes.jpg'

import styles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = styles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.fonts} variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                </div>
                <Typography className={classes.fonts} dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />

            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography className={classes.font} color='secondary'>
                            BDT {product.price.formatted}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton area-lebel='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                            <AddShoppingCart />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default Product
