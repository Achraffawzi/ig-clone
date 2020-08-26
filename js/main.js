/* ====================== ADDING A COMMENT FUNCTIONALITY ====================== */
var postCaption = document.getElementsByClassName('post-caption'),
    commentIcon = document.getElementsByClassName('comment-icon'),
    submitComment = document.getElementsByClassName('submit-comment');

window.addEventListener('click', e => {
    if(e.target.className.includes('comment-icon')) {
        submitComment[e.target.className.substr(28, 1)].style.display = 'flex';
    }
});

// CLICKING ON COMMENT BUTTON TO POST A COMMENT
let commentButton = document.querySelectorAll('.commentButton'),
    comments      = document.querySelectorAll('.comments'),
    commentInput  = document.querySelectorAll('.comment-input');
    
comments.innerHTML = '';

for(let i = 0; i < commentButton.length; i++) {
    commentButton[i].addEventListener('click', () => {
        comments[i].innerHTML += `
            <div class="comment">
                <span class="caption-username">John Flick</span>
                <span class="caption-content">${commentInput[i].value}</span>
            </div>
        `;
    });
    commentInput[i].value = "";
}

/* ====================== SHARING A POST FUNCTIONALITY ====================== */
let sharePostIcon = document.getElementsByClassName('sharePostIcon'),
    shareContainer = document.getElementById('shareContainer'),
    overlay = document.getElementById('overlay'),
    closeIcon = document.getElementById('shareContainer__top__closeIcon');

for(let i = 0; i < sharePostIcon.length; i++) {
    sharePostIcon[i].addEventListener('click', () => {
        shareContainer.style.display = 'block';
        // shareContainer.style.transform = 'scale(1)';
        overlay.classList.add('overlay--active');
    });
}

/* CLOSING THE SHARE POST CONTAINER */
closeIcon.addEventListener('click', () => {
    shareContainer.style.display = 'none';
    overlay.classList.remove('overlay--active');
});

/* SELECTING THE FRIEND T SHARE THE POST WITH */
let friendToShare = document.getElementsByClassName('shareContainer__body__friend'),
    selectIcon  = document.getElementsByClassName('shareContainer__body__selectIcon');
for(let i = 0; i < friendToShare.length; i++) {
    friendToShare[i].addEventListener('click', () => {

        if(selectIcon[i].className.includes('far fa-circle')) {
            selectIcon[i].classList.remove('far');
            selectIcon[i].classList.remove('fa-circle');
            selectIcon[i].classList.add('fas');
            selectIcon[i].classList.add('fa-check-circle');
            selectIcon[i].style.color = 'rgb(53, 111, 219)';

        } else {
            selectIcon[i].classList.remove('fas');
            selectIcon[i].classList.remove('fa-check-circle');
            selectIcon[i].classList.add('far');
            selectIcon[i].classList.add('fa-circle');
            selectIcon[i].style.color = '#ddd';

        }

    });
}


/* ====================== WORKING ON LIKE ACTIONS ====================== */
// const postContent = document.getElementsByClassName('post-content'),
    heartIcon   = document.querySelectorAll('.heart-icon');

// WHEN THE USER CLICKS THE HEART ICON
window.addEventListener('click', e => {
    if(e.target.className.includes("heart-icon"))
        e.target.classList.toggle('heart-color-toggle');
});

window.addEventListener('dblclick', function(e) {
    if(e.target.className.includes('post-content')) {
        heartIcon[e.target.className.substr(13, 1)].classList.toggle('heart-color-toggle');
    }
});

/* ====================== SENDING MESSAGE FUNCTIONALITY ====================== */
const inpMessage = document.getElementById('input-message'),
      sendIcon   = document.getElementById('send-icon'),
      privateChatBody = document.getElementById('private-chat-body');

window.onload = () => {

    inpMessage.value = '';
    
    for(let i = 0; i < localStorage.length; i++) {
        let newMessage = document.createElement('p');

        newMessage.textContent = localStorage.getItem(localStorage.key(i));
        newMessage.classList.add('message');
        privateChatBody.appendChild(newMessage);
    }
};

let k = 1; // FOR INCREMENTING THE INDEX OF THE MESSAGE KEY FOR LOCALSTORAGE

sendIcon.addEventListener('click', () => {
    if(!inpMessage.value ) return;
    else {
        //LETTING THE SCROLLBAR ALWAYS TO THE BOTTOM
        privateChatBody.scrollTop = privateChatBody.scrollHeight;

        let newMessage = document.createElement('p');
        
        // STOCKING THE MESSAGES ON THE LOCALSTORAGE
        // CREATING NEW PARAGRAPH AND APPEND IT TO THE PARENT ELEMENT
        newMessage.appendChild(document.createTextNode(inpMessage.value));
        newMessage.classList.add('message');
        privateChatBody.appendChild(newMessage);
        // document.createTextNode(inpMessage.value);
        localStorage.setItem(('message'.concat(k.toString())), newMessage.textContent);
        console.log("k = " + k);
        console.log(localStorage);
        k++;

        inpMessage.value = '';
    }
});

