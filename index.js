const width = window.innerWidth;
let hero = document.getElementById('hero')



console.log(width);


if (width < 600) {
    document.getElementById('hamburger').innerHTML = `<img src="Hamburger Menu.svg" alt="" class="hamburger-menu">`
} else if (width >= 600) {
    // hero.setAttribute('src', 'Hero Image (Tablet View).png')
    document.getElementById('hamburger').innerHTML = `
    <ol class="hamburger-list">
<li><a href="http://" target="_blank" rel="noopener noreferrer">Home</a></li>
<li><a href="http://" target="_blank" rel="noopener noreferrer">Pricing</a></li>
<li><a href="http://" target="_blank" rel="noopener noreferrer">FAQ</a></li>
<li>
    <button class="signin">
    <img src="Chirp Starter Files\Assets\Twitter.svg" alt="">
    <span class="sign-in-with-twitter">sign in with twitter</span>
</button>
</li>
</ol>`
}
// COMPLETED