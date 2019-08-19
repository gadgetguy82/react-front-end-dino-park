import React, {Component} from 'react';
import PaddockList from '../components/map_paddock_container/PaddockList';
import ButtonList from '../components/buttons/ButtonList';

class PaddockContainer extends Component {


    constructor(props) {
      super(props);
      this.state = {
        listOfPaddocks: [],
        paddockName: '',
        paddockType: '',
        newDino: {}
      };
      this.handleAddPaddockFormSubmit = this.handleAddPaddockFormSubmit.bind(this);
      this.handleAddDinosaurFormSubmit = this.handleAddDinosaurFormSubmit.bind(this);
    }

  // componentDidMount(){
  //   const url = 'PLACEHOLDER-PLACEHOLDER-PLACEHOLDER'
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(returnedDinos => this.setState({listOfDinos: returnedDinos, listOfPaddocks: returnedDinos}))
  //   .catch(err => console.error(err))
  // }

  handleAddPaddockFormSubmit({paddockName, paddockType}) {
      this.setState({ paddockName: paddockName,
                      paddockType: paddockType})
  }

  handleAddDinosaurFormSubmit({newDino}) {
    this.setState({newDino: newDino})
  }


  render(){
    return (
      <div className="PaddockContainer">
      <h3>This is a paddock container</h3>
      <PaddockList paddockList={this.state.listOfPaddocks}/>
      <ButtonList onAddPaddockFormSubmit={this.handleAddPaddockFormSubmit} onAddDinosaurFormSubmit={this.handleAddDinosaurFormSubmit}/>
      </div>
    )

  }
}

export default PaddockContainer;
