const linksUser = {
  github: "Gustavo-Melo-dev",
  youtube: "UCIN5M2HhlyG4emkYgJ70bGw",
  instagram: "guumelo",
  facebook: "gustavo.mello.779",
  twitter: "gusta_meelo",
};

function setLinksUser() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${linksUser[social]}`;
  }
}

setLinksUser();

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksUser.github}`
    fetch(url).then(response => response.json())
    .then(data => {
        userName.textContent = data.name,
        linkGitHub.href = data.html_url,
        imgUser.src = data.avatar_url,
        userLogin.textContent = data.login,
        bio.textContent = data.bio
    })
}

getGitHubProfileInfos()