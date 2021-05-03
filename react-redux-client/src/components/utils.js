import React from 'react';

// Get enum types for building types from schema
export const getLabelFor = (param, selected) => {
  var options = getTypesFor(param);
  for ( var i in options ) {
    if ( options[i].key === selected ) {
      return options[i].props.children;
    }
  }
  return null;
}

/**
 * Parse groups that comes from Keycloak user instance
 * 
 * Returns items for select list in GUI
 * @param {} userGroups 
 */
export const parseGroups = (userGroups) => {
  let items = [];

  for (var g in userGroups) {
    items.push((<option key={userGroups[g]} value={userGroups[g]}>
      {userGroups[g].replace(/^\//, '')}</option>));
  }
  return items;
}

// If time permits, add these mappings to schema and figure out how to render these using react from mongoose..
export const getTypesFor = (paramType) => {
    let items = [];        

    if ( paramType === 'buildingType') {
      items.push((<option key='Koulu' value='Koulu'>Koulu</option>));
      items.push((<option key='Toimistorakennus' value='Toimistorakennus'>Toimistorakennus</option>));
      items.push((<option key='Sote-rakennus' value='Sote-rakennus'>Sote-rakennus</option>));
      items.push((<option key='Vanhainkoti' value='Vanhainkoti'>Vanhainkoti</option>));
      items.push((<option key='Kirjasto' value='Kirjasto'>Kirjasto</option>));
      items.push((<option key='Asuintalo' value='Asuintalo'>Asuintalo</option>));
      items.push((<option key='Muu' value='Muu'>Muu</option>));
    }
    else if ( paramType === 'buildingMaterial' ) {
      items.push((<option key='Betoni' value='Betoni'>Betoni</option>));
      items.push((<option key='Tiili' value='Tiili'>Tiili</option>));
      items.push((<option key='Massiivihirsi' value='Massiivihirsi'>Massiivihirsi</option>));
      items.push((<option key='Puurunkotiiliverhous' value='Puurunkotiiliverhous'>Puurunko + tiiliverhous</option>));
      items.push((<option key='Puurunkopuuverhous' value='Puurunkopuuverhous'>Puurunko + puuverhous</option>));
      items.push((<option key='Kivi' value='Kivi'>Kivi</option>));
      items.push((<option key='Muu' value='Muu'>Muu</option>));
    }
    else if ( paramType === 'buildingOuterWall' ) {
      items.push((<option key='Betoni' value='Betoni'>Betoni</option>));
      items.push((<option key='Tiili' value='Tiili'>Tiili</option>));
      items.push((<option key='Massiivihirsi' value='Massiivihirsi'>Massiivihirsi</option>));
      items.push((<option key='Puurunkotiiliverhous' value='Puurunkotiiliverhous'>Puurunko + tiiliverhous</option>));
      items.push((<option key='Puurunkopuuverhous' value='Puurunkopuuverhous'>Puurunko + puuverhous</option>));
      items.push((<option key='Kivi' value='Kivi'>Kivi</option>));
      items.push((<option key='Muu' value='Muu'>Muu</option>));
    }
    else if ( paramType === 'lotVolumeWeightUnit' ) {
      items.push((<option key='Kg' value='Kg'>Kg</option>));
      items.push((<option key='m³' value='m³'>m³</option>));
    }
    else if ( paramType === 'buildingFoundation' ) {
      items.push((<option key='Betoni' value='Betoni'>Betoni</option>));
      items.push((<option key='Tiili' value='Tiili'>Tiili</option>));
      items.push((<option key='Muu' value='Muu'>Muu</option>));
    }
    else if (paramType === 'buildingRoof') {
      items.push((<option key='Tasakatto' value='Tasakatto'>Tasakatto</option>));
      items.push((<option key='Harjakatto' value='Harjakatto'>Harjakatto</option>));
      items.push((<option key='Pulpettikatto' value='Pulpettikatto'>Pulpettikatto</option>));
      items.push((<option key='Mansardi' value='Mansardi'>Mansardi</option>));
      items.push((<option key='Muu' value='Muu'>Muu</option>));
    }
    else if (paramType === 'buildingFloorsNumber') {
      items.push((<option key='1' value='1'>1</option>));
      items.push((<option key='2' value='2'>2</option>));
      items.push((<option key='3' value='3'>3</option>));
      items.push((<option key='4' value='4'>4</option>));
      items.push((<option key='5' value='5'>5</option>));
      items.push((<option key='6' value='6'>6</option>));
      items.push((<option key='7' value='7'>7</option>));
      items.push((<option key='8' value='8'>8</option>));
      items.push((<option key='9' value='9'>9</option>));
      items.push((<option key='10' value='10'>10</option>));
    }
    else if (paramType === 'lotCategory') {
      items.push((<option key='Kasa' value='Kasa'>Kasa</option>));
      items.push((<option key='Irrotettava' value='Irrotettava'>Irrotettava</option>));
    }
    else if (paramType === 'lotReady') {
      items.push((<option key='Ei' value={false} >Ei</option>));
      items.push((<option key='Kyllä' value={true}>Kyllä</option>));
    }
    else if (paramType === 'cpFloorNumber') {
      items.push((<option key='1' value='1'>1</option>));
      items.push((<option key='2' value='2'>2</option>));
      items.push((<option key='3' value='3'>3</option>));
      items.push((<option key='4' value='4'>4</option>));
      items.push((<option key='5' value='5'>5</option>));
      items.push((<option key='6' value='6'>6</option>));
      items.push((<option key='7' value='7'>7</option>));
      items.push((<option key='8' value='8'>8</option>));
      items.push((<option key='9' value='9'>9</option>));
      items.push((<option key='10' value='10'>10</option>));
    }
    else if (paramType === 'cpFloorMaterial') {
      items.push((<option key='Muovimatto' value='Muovimatto'>Muovimatto</option>));
      items.push((<option key='Linoleum' value='Linoleum'>Linoleum</option>));
      items.push((<option key='Betoni' value='Betoni'>Betoni</option>));
      items.push((<option key='Puu' value='Puu'>Puu</option>));
      items.push((<option key='Laminaatti' value='Laminaatti'>Laminaatti</option>));
      items.push((<option key='Muu' value='Muu'>Muu</option>));
    }
    else if (paramType === 'cpRoofMaterial') {
      items.push((<option key='Akustolevy' value='Akustolevy'>Akustolevy</option>));
      items.push((<option key='MDF' value='MDF'>MDF</option>));
      items.push((<option key='Betoni' value='Betoni'>Betoni</option>));
      items.push((<option key='Levy' value='Levy'>Levy</option>));
      items.push((<option key='Puu' value='Puu'>Puu</option>));
      items.push((<option key='Muu' value='Muu'>Muu</option>));
    }
    else if (paramType === 'cpCeilingMaterial') {
      items.push((<option key='Betoni' value='Betoni'>Betoni</option>));
      items.push((<option key='Kipsilevy' value='Kipsilevy'>Kipsilevy</option>));
      items.push((<option key='Laatta' value='Laatta'>Laatta</option>));
      items.push((<option key='Hirsi' value='Hirsi'>Hirsi</option>));
      items.push((<option key='Lastulevy' value='Lastulevy'>Lastulevy</option>));
      items.push((<option key='Puu' value='Puu'>Puu</option>));
      items.push((<option key='Muu' value='Muu'>Muu</option>));
    }
    else if (paramType === 'measurementMetrics') {
      items.push((<option key='Tvoc' value='Tvoc'>TVOC</option>));
      items.push((<option key='Mikrobit' value='Mikrobit'>Mikrobit</option>));
      items.push((<option key='Hiukkaset' value='Hiukkaset'>Hiukkaset</option>));
      items.push((<option key='Lampotila' value='Lampotila'>Lämpötila</option>));
      items.push((<option key='Kosteus' value='Kosteus'>Kosteus</option>));
      items.push((<option key='CO2' value='CO2'>CO2</option>));
      items.push((<option key='Polynkoostumusanalyysi' value='Polynkoostumusanalyysi'>Pölynkoostumusanalyysi</option>));
      items.push((<option key='Homekoirakokeet' value='Homekoirakokeet'>Homekoirakokeet</option>));
      items.push((<option key='qPCRanalyysi' value='qPCRanalyysi'>qPCR-analyysi</option>));
    }

    // Dynamic loop for accessing props
    // for (let i = 0; i <= this.props.maxValue; i++) {             
    //      items.push(<option key={i} value={i}>{i}</option>);   
    //      //here I will be creating my options dynamically based on
    //      //what props are currently passed to the parent component
    // }

    return items;
  }  
  