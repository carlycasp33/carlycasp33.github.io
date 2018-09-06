
class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPic: 0
    }
  }

  nextImg(delta) {
    var currentPic = this.state.currentPic;
    var numPics = this.props.currentProject.pictures.length;
    console.log("Current Pic is: " + currentPic);
    currentPic += delta;

    console.log("Intermediae is: " + currentPic);
    currentPic = ((currentPic % numPics) + numPics) % numPics;
    console.log("Next Pic is: " + currentPic);

    this.setState({
      currentPic: currentPic
    });
  }

  close(){
    this.setState({
      currentPic: 0
    });
    this.props.onClose();
  }

  render() {
    // Return the gallery
    if (this.props.isOpen){
      document.body.style.overflowY = "hidden"
      return (
        <div className="projects_detail_container">
          <div className="close_btn_container">
            <img className="close_btn" src="img/close_icon.png" onClick={() => this.close()}/>
          </div>
          <div className="img_container">
            <img
              className="left_btn"
              src="img/left_arrow.png"
              onClick={() => this.nextImg(-1)}/>

            <ImageWithSpinner imgSrc={"img/" + this.props.currentProject.pictures[this.state.currentPic]}/>


            <img
              className="right_btn"
              src="img/right_arrow.png"
              onClick={() => this.nextImg(1)}/>
          </div>
          <span>({this.state.currentPic + 1} of {this.props.currentProject.pictures.length})</span>

          <div className="project_description">
            <h2>{this.props.currentProject.title}</h2>
            <p>{this.props.currentProject.description}</p>
          </div>
        </div>

      );
    } else {
      document.body.style.overflowY = "scroll"
      return (
        null
      );
    }
  }
}
