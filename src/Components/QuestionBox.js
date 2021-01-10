import {Card, CardContent,Button ,Grid,Typography} from '@material-ui/core'
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
   
}));

const QuestionBox = ({question,options,id,handleCounter,setScore,score}) =>{

    const styles = myStyle();

    const handleClick = (isCorrect) =>{

        console.log('isCorrect',isCorrect);
        console.log('clicked');

        if(isCorrect)
        {
            setScore(score+1);
        }

        handleCounter(id+1);

    }

    const printOptions = options.map( (option)=>{
       
        return(
            <CardContent> 
                <Button variant='contained'
                    size= 'large'
                    fullWidth={true}
                    color = 'primary' 
                    onClick ={() => handleClick(option.isCorrect)}   
                >
                         {option.answerText} 
                </Button>
            </CardContent>
        )
    })
    

    return(
        
        <Card className={styles.card}  variant='outlined'>
           
            <Grid container>
            <Grid itme xs={7}>
            <CardContent>
                <Typography 
                style={{paddingTop:'5%', fontSize:'1.75rem'}}
                > Question.{id+1}</Typography> 
                <Typography  style={{paddingTop:'5%', fontSize:'1.75rem'}}> {question} </Typography>
            </CardContent>
            </Grid>

            <Grid item xs={5}>
            {printOptions}
            </Grid>
            </Grid>
    
        </Card>

    )
}

export default QuestionBox;