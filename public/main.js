function sidebarToggle(){
   sidebarContent = document.getElementById('sidebarContent');
   closedSidebar = document.getElementById('closedSidebar');
   videoContent = document.getElementById('videoContent');
   tagsContent = document.getElementById('tagsContent');

   sidebarContent.classList.toggle('displayNone');
   closedSidebar.classList.toggle('displayBlock');
   videoContent.classList.toggle('left0');
   tagsContent.classList.toggle('left1');
}