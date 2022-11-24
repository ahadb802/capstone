const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.mid-info');
const htr = document.getElementById('Project-details');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
const arr = [
  {
    Id: 1, pic: '../images/speaker1.jpg', name: 'Aaron Francis', occupation: 'Developer Educator | PlanetScale', about: 'Aaron Francis is a developer educator at PlanetScale, a MySQL-compatible serverless database platform. He lives in Dallas with his wife, Jennifer, and their 16-month-old twins. He loves making things, teaching, and constantly has a side‐project going. Someday, he will own a little farm and restore the land, but until then you can find him on Twitter.',
  },
  {
    Id: 2, pic: '../images/speaker2.jpg', name: 'Abigail Cabunoc Mayes', occupation: 'Senior Program Manager, Developer Relations | GitHub', about: 'Abigail Cabunoc Mayes (@abbycabs) leads GitHubs open source maintainer programs. Before this, she led Mozillas open source developer engagement strategy around trustworthy AI and MozFest. Abby founded Mozilla Open Leaders, a mentorship program that worked with over 600 open projects globally. With a background in open science.',
  },
  {
    Id: 3, pic: '../images/speaker3.jpg', name: 'Allison Weins', occupation: 'Senior Product Manager | GitHub', about: 'Allison Weins has has spent the last five years working on developer tools and loving it! Shes built experiences for source control, editor productivity, and GitHub Codespaces before landing on GitHub Projects, where she spends her days thinking about how to build planning tools that keep developers at the center of the experience.',
  },
  {
    Id: 4, pic: '../images/speaker4.jpg', name: 'Amelia Wattenberger', occupation: 'Staff Research Engineer, GitHub Next | GitHub', about: 'Amelia explores the future of developer experience as part of GitHub Next. She lives at the intersection of development, design, and storytelling, and is perpetually interested in making lives easier using robots and novel interfaces.',
  },
  {
    Id: 5, pic: '../images/speaker5.jpg', name: 'Amanda Boyle', occupation: 'Community Strategy Senior Manager | GitHub', about: 'Amanda is a community-driven leader with 10 years of experience building and managing tech communities that increase product engagement and adoption. She’s passionate about connecting people and building programs that create and nurture diverse communities',
  },
  {
    Id: 6, pic: '../images/speaker6.jpg', name: 'Amanda Cody', occupation: 'CISO | FS-ISAC', about: 'With almost 20 years of experience in information security, Amanda Cody is responsible for the strategic direction and operationalization of FS-ISAC’s Information Security and Technology Programs. Additionally, Amanda leads a number of Cyber Security Communities of Interest and has executive oversight of FS-ISAC’s Global Member Experience.',
  },

];
// adding dynamic Speakers
arr.forEach((item) => {
  htr.innerHTML += `<div class="col-sm-6">
                            <div class="card">
                                <div class="speaker-info">
                                 <img class="speaker-pic" src="${item?.pic ?? ""}" alt="aaron francis speaker image">
                                    <div>
                                     <h5 class="card-title">${item?.name ?? ""}</h5>
                                    <h6 href="" class="occupation">${item?.occupation ?? ""}</h6>
                                 <span></span>
                             <p class="card-text">${item?.about ?? ""}</p>
                            </div>
                            </div>
                             </div>
                             </div>`;
});
