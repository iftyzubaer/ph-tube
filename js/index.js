const loadBtn = async () => {
      const resBtn = await fetch('https://openapi.programming-hero.com/api/videos/categories');
      const dataBtn = await resBtn.json();
      const buttons = dataBtn.data;

      displayButtons(buttons);
      
}

const displayButtons = buttons => {
      const buttonContainer = document.getElementById('button-container');

      buttons.forEach(button => {
            const buttonCard = document.createElement('button');
            buttonCard.classList = `btn btn-error text-white bg-[#FF1F3D]`;
            buttonCard.innerHTML = `
            ${button.category}
            `;
            buttonContainer.appendChild(buttonCard);
      })
}

const loadVideo = async () => {
      const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
      const data = await res.json();
      const videos = data.data;
      displayVideo(videos);
}

const displayVideo = videos => {

      const videoContainer = document.getElementById('video-container');

      videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.classList = `card card-compact bg-base-100`;
            videoCard.innerHTML = `
            <img class="rounded-lg h-52" src="${video.thumbnail}" />
            <div class="card-body">
                  
                  <div class="flex items-start gap-3">
                        <div class="avatar">
                              <div class="w-10 rounded-full">
                                    <img src="${video.authors[0].profile_picture}" />
                              </div>
                        </div>

                        <div>
                              <h2 class="card-title">${video.title}</h2>
                              <p>${video.authors[0].profile_name}</p>
                              <p>${video.others.views} views</p>
                        </div>
                  </div>

            </div>
            `;
            videoContainer.appendChild(videoCard);
      })
}

loadVideo();

loadBtn();