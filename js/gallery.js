
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
              title={projects[i+1].title}
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

    // Insert each "row" into a larger row of two rows for formatting
    // TODO: This isn't a good way to do it. Clean this up later but I just
    // want to get something working for now.
    var largeScreenRows = [];
    for (let i=0; i<rows.length; i+=2){
      var largeScreenRow = (
        <div key={i} className="gallery_large_screen_row">
          {rows[i]}
          {i+1 < rows.length ? (
              rows[i+1]
            ) : (
              ''
            )
          }
        </div>
      );
      largeScreenRows.push(largeScreenRow);
    }

    // Return the gallery
    return (
      <div className="gallery_container">
        {largeScreenRows}
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
