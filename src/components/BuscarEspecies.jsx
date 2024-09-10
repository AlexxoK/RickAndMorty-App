import { MenuItem, Select, InputLabel, FormControl } from '@mui/material'

export const BuscarEspecies = ({ handleFiltrarEspecie }) => {
    const especies = ["Human", "Alien", "Humanoid", "Mythological", "Animal", "Robot", "Unknown"]

    return (
        <FormControl size="small" style={{ minWidth: 150 }}>
            <InputLabel id="especie-select-label">Especies</InputLabel>
            <Select
                labelId="especie-select-label"
                defaultValue=""
                onChange={(e) => handleFiltrarEspecie(e.target.value)}
                label="Especie"
                style={{ fontSize: '0.75rem', padding: '0.5rem' }}
            >
                <MenuItem value="">Todas</MenuItem>
                {especies.map((especie) => (
                    <MenuItem key={especie} value={especie}>
                        {especie}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
