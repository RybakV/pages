//curl --request GET 'https://api.twitter.com/2/tweets?ids=1199786642791452673&expansions=attachments.poll_ids&poll.fields=duration_minutes,end_datetime,id,options,voting_status' --header 'Authorization: Bearer $BEARER_TOKEN'
const startBtn = document.querySelector('#start');
const resultBox = document.querySelector('#result');
startBtn.addEventListener('click', startApp);

function startApp(){
    fetch('https://api.twitter.com/2/tweets?ids=1749817159872831578&expansions=attachments.poll_ids&poll.fields=duration_minutes,end_datetime,id,options,voting_status')
        .then((response) => response.json())
        .then((data) => {
            resultBox.innerText = data;
        });
}


const exampleResponse = {
    "data": [
    {
        "text": "C#",
        "id": "1199786642791452673",
        "attachments": {
            "poll_ids": [
                "1199786642468413448"
            ]
        }
    }
],
    "includes": {
    "polls": [
        {
            "id": "1199786642468413448",
            "voting_status": "closed",
            "duration_minutes": 1440,
            "options": [
                {
                    "position": 1,
                    "label": "“C Sharp”",
                    "votes": 795
                },
                {
                    "position": 2,
                    "label": "“C Hashtag”",
                    "votes": 156
                }
            ],
            "end_datetime": "2019-11-28T20:26:41.000Z"
        }
    ]
}
}