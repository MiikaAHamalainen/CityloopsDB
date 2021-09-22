/*
Page for singe building information selected from the main table

*/

import React from 'react';
import { Alert, Glyphicon, Button, Modal } from 'react-bootstrap';
import CalcPointAddForm from "./CalcPointAddForm";
import CalcPointEditForm from './CalcPointEditForm';
import { Link } from 'react-router';
import { getLabelFor } from './utils.js';

export default class Building extends React.Component {
  constructor(props) {
    super(props);

    this.showAddCalcPointModal = this.showAddCalcPointModal.bind(this);
    this.hideCalcPointAddModal = this.hideCalcPointAddModal.bind(this);
    this.addCalcPoint = this.addCalcPoint.bind(this);

    this.submitEditCalcPoint = this.submitEditCalcPoint.bind(this);
    this.hideCalcPointEditModal = this.hideCalcPointEditModal.bind(this);
    this.showCalcPointEditModal = this.showCalcPointEditModal.bind(this);

    this.showCalcPointDeleteModal = this.showCalcPointDeleteModal.bind(this);
    this.hideCalcPointDeleteModal = this.hideCalcPointDeleteModal.bind(this);
    this.cofirmDeleteCalcPoint = this.cofirmDeleteCalcPoint.bind(this);

  }

  componentDidMount() {
    this.props.mappedfetchBuildingById(this.props.params.id);
  }

  showAddCalcPointModal() {
    this.props.mappedShowCalcPointAddModal();
  }

  hideCalcPointAddModal() {
    this.props.mappedHideCalcPointAddModal();
  }

  addCalcPoint(e) {
    e.preventDefault();
    const editForm = document.getElementById('CalcPointAddForm');
    if (editForm.shortDesc.value !== "") {
      
      const data = new FormData();
      data.append('shortDesc', editForm.shortDesc.value);
      data.append('lotCategory', editForm.lotCategory.value);
      data.append('lotQuantity', editForm.lotQuantity.value);
      data.append('lotVolume', editForm.lotVolume.value);
      data.append('lotWeight', editForm.lotWeight.value);
      data.append('cpFloorNumber', editForm.cpFloorNumber.value);
      data.append('cpFloorMaterial', editForm.cpFloorMaterial.value);
      data.append('cpRoofMaterial', editForm.cpRoofMaterial.value);
      data.append('cpCeilingMaterial', editForm.cpCeilingMaterial.value);
      data.append('lotReady', editForm.lotReady.value);
      data.append('longDesc', editForm.longDesc.value);
      data.append('parent', this.props.params.id);
      this.props.mappedAddCalcPoint(data);
    }
    else {
      return;
    }
  }

  // edits
  showCalcPointEditModal(calcPointToEdit) {
    this.props.mappedShowCalcPointEditModal(calcPointToEdit);
  }

  hideCalcPointEditModal() {
    this.props.mappedHideCalcPointEditModal();
  }

  submitEditCalcPoint(e) {
    e.preventDefault();
    const cpEditForm = document.getElementById('CalcPointEditForm');
    if (cpEditForm.shortDesc.value !== "") {
      const data = new FormData();
      data.append('id', cpEditForm.id.value);
      data.append('shortDesc', cpEditForm.shortDesc.value);
      data.append('lotCategory', cpEditForm.lotCategory.value);
      data.append('lotQuantity', cpEditForm.lotQuantity.value);
      data.append('lotVolume', cpEditForm.lotVolume.value);
      data.append('lotWeight', cpEditForm.lotWeight.value);
      data.append('cpFloorNumber', cpEditForm.cpFloorNumber.value);
      data.append('cpFloorMaterial', cpEditForm.cpFloorMaterial.value);
      data.append('cpRoofMaterial', cpEditForm.cpRoofMaterial.value);
      data.append('cpCeilingMaterial', cpEditForm.cpCeilingMaterial.value);
      data.append('lotReady', cpEditForm.lotReady.value);
      data.append('longDesc', cpEditForm.longDesc.value);
      this.props.mappedEditCalcPoint(data);
    }
    else {
      return;
    }

  }

  downloadFile = (fileId, name) => {
    this.props.mappedFileDownload(fileId, name);
  }

  hideCalcPointDeleteModal() {
    this.props.mappedHideCalcPointDeleteModal();
  }

  showCalcPointDeleteModal(calcPointToDelete) {
    this.props.mappedShowCalcPointDeleteModal(calcPointToDelete);
  }

  cofirmDeleteCalcPoint() {
    this.props.mappedDeleteCalcPoint(this.props.mappedBuildingState.calcPointToDelete);
  }

