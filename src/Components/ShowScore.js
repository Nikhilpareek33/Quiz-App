import {Card, CardContent,Button,Typography, TextareaAutosize, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const myStyle = makeStyles( ()=>({
   card: {
       minWidth: '50%',
       maxWidth:'50%',
       minHeight:'300px',
       margin: 'auto',
       marginTop: '10%',
       borderRadius: '1rem',
       boxShadow: '-8px 10px 18px 3px rgba(0,0,0,0.75)',
   
   },
   typography:{
       fontSize:'3rem',
       paddingTop:'50px',
   }
   
}));

const ShowScore = ({score,size,handleCounter,setScore})=>{
    const styles = myStyle();

    const handleClick = ()=>{
        console.log('me clicked');
        handleCounter(0);
        setScore(0);
    }

    return(

        <Card className={styles.card}  variant='outlined'>
           <CardContent>
               <Typography className={styles.typography} align='center' > You Got {score} / {size} </Typography>
               
               <Grid container justify='flex-end'>
                
               <Button variant='contained' 
               color='primary' 
               size='large' 
               style={{marginTop:'90px'}}
               onClick = {()=> handleClick()} > Play Again</Button>
               
               </Grid>
           </CardContent>
            
    
        </Card>
    )
}

export default ShowScore;