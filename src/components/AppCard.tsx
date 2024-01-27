import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'
import { type AppCardProps } from '../model/AppCardProps'

export const AppCard = ({
  title,
  description,
  appStoreUrl,
  imageUrl
}: AppCardProps) => (
  <Card sx={sx.container}>
    <CardMedia sx={sx.media} image={imageUrl} title={title} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      {description.split('-').map((desc, index) => (
        <Typography
          key={index}
          sx={sx.desc}
          variant="body2"
          color="text.secondary"
        >
          {desc}
        </Typography>
      ))}
    </CardContent>
    <CardActions>
      <Button size="small" href={appStoreUrl}>
        Learn More
      </Button>
    </CardActions>
  </Card>
)

const sx = {
  container: { maxWidth: 345 },
  media: { height: 140, width: 140, alignContent: 'center' },
  desc: { padding: 1 }
}
