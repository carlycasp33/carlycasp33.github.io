
class Gallery extends React.Component {

  render() {

    var img_src = "img/" + this.props.projects[0].pictures[0];

    return (
      <div className="gallery_container">
        <div className="gallery_row">
          <div className="gallery_column">
            <img src = "img/time-capsule.jpg"/>
          </div>
          <div className="gallery_column">
            <img src = "img/about_img.jpg"/>
          </div>

        </div>
        <div className="gallery_row">
          <div className="gallery_column">
            <img src = "img/driftwood-sculpture.jpg"/>
          </div>
          <div className="gallery_column">
            <img src = "img/time-capsule.jpg"/>
          </div>
        </div>
        <div className="gallery_row">
          <div className="gallery_column">
            <img src = "img/driftwood-sculpture.jpg"/>
          </div>
          <div className="gallery_column">
            <img src = "img/time-capsule.jpg"/>
          </div>
        </div>

        <div className="gallery_row">
          <div className="gallery_column">
            <img src = "img/about_img.jpg"/>
          </div>
          <div className="gallery_column">
            <img src = "img/time-capsule.jpg"/>
          </div>
        </div>

        <div className="gallery_row">
          <div className="gallery_column">
            <img src = "img/about_img.jpg"/>
          </div>
          <div className="gallery_column">
            <img src = "img/about_img.jpg"/>
          </div>
        </div>

        <div className="gallery_row">
          <div className="gallery_column">
            <img src = "img/about_img.jpg"/>
          </div>
          <div className="gallery_column">
            <img src = "img/about_img.jpg"/>
          </div>
        </div>

        <div className="gallery_row">
          <div className="gallery_column">
            <img src = "img/time-capsule.jpg"/>
          </div>
          <div className="gallery_column">
            <img src = "img/driftwood-sculpture.jpg"/>
          </div>
        </div>
        <div className="gallery_row">
          <div className="gallery_column">
            <img src = "img/time-capsule.jpg"/>
          </div>

        </div>
      </div>
    );
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
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
      ]
    },
    {
      title: 'Project 3',
      description: 'Description 3',
      pictures: [
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
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
        'time-capsule.jpg',
        'about_img.jpg',
        'driftwood-sculpture.jpg'
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
