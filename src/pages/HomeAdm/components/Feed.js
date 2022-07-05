import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles({
  root: {
    padding: 1,
  },
});

const posts = [
  { 
    id: 1,
    author: {
      id: 1,
      name: 'Wesley de Almeida',
      username: 'weslão',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    host: 'Tamer Cubas',
    guest: 'Clóvis Basilio',
    rg: 'XXX',
    entryTime: '00h00',
    entryDate: 'December 25, 2022',
    exitTime: '15h01',
    exitDate: 'December 26, 2022',
  },
  {
    id: 2,
    author: {
      id:1,
      name: 'Matheus Martino',
      username: 'Dumbledog',
      avatar: 'images/avatars/avatar_2.jpg',
    },
    host: 'Chicorita',
    guest: 'Nagazaki',
    rg: 'XXX',
    entryTime: '00h00',
    entryDate: 'December 25, 2022',
    exitTime: '15h01',
    exitDate: 'December 26, 2022',
  }
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
