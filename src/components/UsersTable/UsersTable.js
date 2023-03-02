import {getUsers} from "../../api/users";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {PostButton} from "../UI/PostButton";
import {Loader} from "../UI/Loader";
import {AlbumButton} from "../UI/AlbumButton";
import {useFetch} from "../../hooks/useFetch";

export const UsersTable = () => {
  const { data: users, isLoaded } = useFetch(getUsers);
  
  return (
    <>
      {
        !isLoaded ? (
          <Loader />
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Posts</TableCell>
                  <TableCell>Albums</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <PostButton userId={user.id} />
                    </TableCell>
                    <TableCell>
                      <AlbumButton user={user} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
    </>
  );
};
