import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles({
  root: {
    padding: 1,
  },
});

const posts = [
  { id: 1, description: 'teste1' },
  { id: 2, description: 'teste2' },
  { id: 3, description: 'teste3' }
]
function Feed() {
  const classes = useStyles();
  return(
      <div className={classes.root}>
        {
          posts.map(post => (
           <PostCard key={post.id} post={post}/>
          ))
        }
      </div>
  )
}

export default Feed;
