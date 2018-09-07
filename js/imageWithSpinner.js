
class ImageWithSpinner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      prevImgSrc: null
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.state.prevImgSrc != this.props.imgSrc && !this.state.isLoading){
      this.setState({
        isLoading: true
      });
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
      isLoading: false,
      prevImgSrc: this.props.imgSrc
    });
  }

  render() {
    var imgStyle = {
      display: this.state.isLoading ? 'none' : 'inline-block'
    };

    return (
      <div>
        {this.renderSpinner()}
        <img
          className="project_img"
          src={this.props.imgSrc}
          onLoad={() => this.handleImageLoaded()}
          style={imgStyle}/>
      </div>
    );
  }
}
