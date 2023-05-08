import { Grid } from '@mui/material'
import { mockMovieData } from '../../mockData'
import { useState } from 'react'
import { BUTTON, MainButton } from '../Buttons/MainButton/MainButton'

export const ShowMovie = () => {

  const [movieCounter, setMovieCounter] = useState<number>(0)

  const counterClickHandler = () => {
    if (movieCounter === mockMovieData.length - 1) {
      console.log('sorryy men')
    }
    else {
      setMovieCounter(() => {
        return movieCounter + 1
      })
    }
    
  }

  return (
    <Grid container flexDirection='column' justifyContent='center' alignItems='cenetr' style={{}}>
      <Grid item>{mockMovieData[movieCounter].title} ({mockMovieData[movieCounter].rating} / 10)</Grid>
      <Grid item>
        <img src={mockMovieData[movieCounter].imageURL} alt='img' style={{ width: 300 }} />
      </Grid>
      <Grid container justifyContent='center' alignContent='cenetr'>
        <Grid item>
          <MainButton label={'green'} onClick={counterClickHandler} style={BUTTON.GREEN} />
        </Grid>
        <Grid item>
          <MainButton label={'red'} onClick={counterClickHandler} style={BUTTON.RED} />
        </Grid>
      </Grid>
    </Grid>
  )
}
