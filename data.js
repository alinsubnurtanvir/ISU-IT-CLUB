

window.appData = {
 
  carousel: [
    {
      image: 'https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/539372015_790704063468466_7884947557249495668_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHAjvuzTQ5I6HZNDwcxVyMVQPmSIW_XOcNA-ZIhb9c5wwewKqvrRS_9BRFhKFHRCZRnw11tV-meafg6-Y64Skpx&_nc_ohc=Tv5aGcmsQ7oQ7kNvwHWAVVa&_nc_oc=AdleiayqSI6qR9K5R59dRVwf2U3XLudo3XlvATpamm1XRvYENWDesYSdSfSr42Sqr3aloYP4FDc_UUINdwYw25Nj&_nc_zt=23&_nc_ht=scontent-sin6-3.xx&_nc_gid=CwHDudn17jJyXGRdDF_47A&oh=00_Afq9tYc2LW3muIwmo9HGQQX9T4YsgRdW4suEexD9tPZ7hw&oe=6964F7F8'
    },
    {
      image: 'https://scontent-sin11-1.xx.fbcdn.net/v/t39.30808-6/482068955_664281526110721_8325494468675336792_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGEhnqlIRrLEeynOGofUHVmS7rvlmwbB-dLuu-WbBsH57crVKphkvH02fOsgPE1eEJ3QJee7bkSqbbVrH_X8eD6&_nc_ohc=DL6hYhOtA3sQ7kNvwGewqCq&_nc_oc=AdlL-19gqBN0IZx0vtIeEMNkxCZIeAqSLnJU0oaEJwqyggF-q0VXkTOoW02f8N5qlNVjmGCCJjHftD2DqJjGR0c-&_nc_zt=23&_nc_ht=scontent-sin11-1.xx&_nc_gid=GrwfORtOQUIIciuZD-1xug&oh=00_Afo_A7n9JSEUI7dNHcTsatf5us6s5iQvy6Y0a5iY-5CPdQ&oe=6964D275'
    },
    {
      image: 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/480727119_650911474114393_6513502115354862143_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEOYx73qRmlNrh4SPKb5ci2nMizFFXNyxOcyLMUVc3LE4QNuUTI74MSZRbugtO2CVbFopBb0isZnmE5jMmS7HYB&_nc_ohc=b4OoQgFtbYkQ7kNvwFH0HX2&_nc_oc=AdkNyJ9mzb3z3c6lTpjqfFtrp5z7gP9eymtYRlhIlcmf7CsCPX0BrVdPapchTLdknDAL4UKW0HGpAgdeQSH8RkbB&_nc_zt=23&_nc_ht=scontent-sin6-1.xx&_nc_gid=jcze3w8zx3G8OfawhkzGjQ&oh=00_AfrKiGQ_IhwY4CVUtTPdu5YylNkSCL9hp8L7MOvCzUX0_w&oe=6964D723'
    }
  ],

 
  scrollingText: ' Welcome to ISU IT Club |  Learn, Create, Innovate |  Join our community of tech enthusiasts | Workshops & Hackathons | Connect with industry professionals',

  events: [
    {
      id: 1,
      title: 'Web Development Workshop',
      description: 'Learn modern web technologies including React, Vue, and Angular',
      location: 'Computer Lab 1, Building A',
      start_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      end_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(),
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Seminar',
      description: 'Explore the latest trends in artificial intelligence and machine learning with industry experts',
      location: 'Auditorium',
      start_at: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      end_at: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Hackathon 2025',
      description: 'Build innovative projects and compete for prizes worth thousands',
      location: 'Main Campus',
      start_at: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
      end_at: new Date(Date.now() + 22 * 24 * 60 * 60 * 1000).toISOString(),
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ],


  chairperson: {
    name: 'Dr. Mohammad Ahmed',
    role: 'Chairperson, Department of Computer Science & Engineering',
    message: 'The ISU IT Club is an excellent platform for students to develop technical skills and foster innovation. I encourage all students to actively participate in our events and projects.',
    image: 'https://www.isu.ac.bd/assets/backend/images/faculty_member/2/20250515092515.hakikur-rahman.jpg'
  },

  
  moderators: [
    {
      name: 'Taspia Salam',
      role: 'Faculty Moderator',
      message: 'Seeing our students grow through collaborative projects is truly rewarding. Keep pushing boundaries!',
      image: 'https://www.isu.ac.bd/assets/backend/images/faculty_member/2/20220314063732.13.jpg'
    },
    {
      name: 'Md. Mujibur Rahman Majumder',
      role: 'Faculty Moderator',
      message: 'Technology is evolving rapidly. Stay curious and never stop learning. That\'s the spirit we need here.',
      image: 'https://www.isu.ac.bd/assets/backend/images/faculty_member/2/20220203102957.md-mujibur-rahman-majumder.jpg'
    },
    {
      name: 'Hasibul Islam Peyal',
      role: 'Faculty Moderator',
      message: 'Innovation comes from collaboration. I\'m proud to work with such dedicated and passionate students.',
      image: 'https://www.isu.ac.bd/assets/backend/images/faculty_member/2/20240208100758.IMG_5233.jpg'
    }
  ],

  
  collaborations: [
    {
      title: 'Google Developer Community',
      subtitle: 'Building tomorrow\'s leaders',
      link: 'https://google.com',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70907b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Microsoft Student Ambassadors',
      subtitle: 'Technology for everyone',
      link: 'https://microsoft.com',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'GitHub Student Pack',
      subtitle: 'Free tools for students',
      link: 'https://github.com/student',
      image: 'https://images.unsplash.com/photo-1618401479427-ca8cdc11b89d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'AWS Academy',
      subtitle: 'Cloud computing skills',
      link: 'https://aws.amazon.com',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'MongoDB Student Program',
      subtitle: 'Database excellence',
      link: 'https://mongodb.com',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70907b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Cisco Networking Academy',
      subtitle: 'Network fundamentals',
      link: 'https://cisco.com',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]
};
