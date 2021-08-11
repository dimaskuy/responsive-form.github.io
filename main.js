const inputs = Array.from(document.querySelectorAll('.input'));

inputs.forEach(e => {
  e.addEventListener('focus', function() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
  });

  e.addEventListener('blur', function() {
    let parent = this.parentNode.parentNode;
    if(this.value == "") {
      parent.classList.remove('focus');
    }
  });
});
