import { Typography } from "@mui/material";

export const MUITypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Display</Typography>
      <Typography variant="h2">h2 Display</Typography>
      <Typography variant="h3">h3 Display</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Display
      </Typography>
      <Typography variant="h5">h4 Display</Typography>
      <Typography variant="h6">h6 Display</Typography>
      <Typography variant="subtitle1">h6 Display</Typography>
      <Typography variant="subtitle2">h6 Display</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quis,
        ipsam libero id similique placeat, recusandae quod eos rem est sequi.
        Atque consectetur fugit facilis doloremque error exercitationem
        blanditiis libero?
      </Typography>
      <Typography variant="body 2">
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quis,
        ipsam libero id similique placeat, recusandae quod eos rem est sequi.
        Atque consectetur fugit facilis doloremque error exercitationem
        blanditiis libero?
      </Typography>
    </div>
  );
};
