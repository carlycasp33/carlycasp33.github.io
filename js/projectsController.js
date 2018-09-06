class ProjectsController extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isProjectOpen: false,
      currentProject: null
    }
  }

  handleClick(project){
    this.setState({
      currentProject: project,
      isProjectOpen: true
    });
  }

  handleCloseProject(){
    this.setState({
      isProjectOpen: false,
      currentProject: null
    });
  }

  render() {
    return (
      <div>
        <Gallery
          projects={this.props.projects}
          onItemClick={(p) => this.handleClick(p)}/>
        <Project
          isOpen={this.state.isProjectOpen}
          currentProject={this.state.currentProject}
          onClose={() => this.handleCloseProject()}/>
      </div>
    )
  }
}



function getProjectsList(){
  return [
    {
      title: 'Time Capsule',
      description: 'Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      pictures: [
        'TC8.png',
        'TC1.png',
        'TC2.png',
    		'TC3.png',
    		'TC4.png',
    		'TC5.png',
    		'TC7.png'
      ]
    },
    {
      title: 'Doral City Pavilion',
      description: 'Description 3',
      pictures: [
        'DC1.jpg',
        'DC2.jpg',
        'DC3.jpg',
    		'DC4.jpg',
    		'DC5.jpg',
    		'DC6.jpg',
    		'DC7.jpg',
    		'DC8.jpg',
    		'DC9.jpg'
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
  <ProjectsController projects={getProjectsList()}/>,
  document.querySelector('#projects')
);