  render() {

    // these values changes according to the state - keep that in mind!
    const buildingState = this.props.mappedBuildingState;
    const calcPointToEdit = buildingState.calcPointToEdit;
    const calcPointToAdd = buildingState.calcPointToAdd;
    const calcPoints = buildingState.calcPoints;
    const building = buildingState.building;

    const appState = this.props.mappedAppState;
    var canEdit = false;
    if (appState.kc.keycloak.realmAccess) {
      canEdit = appState.kc.keycloak.realmAccess.roles.indexOf('editor') > -1 ||
        appState.kc.keycloak.realmAccess.roles.indexOf('admin') > -1;
    }

    return (
      <div>
        {!buildingState.building && buildingState.isFetching &&
          <div>
            <p>Ladataan....</p>
          </div>
        }
        {buildingState.building && !buildingState.isFetching &&
          <div className="buildingDetail"> 
            <h3>Rakennuksen tiedot</h3>
            <div className="row">
              <div className="col-xs-6">
                <h4>{buildingState.building.buildingName}</h4>
                <p><b>Osoite: </b>{buildingState.building.buildingAddress}, {buildingState.building.buildingCounty}</p>
                <p><b>Omistaja/hallinnoija: </b>{buildingState.building.buildingOwner}</p>
                <p><b>Rakennusvuosi: </b>{buildingState.building.buildingYear}</p>
                <p><b>Rakennustunnus: </b>{buildingState.building.buildingIdentifier}</p>
                <p><b>Käyttötarkoitus: </b>{getLabelFor('buildingType', buildingState.building.buildingType)}</p>
                <p><b>Perustustapa: </b>{getLabelFor('buildingFoundation', buildingState.building.buildingFoundation)}</p>
                <p><b>Kantava runko: </b>{getLabelFor('buildingMaterial', buildingState.building.buildingMaterial)}</p>
                <p><b>Pääasiallinen ulkoseinärakenne: </b>{getLabelFor('buildingOuterWall', buildingState.building.buildingOuterWall)}</p>
                <p><b>Katto: </b>{getLabelFor('buildingRoof', buildingState.building.buildingRoof)}</p>
                <p><b>Kerrosluku: </b>{buildingState.building.buildingFloorsNumber}</p>
                <p><b>Lisätiedot: </b>{buildingState.building.buildingDesc}</p>
                <p><b>Rakennuksen ID: </b>{buildingState.building._id}</p>
              </div>
              <div className="col-xs-6">
                <b><u>Rakennuksen tiedostot:</u></b>
                {/* <Button onClick={() => this.showFileUploadModal(building._id)} bsStyle="success" bsSize="xsmall"><Glyphicon glyph="plus" /> Lisää tiedosto</Button> */}
                <table className="table vocTable">
                  <thead>
                    <tr><th>Tiedoston kuvaus</th><th>Numerollinen kuvaus</th><th>Lataa</th></tr>
                  </thead>
                  <tbody>
                    {building.files.map((file, ix) =>
                      <tr key={ix}>
                        <td>{file.fileDesc}</td>
                        <td>{file.fileDescNumeric}</td>

                        <td><a href="true" onClick={(e) => { e.preventDefault(); this.downloadFile(file._id, file.originalname) }} style={{ cursor: 'pointer' }}>{file.originalname}</a></td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <hr />
              </div>
            </div>
            <hr />
            <h4><b>Kohteen materiaalierät:</b></h4>
            {canEdit &&
            <p>Lisää uusi materiaalierä: <Button type="button" className="btn btn-primary" bsStyle="success" onClick={this.showAddCalcPointModal} bsSize="xsmall"><Glyphicon glyph="plus" /></Button></p>
            }
            {buildingState.building.calcPoints &&
              <table className="table vocTable">
                <thead>
                  <tr>
                    <th>Erän nimi / numero</th>
                    <th>Kategoria</th>
                    <th>Kappalemäärä</th>
                    <th>Tilavuus (m³)</th>
                    <th>Paino (Kg)</th>
                    <th>Kerros</th>
                    <th>Lattiamateriaali</th>
                    <th>Kattomateriaali</th>
                    <th>Seinämateriaali</th>
                    <th>Lisätiedot</th>
                    <th>Valmis myytäväksi</th>
                    <th className="textCenter">Materiaalit</th>
                    {canEdit &&
                      <th className="textCenter">Muokkaa erää</th>
                    }
                    {canEdit &&
                      <th className="textCenter">Poista erä</th>
                    }
                  </tr>
                </thead>
                <tbody>
                  {calcPoints.map((calcPoint, i) => <tr key={i}>
                    <td>{calcPoint.shortDesc}</td>
                    <td>{calcPoint.lotCategory}</td>
                    <td>{calcPoint.lotQuantity}</td>
                    <td>{calcPoint.lotVolume} m³{/*calcPoint.lotVolumeWeightUnit */}</td>
                    <td>{calcPoint.lotVolume} Kg{/*calcPoint.lotVolumeWeightUnit */}</td>
                    <td>{calcPoint.cpFloorNumber}</td>
                    <td>{getLabelFor('cpFloorMaterial', calcPoint.cpFloorMaterial)}</td>
                    <td>{getLabelFor('cpRoofMaterial', calcPoint.cpRoofMaterial)}</td>
                    <td>{getLabelFor('cpCeilingMaterial', calcPoint.cpCeilingMaterial)}</td>
                    <td>{calcPoint.longDesc}</td>
                    <td>{calcPoint.lotReady ? 'Valmis' : 'Ei valmis'}</td>
                    <td className="textCenter"><Link to={`/results/${calcPoint._id}`}>Avaa ({calcPoint.results.length})</Link> </td>
                    {canEdit &&
                      <td className="textCenter"><Button onClick={() => this.showCalcPointEditModal(calcPoint)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="edit" /></Button></td>
                    }
                    {canEdit &&
                      <td className="textCenter"><Button onClick={() => this.showCalcPointDeleteModal(calcPoint)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
                    }
                  </tr>)
                  }
                </tbody>
              </table>
            }

            {/* Modal for adding calc point*/}
            <Modal
              show={buildingState.addCalcPointModal}
              onHide={this.hideCalcPointAddModal}
              container={this}
              aria-labelledby="contained-modal-title"
            >

              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Lisää uusi materiaalierä</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="col-md-12">
                  {buildingState.addCalcPointModal &&
                    <CalcPointAddForm addCalcPoint={this.addCalcPoint} />

                  }

                  {calcPointToAdd && buildingState.isFetching &&
                    <Alert bsStyle="info">
                      <strong>Päivitetään...... </strong>
                    </Alert>
                  }
                  {calcPointToAdd && !buildingState.isFetching && buildingState.error &&
                    <Alert bsStyle="danger">
                      <strong>Epäonnistui. {buildingState.error} </strong>
                    </Alert>
                  }
                  {calcPointToAdd && buildingState.successMsg &&
                    <Alert bsStyle="success">
                      Kohde <strong> {calcPointToAdd.buildingName} </strong>{buildingState.successMsg}
                    </Alert>
                  }
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.hideCalcPointAddModal}>Sulje</Button>
              </Modal.Footer>
            </Modal>

            {/* Modal for editing calc point*/}
            <Modal
              show={buildingState.showCalcPointEditModal}
              onHide={this.hideCalcPointEditModal}
              container={this}
              aria-labelledby="contained-modal-title"
            >

              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Muokkaa materiaalia</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="col-md-12">

                  {calcPointToEdit && buildingState.showCalcPointEditModal &&
                    <CalcPointEditForm calcPointData={calcPointToEdit} calcPointToEdit={this.submitEditCalcPoint} />
                  }

                  {calcPointToEdit && buildingState.isFetching &&
                    <Alert bsStyle="info">
                      <strong>Päivitetään...... </strong>
                    </Alert>
                  }
                  {calcPointToEdit && !buildingState.isFetching && buildingState.error &&
                    <Alert bsStyle="danger">
                      <strong>Epäonnistui. {buildingState.error} </strong>
                    </Alert>
                  }
                  {calcPointToEdit && buildingState.successMsg &&
                    <Alert bsStyle="success">
                      <strong> {calcPointToEdit.shortDesc} </strong>{buildingState.successMsg}
                    </Alert>
                  }
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.hideCalcPointEditModal}>Sulje</Button>
              </Modal.Footer>
            </Modal>

            {/* Modal for deleting building */}
            <Modal
              show={buildingState.showCalcPointDeleteModal}
              onHide={this.hideCalcPointDeleteModal}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Poista materiaali</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {buildingState.calcPointToDelete && !buildingState.error && !buildingState.isFetching &&
                  <Alert bsStyle="warning">
                    Oletko varma, että haluat poistaa materiaalin <strong>{buildingState.calcPointToDelete.shortDesc} </strong> ?
              </Alert>
                }
                {buildingState.calcPointToDelete && buildingState.error &&
                  <Alert bsStyle="warning">
                    Epäonnistui. <strong>{buildingState.error} </strong>
                  </Alert>
                }

                {buildingState.calcPointToDelete && !buildingState.error && buildingState.isFetching &&
                  <Alert bsStyle="success">
                    <strong>Poistetaan.... </strong>
                  </Alert>
                }

                {!buildingState.calcPointToDelete && !buildingState.error && !buildingState.isFetching &&
                  <Alert bsStyle="success">
                    Materiaali <strong>{buildingState.successMsg} </strong>
                  </Alert>
                }
              </Modal.Body>
              <Modal.Footer>
                {!buildingState.successMsg && !buildingState.isFetching &&
                  <div>
                    <Button onClick={this.cofirmDeleteCalcPoint}>Kyllä</Button>
                    <Button onClick={this.hideCalcPointDeleteModal}>Ei</Button>
                  </div>
                }
                {buildingState.successMsg && !buildingState.isFetching &&
                  <Button onClick={this.hideCalcPointDeleteModal}>Sulje</Button>
                }
              </Modal.Footer>
            </Modal>
          </div>
        }
      </div>
    );
  }
}
