document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('mainImage');
  const thumbs = document.querySelectorAll('.thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImage.style.opacity = 0;

      setTimeout(() => {
        const temp = mainImage.getAttribute('src');
        mainImage.setAttribute('src', thumb.getAttribute('src'));
        thumb.setAttribute('src', temp);

        mainImage.style.opacity = 1;
      }, 300);
    });
  });

  document.getElementById('nextPageBtn').addEventListener('click', () => {
    window.location.href = 'page2.html';
  });
});
