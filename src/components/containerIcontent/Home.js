import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import SimpleCard from "./simpleCard";
import {useDispatch,useSelector} from "react-redux";
import {fetchProduct,productsSelector} from "../../features/product/productSlice";
import Loading from "../loading/loading";

const Home = () => {
    const dispatch =useDispatch()
    const {loading,product} = useSelector(productsSelector)
    console.log('article loading',loading)

    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])
  return(

        <div style={{padding: 70}}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {loading ? <Loading />: (
                            <>
                                {product.map((items, i) => (
                                    <Grid item sm={6} lg={2} md={4} key={i}>
                                        <SimpleCard id={i} products={items}/>
                                    </Grid>
                                ))}
                            </>
                        )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
  )

}

export default Home;































