
class ImageWithSpinner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  renderSpinner(){
    if (!this.state.isLoading){
      return null;
    } else {
      return (
        <img
          className="project_img"
          src={"img/spinner.gif"}/>
      )
    }
  }

  handleImageLoaded(){
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <div>
        {this.renderSpinner()}
        <img
          className="project_img"
          src={this.props.imgSrc}
          onLoad={() => this.handleImageLoaded()}/>
      </div>
    );
  }
}
