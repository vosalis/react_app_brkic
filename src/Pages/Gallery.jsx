import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 

export default function TitlebarBelowImageList() {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <ImageList sx={{ margin: '10%' }}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            onClick={() => handleOpen(item)}
            sx={{ cursor: 'pointer' }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 20, top: 20 }}
        >
          
        </IconButton>
        <DialogContent
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {selectedItem && (
            <>
              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain', // ensures nice scaling
                  borderRadius: '8px',
                }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {selectedItem.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {selectedItem.author}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
