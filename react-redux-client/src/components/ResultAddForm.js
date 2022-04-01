import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { getTypesFor } from './utils.js';

var DatePicker = require("react-16-bootstrap-date-picker");
const ResultAddForm = (props) => {
  return (
    <form className="form form-horizontal" id="ResultAddForm" onSubmit={props.addResult}>
        <h3 className="centerAlign">Lisää materiaali materiaalierään</h3>
        <input type="hidden" value={props.calcPointId} name="parentId" />

        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Ajankohta: </ControlLabel>
            <DatePicker id="resultdate" name="resultdate" value={props.addedResult && props.addedResult.resultdate} />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Jäteluokitus: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="cdwCategory">
              {
                getTypesFor('cdwCategory')
              };
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Hyödyntämistapa: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="reusability">
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
              name="reportResults"
            />
          </FormGroup>
        </div>
      <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Lisätiedot: </ControlLabel>
            <FormControl
              type="text" placeholder="Lisätiedot"
              name="resultDetails"
            />
          </FormGroup>
        </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Lähetä</Button>
      </FormGroup>
    </form>
  );
}

export default ResultAddForm;
