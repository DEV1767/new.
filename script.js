function hideelement() {
const hamburg = document.getElementById('ham');
const nav=document.getElementsByClassName('nav-2')
hamburg.style.display='none'
for (let i = 0; i < nav.length; i++) {
      nav[i].style.display = 'flex';
  }


}
function back() {
    const hamburg = document.getElementById('ham');
    const nav = document.getElementsByClassName('nav-2');

    hamburg.style.display = 'flex'; 

    Array.from(nav).forEach(element => {
      element.style.display = 'none';
    });
  };