import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { getTypesFor } from './utils.js';

const CalcPointAddForm = (props) => {
  return (
    <form className="form form-horizontal" id="CalcPointAddForm" onSubmit={props.addCalcPoint}>
      <div className="row">
        <h3 className="centerAlign">Lisää materiaalierä</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Erän nimi / numero: </ControlLabel>
            <FormControl
              type="text" placeholder="Erän nimi / numero"
              name="shortDesc"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Kasa / irrotettava: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="lotCategory">
              {
                getTypesFor('lotCategory')
              };            
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Kappalemäärä: </ControlLabel>
            <FormControl
              type="number" placeholder="Kappalemäärä"
              name="lotQuantity"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Tilavuus (m³): </ControlLabel>
            <FormControl
              type="number" placeholder="Tilavuus (m³)"
              name="lotVolume"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Paino (t): </ControlLabel>
            <FormControl
              type="number" step="any" placeholder="Paino (t)"
              name="lotWeight"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Kerros: </ControlLabel>
            <FormControl
              type="number" placeholder="Kerros"
              name="cpFloorNumber"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Lattiamateriaali: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="cpFloorMaterial">
              {
                getTypesFor('cpFloorMaterial')
              };            
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Kattomateriaali: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="cpRoofMaterial">
              {
                getTypesFor('cpRoofMaterial')
              };            
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Seinämateriaali: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="cpCeilingMaterial">
              {
                getTypesFor('cpCeilingMaterial')
              };            
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Lisätiedot: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Lisätiedot"
              name="longDesc"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Erä valmis myytäväksi: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="lotReady">
              {
                getTypesFor('lotReady')
              };            
            </FormControl>
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Lähetä</Button>
      </FormGroup>
    </form>
  );
}

export default CalcPointAddForm;
