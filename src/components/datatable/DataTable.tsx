import { debounce } from "@mui/material";
import "./datatable.scss";

import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

// const DataTable = () => {
//   const columns: GridColDef<(typeof rows)[number]>[] = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "firstName",
//       headerName: "First name",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "lastName",
//       headerName: "Last name",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       width: 110,
//       editable: true,
//     },
//     {
//       field: "fullName",
//       headerName: "Full name",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 160,
//       valueGetter: (value, row) =>
//         `${row.firstName || ""} ${row.lastName || ""}`,
//     },
//   ];

//   const rows = [
//     { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
//     { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
//     { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
//     { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
//     { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//     { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//     { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//     { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//     { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   ];
//   return (
//     <div className="datatable">
//       <Box sx={{ height: 400, width: "100%" }}>
//         <DataGrid
//         className="datagrid"
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 5,
//               },
//             },
//           }}
//           slots={{toolbar:GridToolbar}}
//           slotProps={{
//             toolbar: {
//                 showQuickFilter: true,
//                 quickFilter : {debounceMs: 300},
//             },
//           }}

//           pageSizeOptions={[5]}
//           checkboxSelection
//           disableRowSelectionOnClick
//           disableColumnFilter
//           disableDensitySelector
//           disableColumnSelector
//         />
//       </Box>
//     </div>
//   );
// };

type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
  };
  
  const DataTable = (props: Props) => {
  
    // TEST THE API
  
    // const queryClient = useQueryClient();
    // // const mutation = useMutation({
    // //   mutationFn: (id: number) => {
    // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
    // //       method: "delete",
    // //     });
    // //   },
    // //   onSuccess: ()=>{
    // //     queryClient.invalidateQueries([`all${props.slug}`]);
    // //   }
    // // });
  
    const handleDelete = (id: number) => {
      //delete the item
      // mutation.mutate(id)
    };
  
    const actionColumn: GridColDef = {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/${props.slug}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
            <div className="delete" onClick={() => handleDelete(params.row.id)}>
              <img src="/delete.svg" alt="" />
            </div>
          </div>
        );
      },
    };
  
    return (
      <div className="dataTable">
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
    );
  };

export default DataTable;
