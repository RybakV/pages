const startBtn = document.querySelector('#start');
const resultBox = document.querySelector('#result');
startBtn.addEventListener('click', startApp);

const token = '6984190497:AAFivyswRSE2zT8bK_AL7RYf_znndhov7tA';
const firstPost = '800520411' // update_id of the first post
const postsQuantity = '1'

function startApp(){
    // fetch(`https://api.telegram.org/bot${token}/getUpdates?offset=${firstPost}&limit=${postsQuantity}`)
    fetch(`https://api.telegram.org/bot${token}/getUpdates`)
        .then((response) => response.json())
        .then((data) => {
            console.log('Fetch data:',data);
            console.log('Fetch data:',data.result[0].message.poll);
            renderPoll(data.result[0].message.poll);
        })
    }

async function renderPoll(pollData){
    const newPoll = document.createElement('div');
    newPoll.classList.add('poll');
    const pollTitle = createHtmlNode('h1', pollData.question);
    newPoll.appendChild(pollTitle);
    resultBox.appendChild(newPoll);


    const pollOptions = document.createElement('ul');
    pollData.options.map((option) => {
        const optionNode = createHtmlNode('li', `${option.text}: ${option.voter_count}`)
        pollOptions.appendChild(optionNode);
    });
    resultBox.appendChild(pollOptions);
}

function createHtmlNode(tag, content){
    const node = document.createElement(tag);
    node.innerText = content;
    return node;
}