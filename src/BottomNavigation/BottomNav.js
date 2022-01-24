import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";


export default function Footer() {

  return(
    <Box bgcolor="text.secondary" color="white">
      <Container maxWidth="1g">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} >
            <Box borderBottom={1}>Home</Box>
            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

            <Box>
              <Link href="/students/add" color="inherit">
                AddStudent
              </Link>
            </Box>

            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Home</Box>
            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

            <Box>
              <Link href="/students/add" color="inherit">
                AddStudent
              </Link>
            </Box>

            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

          </Grid>


          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Home</Box>
            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

            <Box>
              <Link href="/students/add" color="inherit">
                AddStudent
              </Link>
            </Box>

            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

          </Grid>

        </Grid>

        <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}} >
          Student CRUDapp@2022
        </Box>
      </Container>
    </Box>
  );
  
}






























