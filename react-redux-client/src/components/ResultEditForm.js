import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { getTypesFor } from './utils.js';
var DatePicker = require("react-16-bootstrap-date-picker");

const ResultEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="ResultEditForm" onSubmit={props.editResult}>
      <div className="row">
        <h3 className="centerAlign">Muokkaa materiaalia</h3>
        
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Ajankohta: </ControlLabel>
            <DatePicker id="resultdate" name="resultdate" value={props.resultToEdit.resultdate} />
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Jäteluokitus: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="cdwCategory" defaultValue={props.resultToEdit.cdwCategory}>
              {
                getTypesFor('cdwCategory')
              };
            </FormControl>
          </FormGroup>
        </div>

        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Hyödyntämistapa: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="reusability" defaultValue={props.resultToEdit.reusability}>
              {
                getTypesFor('reusability')
              };
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Raportin tulokset: </ControlLabel>
            <FormControl
              type="text" placeholder="Raportin tulokset"
              name="reportResults" defaultValue={props.resultToEdit.reportResults}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Lisätiedot: </ControlLabel>
            <FormControl
              type="text" placeholder="Lisätiedot"
              name="resultDetails" defaultValue={props.resultToEdit.resultDetails}
            />
          </FormGroup>
        </div>
        
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Lähetä</Button>
      </FormGroup>
    </form>
  );
}
export default ResultEditForm;
