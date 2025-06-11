const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/img/snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

document.querySelector('.name').textContent = character.name;
document.querySelector('#class').textContent = character.class;
document.querySelector('#level').textContent = character.level;
document.querySelector('#health').textContent = character.health;

let char_img = document.querySelector('.image');
char_img.src = character.image;

document.querySelector('#attacked').addEventListener('click', function() {
    character.attacked();
    document.querySelector('#level').textContent = character.level;
    document.querySelector('#health').textContent = character.health;
})
document.querySelector('#levelup').addEventListener('click', function() {
    character.levelUp();
    document.querySelector('#level').textContent = character.level;
    document.querySelector('#health').textContent = character.health;
})
