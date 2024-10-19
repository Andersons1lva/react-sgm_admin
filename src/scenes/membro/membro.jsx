import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import MembroService from "../../services/MembroService";
import Button from '@mui/material/Button';
import Header from "../../components/Header";

const Membro = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Estado para armazenar os membros
  const [team, setTeam] = useState([]);

  // Função para buscar os membros da API
  const fetchMembros = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
      console.error("Token JWT não encontrado");
      return;
      }

      const data = await MembroService.getAllMembros(token);
      setTeam(data); // Atualiza o estado 'team' com os membros
    } catch (error) {
      console.error("Erro ao buscar membros:", error);
    }
  };

  // Carrega os membros da API ao montar o componente
  useEffect(() => {
    fetchMembros();
  }, []); // Executa apenas uma vez ao montar o componente

  const columns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 2,
      cellClassName: "name-column--cell",
      width: 100,
      sortable: true,
      resizable: false,
    },
    {
      field: "sobreNome",
      headerName: "Sobrenome",
      type: "text",
      flex: 1,
      headerAlign: "center",
      align: "center",
      width: 100,
      sortable: true,
      resizable: false,
    },
    {
      field: "numero_celular",
      headerName: "Celular",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 100,
      sortable: true,
      resizable: false,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 200,
      sortable: true,
      resizable: false,
    },
    {
      field: "funcao_ministerial",
      headerName: "Função Ministerial",
      align: "center",
      flex: 1,
      headerAlign: "center",
      width: 100,
      sortable: true,
      resizable: false,
    },
    {
      field: "actions",
      headerName: "Ações",
      width: 200,
      headerAlign: "center",
      align: "center",
      flex: 1,
      sortable: false,
      filterable: false,
      resizable: false,
      disableColumnMenu: true,
      minWidth: 190,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: 5 }}
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

  // Função para editar um membro
  const handleEdit = (id) => {
    // const member continuar daqui!!!!!
  };

  // Função para excluir um membro
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
      console.error("Token JWT não encontrado");
      return;
      }

      await MembroService.deleteMembro(id.toString(),token);
      setTeam(team.filter((member) => member.id !== id)); // Atualiza a lista removendo o membro excluído
    } catch (error) {
      console.error("Erro ao excluir o membro:", error);
    }
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
        {/* Agora usando o estado 'team' para preencher a tabela */}
        <DataGrid rows={team} columns={columns} />
      </Box>
    </Box>
  );
};

export default Membro;
