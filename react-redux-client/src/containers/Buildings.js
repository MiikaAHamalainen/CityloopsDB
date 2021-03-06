import { connect } from 'react-redux';
import * as vocActions from '../actions/buildingActions';
import * as fileActions from '../actions/fileActions';
import Buildings from '../components/Buildings';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedBuildingState
    mappedBuildingState: state.buildingState,
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchBuildings: (user) => dispatch(vocActions.fetchBuildings(user)),
    mappedEditBuilding: buildingToEdit => dispatch(vocActions.editBuilding(buildingToEdit)),
    mappedshowEditModal: buildingToEdit => dispatch(vocActions.showEditModal(buildingToEdit)),
    mappedhideEditModal: () => dispatch(vocActions.hideEditModal()),
    mappedDeleteBuilding: buildingToDelete => dispatch(vocActions.deleteBuilding(buildingToDelete)),
    mappedshowDeleteModal: buildingToDelete => dispatch(vocActions.showDeleteModal(buildingToDelete)),
    mappedhideDeleteModal: () => dispatch(vocActions.hideDeleteModal()),

    mappedFileUploadModal: parentId => dispatch(fileActions.showFileUploadModal(parentId)),
    mappedHideFileUploadModal: () => dispatch(fileActions.hideFileUploadModal()),
    mappedFileEditModal: fileToEdit => dispatch(fileActions.showFileEditModal(fileToEdit)),
    mappedHideFileEditModal: () => dispatch(fileActions.hideFileEditModal()),
    mappedShowFileDeleteModal: fileToDelete => dispatch(fileActions.showFileDeleteModal(fileToDelete)),
    mappedHideFileDeleteModal: () => dispatch(fileActions.hideFileDeleteModal()),
    mappedDeleteFile: fileToDelete => dispatch(fileActions.deleteFile(fileToDelete)),
    mappedFileUpload: file => dispatch(fileActions.fileUpload(file)),
    mappedFileEdit: file => dispatch(fileActions.fileEdit(file)),
    mappedFileDownload: (fileId, name) => dispatch(fileActions.fileDownload(fileId, name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buildings);
