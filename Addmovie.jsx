import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const Addmovie = () => {
    var [update,setupdate]=useState(false)
    var [singlevalue,setsinglevalue]=useState([])
    var [movie,setmovie] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/students")
        .then(response => {
            console.log(response.data)
            setmovie(movie=response.data)
        })
       .catch(err => console.log(err))
    })
    const updatevalue=(value)=>{
        setsinglevalue(value);
        setupdate(true);
    }
    const deletemovie=(id)=>{
        console.log("delete clicked" +moviename);
        axios.delete("http://localhost:3005/students/" +moviename)
        .then(response=>{
            alert("deleted")
            window.location.reload(false)
        })
        var finaljsx= <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Moviename</TableCell>
                        <TableCell>Director</TableCell>
                        <TableCell>Language</TableCell>
                        <TableCell>Genere</TableCell>
                        <TableCell>Releaseyear</TableCell>
                        <TableCell>Deletemovie</TableCell>
                        <TableCell>Updatemovie</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {movie.map((value,index)=>{
                        return<TableRow>
                            <TableCell>[value.Moviename]</TableCell>
                            <TableCell>[value.Director]</TableCell>
                            <TableCell>[value.Language]</TableCell>
                            <TableCell>[value.Genere]</TableCell>
                            <TableCell>[value.Releaseyear]</TableCell>
                            <TableCell>[value.delete]</TableCell>
                            <TableCell>[value.Update]</TableCell>

                            <TableCell>
                                <Button onClick={()=>deletemovie(value.moviename)}>delete</Button>
                            </TableCell>
                            <TableCell>
                                <Button onClick={()=>updatevalue(value)}>update</Button>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        if(update)
        finaljsx=<Addmovie data={singlevalue} method="put"></Addmovie>
    }
   return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      {finaljsx}
    </div>
  )
}

export default Addmovie
