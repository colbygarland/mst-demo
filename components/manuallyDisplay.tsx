import { Grid } from './grid';
import { EmployeeBadge } from './employeeBadge';

export const ManuallyDisplay = () => {
  return (
    <Grid>
      <EmployeeBadge
        id="fgte-regr-ghjg-dfdg"
        name="Cosmo Kramer"
        email="kman@petermanbustours.com"
        image="images/kramer.png"
        phone="555-FILK"
        position="Proctology"
      />
      <EmployeeBadge
        id="gher-dfhg-hjds-ghjj"
        name="George Costanza"
        email="art@vandelayindustries.com"
        image="images/george.png"
        phone="615-6423"
        position="Marine Biologist"
      />
      <EmployeeBadge
        id="edwf-ftge-vhjm-sdhl"
        name="Elaine Benes"
        email="kman@petermanbustours.com"
        image="images/elaine.png"
        phone="615-7479"
        position="Pendant Publishing"
      />
    </Grid>
  );
};
