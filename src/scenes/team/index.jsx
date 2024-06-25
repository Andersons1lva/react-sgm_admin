import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Button from '@mui/material/Button';
import Header from "../../components/Header";

const Membro = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Nome",
      flex:2,
      cellClassName: "name-column--cell",
      width: 200,
      sortable: false,
      resizable: false,
    },
    {
      field: "age",
      headerName: "Idade",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      width: 100,
      sortable: false,
      resizable: false,
    },
    {
      field: "phone",
      headerName: "Celular",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 100,
      sortable: false,
      resizable: false,
    },
    {
      field: "email",
      headerName: "Email",
      flex:1,
      align: "center",
      headerAlign: "center",
      width: 200,
      sortable: false,
      resizable: false,
    },
    {
      field:"funcao_ministerial",
      headerName: "Função Ministerial",
      align: "center",
      flex: 1,
      headerAlign: "center",
      width: 100,
      sortable: false,
      resizable: false,
    },
    
    {
      field: 'actions',
      headerName: 'Ações',
      width: 100,
      headerAlign:"center",
      align:"center",
      flex:1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(params.row.id)}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Excluir
          </Button>
        </>
      ),
    },
  ];

  const handleEdit = (id) => {
    console.log(`Editando item com id: ${id}`);
    // Coloque aqui a lógica de edição
  };
  
  const handleDelete = (id) => {
    console.log(`Excluindo item com id: ${id}`);
    // Coloque aqui a lógica de exclusão
  };

  return (
    <Box m="20px">
      <Header title="MEMBROS" subtitle="Gerenciamento dos Membros" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Membro;