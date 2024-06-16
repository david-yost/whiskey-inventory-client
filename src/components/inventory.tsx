import { Configuration } from '../sourcegen/runtime'
import { Bottle, InventoryApi } from '../sourcegen'
import { useQuery } from '@tanstack/react-query';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const configuration = new Configuration({
    basePath: 'https://localhost:7170',
});

const inventoryApi = new InventoryApi(configuration)

export const Inventory = () =>  {
    const { isLoading, isError, data, error } = useQuery({ 
        queryKey: ['inventory'], 
        queryFn: async () => { 
            return await inventoryApi.getAllBottles()
        } 
    })

    if (isLoading) {
        return (<div>Loading...</div>)
    }
    if (isError) {
        return (<div>Error: {error.message}</div>)
    }
   
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Bottle Id', width: 150 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'proof', headerName: 'Proof', width: 150 },
        { field: 'age', headerName: 'Age', width: 150 }
    ];

    const rows: GridRowsProp = data == null ? [{ id: 0, name: null, proof: 0, age: 0 }] : data.map(x => {
        return { id: x.bottleId, name: x.name, proof: x.proof, age: `${x.ageYears}y` + (x.ageMonths != null && x.ageMonths > 0 ? `${x.ageMonths}m` : '')}
    })

    return (
        <DataGrid rows={rows} columns={columns} sx={{ margin:0, padding:0 }}/>
    )
}