const app = {
  initShowComments: () => {
    const viewComments = document.getElementsByClassName('view-comment');
    const comments = document.getElementsByClassName('comments');
    const initialComments = document.getElementById('partial_comments')
    const showBtn = document.getElementById('show_more');
    const showCommentsHandler = (ev) => {
      for(let i = 0; i < comments.length; i++){
        if( comments[i].classList.contains('hide') ){
          comments[i].classList.remove('hide')
          ev.stopPropagation();
          if( initialComments.offsetHeight >= 440 || initialComments.offsetHeight === 450 ){
            showBtn.style.display = 'inline-block';
            if( showBtn.classList.contains('hide') ){
              showBtn.classList.remove('hide')
            }
            showBtn.classList.add('hide');
          }
        } else{
          comments[i].classList.add('hide')
        }
      }

    }
    const scrollComments = (ev) => {
      console.log('scroll through comments')
      initialComments.style.overflowY = 'scroll';
    }
    showBtn.addEventListener('click', scrollComments);
    for(let i = 0; i < viewComments.length; i++){
      viewComments[i].addEventListener('click', showCommentsHandler);
    }
  },
  initImageThumbnail: () => {
    const lightbox = document.getElementsByClassName('lightbox-img');
    const imageCounter = document.getElementById('post_image_count');
    const overlay = document.getElementById('post_overlay');

    const count = lightbox.length - 3;
    imageCounter.innerText = count;

    if(lightbox.length === 1){
      overlay.style.display = 'none';
      for(let i = 0; i <= lightbox.length; i++){
          lightbox[i].style.cssText =`
            max-width: 100%;
            flex: 0 0 100%;
            max-height: 400px;
            `;
      }
    }
    else if(lightbox.length <= 3){
      overlay.style.display = 'none';
    } else{
      for(let i = 3; i <= lightbox.length; i++){
          lightbox[i].style.cssText =`
            position: absolute;
            right: 0;
            bottom:0;
            `;
      }
    }
  }
}
