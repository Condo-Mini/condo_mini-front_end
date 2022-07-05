import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, CardActions, Typography, Avatar } from '@mui/material';
import './style.css';
import { IconButton }from '@mui/material';

const useStyles = makeStyles({
  root: {
    "&.MuiTypography-root": {
      marginRight: 8,
    },
  },
});

function PostCard({ post }) {
  const classes = useStyles();
  
  return (
   <Card className={classes.root}>
     <CardHeader
       avatar={<Avatar src={post.author.avatar}/>}
       title={<Typography variant="h6" >{post.author.name}</Typography>}
       subheader={
         <div className="subheader">
           <Typography variant="caption" className={classes.root}>
             { post.author.name }
           </Typography>
           <Typography variant="subtitle2" className={classes.root}>
             { post.author.name }
           </Typography>
         </div>
       }
     />
     <CardContent>

     </CardContent>
     <CardActions disableSpacing>
     <IconButton aria-label="like">
         {/* <FavoriteIcon /> */}
         <Typography 
           style={{cursor:'pointer'}} 
           variant="body2 "
           color="textSecondary"
         >
           {'10'}
         </Typography>
       </IconButton>
       <IconButton aria-label="comment">
         {/* <MessageIcon /> */}
         <Typography 
           className="reactions"
           color="textSecondary"
           variant="Body2"
         >

         </Typography>

       </IconButton>
     </CardActions>
   </Card>
  )
}  

export default PostCard;