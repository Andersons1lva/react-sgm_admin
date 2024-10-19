import { Box, TextField } from "@mui/material";
import { Field } from "formik";  // Usar Field do Formik para compatibilidade

const FormularioEndereco = () => {
  return (
    <Box
      display="grid"
      gap="10px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
    >
      <Field name="rua">
        {({ field, meta }) => (
          <TextField
            fullWidth
            variant="filled"
            label="Rua"
            {...field}
            error={!!meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
            sx={{ gridColumn: "span 4" }}
          />
        )}
      </Field>
      <Field name="numero">
        {({ field, meta }) => (
          <TextField
            fullWidth
            variant="filled"
            label="Número"
            {...field}
            error={!!meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
            sx={{ gridColumn: "span 2" }}
          />
        )}
      </Field>
      <Field name="cidade">
        {({ field, meta }) => (
          <TextField
            fullWidth
            variant="filled"
            label="Cidade"
            {...field}
            error={!!meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
            sx={{ gridColumn: "span 2" }}
          />
        )}
      </Field>
      <Field name="estado">
        {({ field, meta }) => (
          <TextField
            fullWidth
            variant="filled"
            label="Estado"
            {...field}
            error={!!meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
            sx={{ gridColumn: "span 2" }}
          />
        )}
      </Field>
      <Field name="cep">
        {({ field, meta }) => (
          <TextField
            fullWidth
            variant="filled"
            label="CEP"
            {...field}
            error={!!meta.touched && !!meta.error}
            helperText={meta.touched && meta.error}
            sx={{ gridColumn: "span 2" }}
          />
        )}
      </Field>
    </Box>
  );
};

export default FormularioEndereco;

