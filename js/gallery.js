
class Gallery extends React.Component {

  render() {
    // Create Rows of Gallery Items
    var projects = this.props.projects;
    var rows = [];
    for (let i=0; i<projects.length; i+=2){
      var row = (
        <div key={i} className="gallery_row">
          <GalleryItem src={projects[i].pictures[0]}/>

          {i+1 < projects.length ? (
            <GalleryItem src={projects[i+1].pictures[0]}/>
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
        <img src={"img/" + this.props.src}/>
      </div>
    )
  }
}

function getProjectsList(){
  return [
    {
      title: 'Project 1',
      description: 'Description 1',
      pictures: [
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      pictures: [
        'about_img.jpg',
        'time-capsule.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'Project 3',
      description: 'Description 3',
      pictures: [
        'driftwood-sculpture.jpg',
        'time-capsule.jpg',
        'about_img.jpg'
      ]
    },
    {
      title: 'Project 4',
      description: 'Description 1',
      pictures: [
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'Project 5',
      description: 'Description 1',
      pictures: [
        'driftwood-sculpture.jpg',
        'time-capsule.jpg',
        'about_img.jpg'
      ]
    },
    {
      title: 'Project 6',
      description: 'Description 1',
      pictures: [
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'Project 7',
      description: 'Description 1',
      pictures: [
        'about_img.jpg',
        'time-capsule.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'New Project',
      description: 'Description 1',
      pictures: [
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'Project 5',
      description: 'Description 1',
      pictures: [
        'driftwood-sculpture.jpg',
        'time-capsule.jpg',
        'about_img.jpg'
      ]
    },
    {
      title: 'Project 6',
      description: 'Description 1',
      pictures: [
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'Project 7',
      description: 'Description 1',
      pictures: [
        'about_img.jpg',
        'time-capsule.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'New Project',
      description: 'Description 1',
      pictures: [
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
      ]
    }
  ];
}



ReactDOM.render(
  <Gallery projects={getProjectsList()}/>,
  document.querySelector('#gallery')
);
