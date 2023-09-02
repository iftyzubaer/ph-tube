const loadBtn = async () => {
      const resBtn = await fetch('https://openapi.programming-hero.com/api/videos/categories');
      const dataBtn = await resBtn.json();
      const buttons = dataBtn.data;

      displayButtons(buttons);
      
}

const displayButtons = buttons => {
      const buttonContainer = document.getElementById('button-container');
      buttons.forEach(button => {
            const buttonCard = document.createElement('div');
            const buttonCardId = button.category_id;
            buttonCard.classList = `btn btn-error text-white bg-[#FF1F3D]`;
            buttonCard.innerHTML = `
            <button onclick="sortHandler('${buttonCardId}')">${button.category}</button>
            `;
            buttonContainer.appendChild(buttonCard);
      })
}

const displayVideo = videos => {

      const videoContainer = document.getElementById('video-container');
      videoContainer.innerHTML = "";

      videos.forEach(video => {
            const videoCard = document.createElement('div');
            const seconds = video.others.posted_date;
            const hours = Math.floor(seconds / 3600);
            const remainingSeconds = seconds % 3600;
            const minutes = Math.floor(remainingSeconds / 60);
            const timeAgoText = (seconds > 0) ? `${hours}hrs ${minutes}min ago` : '';

            if(seconds > 0) {
                  hid = 'bg-[#171717]';
            }
            else {
                  hid = '';
            }

            verify = video.authors[0].verified;
            if(verify === true) {
                  veriHid = 'bg-blue-500';
            }
            else {
                  veriHid = 'hidden';
            }
            if(verify === true) {
                  checkHid = '';
            }
            else {
                  checkHid = 'hidden';
            }

            videoCard.classList = `card card-compact bg-base-100`;
            videoCard.innerHTML = `
            <div class="relative">
            <img class="rounded-lg h-52 w-full " src="${video.thumbnail}" />
            <p class="p-1 rounded text-white absolute bottom-3 right-3 w-fit ${hid}">${timeAgoText}</p>
            </div>
            <div class="card-body">
                  
                  <div class="flex items-start gap-3">
                        <div class="avatar">
                              <div class="w-10 rounded-full">
                                    <img src="${video.authors[0].profile_picture}" />
                              </div>
                        </div>

                        <div>
                              <h2 class="card-title">${video.title}</h2>
                              <div class="flex gap-2">
                                    <p>${video.authors[0].profile_name}</p>
                                    <div class="rounded-full px-2 py-1 ${veriHid}"><i class="fa-solid fa-check ${checkHid}"></i></div>
                              </div>
                              <p>${video.others.views} views</p>
                        </div>
                  </div>

            </div>
            `;
            videoContainer.appendChild(videoCard);
      })
}

const sortHandler = async (buttonCardId) => {
      const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${buttonCardId}`);
      const data = await res.json();
      const videos = data.data;
      displayVideo(videos);
}

sortHandler("1000");

loadBtn();