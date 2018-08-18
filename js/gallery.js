
class Gallery extends React.Component {

  render() {
    // Create Rows of Gallery Items
    var projects = this.props.projects;
    var rows = [];
    for (let i=0; i<projects.length; i+=2){
      var row = (
        <div key={i} className="gallery_row">
          <GalleryItem
            src={projects[i].pictures[0]}
            title={projects[i].title}
            onClick={() => this.props.onItemClick(projects[i])}
          />

          {i+1 < projects.length ? (
            <GalleryItem
              src={projects[i+1].pictures[0]}
              title={projects[i].title}
              onClick={() => this.props.onItemClick(projects[i+1])}
            />
            ) : (
              ''
            )
          }
        </div>
      );
      rows.push(row);
    }

    // Return the gallery
    return (
      <div className="gallery_container">
        {rows}
      </div>
    );
  }
}


class GalleryItem extends React.Component{
  render(){
    return (
      <div className="gallery_column">
        <img
          src={"img/" + this.props.src}
          onClick={() => this.props.onClick()}/>
        <div className="gallery_title">{this.props.title}</div>
      </div>
    )
  }
}
