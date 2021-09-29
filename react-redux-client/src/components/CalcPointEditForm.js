import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { getTypesFor } from './utils.js';

const CalcPointEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="CalcPointEditForm" onSubmit={props.calcPointToEdit}>
      <div className="row">
        <h3 className="centerAlign">Muokkaa materiaalia</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Erän nimi / numero: </ControlLabel>
            <input type="hidden" value={props.calcPointData._id} name="id" />
            <FormControl
              type="text" placeholder="Erän nimi / numero"
              name="shortDesc" defaultValue={props.calcPointData.shortDesc}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Kategoria: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="lotCategory" defaultValue={props.calcPointData.lotCategory}>
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
              name="lotQuantity" defaultValue={props.calcPointData.lotQuantity}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Tilavuus (m³): </ControlLabel>
            <FormControl
              type="number" placeholder="Tilavuus"
              name="lotVolume" defaultValue={props.calcPointData.lotVolume}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Paino (Kg): </ControlLabel>
            <FormControl
              type="number" placeholder="Paino"
              name="lotWeight" defaultValue={props.calcPointData.lotWeight}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Kerros: </ControlLabel>
            <FormControl
              type="number" placeholder="Kerros"
              name="cpFloorNumber" defaultValue={props.calcPointData.cpFloorNumber}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Lattiamateriaali: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="cpFloorMaterial" defaultValue={props.calcPointData.cpFloorMaterial}>
              {
                getTypesFor('cpFloorMaterial')
              };            
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Kattomateriaali: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="cpRoofMaterial" defaultValue={props.calcPointData.cpRoofMaterial}>
              {
                getTypesFor('cpRoofMaterial')
              };            
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Seinämateriaali: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="cpCeilingMaterial" defaultValue={props.calcPointData.cpCeilingMaterial}>
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
              componentClass="textarea" placeholder="Syötä kuvaus"
              name="longDesc" defaultValue={props.calcPointData.longDesc}
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
          <ControlLabel>Erä valmis myytäväksi: </ControlLabel>
            <FormControl componentClass="select" placeholder="Valitse" name="lotReady" defaultValue={props.calcPointData.lotReady}>
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

export default CalcPointEditForm;
