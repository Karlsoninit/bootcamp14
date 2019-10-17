import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '20px',
  },
  media: {
    height: 140,
  },
});

const NewsListItem = ({
  title,
  publishedAt,
  author,
  category,
  description,
  urlToImage,
}) => {
  const classes = useStyles();
  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={{
        pathname: `news/${publishedAt}/category=${
          category ? category : 'not choose'
        }`,
        state: { category: `${category}` },
      }}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            more
          </Button> */}
        </CardActions>
      </Card>
    </Link>
  );
};

export default NewsListItem;
