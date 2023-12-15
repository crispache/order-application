import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
      headerName: "ID",
      field: "id",
      width: 100,
    },
    {
      headerName: "Estado",
      field: "status",
      width: 120,
      editable: false,
    },
    {
      headerName: "Descripción",
      field: "description",
      width: 600,
      editable: false,
    },
    {
      headerName: "Importe",
      field: "amount",
      type: "string",
      width: 200,
      editable: true,
    },
  ];