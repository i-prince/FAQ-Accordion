document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown > div');
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', () => {
        const content = dropdown.querySelector('.drop-content');
        if (content.classList.contains('show')) {
          content.classList.remove('show');
        } else {
          // Hide all other open dropdowns
          document.querySelectorAll('.drop-content').forEach(item => {
            item.classList.remove('show');
          });
  
          // Show the clicked dropdown
          content.classList.add('show');
        }
      });
    });
  });
  