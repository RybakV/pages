const scedule = document.querySelector('#scedule');
const timeBox = document.querySelector('#time');

const updateInterval = 60 * 1000;

const weekDayNames = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','НД'];

//var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date+' '+time;

let offs = [
	[1,[6,10],[15,19]],
	[2,[0,4],[9,13],[18,22]],
	[3,[3,7],[12,16],[21,24]],
	[4,[0,1],[6,10],[15,19]],
	[5,[0,4],[9,13],[18,22]],
	[6,[3,7],[12,16],[21,24]],
	[7,[0,1],[6,10],[15,19]],
];

//update table every 20 seconds
function pageUpdate(){
	createCells(24, 7);
}

setInterval(pageUpdate, updateInterval);
pageUpdate();

//generate table
function createCells(width, height) {
	var now = new Date();
	let dayEn = now.getDay();
	var day = (dayEn==0?7:dayEn);
	let hour = now.getHours();
	let minute = now.getMinutes();

	timeBox.innerHTML = (now.getHours()<10?'0':'') + now.getHours() + "<span>:</span>" + (now.getMinutes()<10?'0':'') + now.getMinutes()/* + "<span>:</span>" + now.getSeconds()*/;

	cellsString = '';

	for (let row = 0; row < height; row++){

		//timeline point
		let timelineHtml = '';

		//generate dark zones
		let zonesHtml = '';
		for (let i = 1; i < offs[row].length; i++) {
			zonesHtml = `${zonesHtml}<div 
    		class="zone-off" 
    		style="width:${(offs[row][i][1]-offs[row][i][0])/24*100}%; 
    			height:${(offs[row][i][1]-offs[row][i][0])/24*100}%; 
    			left:${100/24*offs[row][i][0]}%; 
    			top:${100/24*offs[row][i][0]}%">
    			<span class="off-time ${offs[row][i][0]==0?'hidden':''}">${offs[row][i][0]}</span>
    			<span class="on-time ${offs[row][i][1]==24?'hidden':''}">${offs[row][i][1]}</span>
    		</div>`;
		}

		//highlight current day
		highlight = '';
		if (row+1 == day) {
			highlight = 'highlight';
			timelineHtml = `<div class="timeline" style="width:${(100/24*hour)+(100/24/60*minute)}%; height:${(100/24*hour)+(100/24/60*minute)}%;"></div>`;
		}

		cellsString = `${cellsString}<div class="row ${highlight}">${zonesHtml}<div class="head-cell">${getDayName(row)}</div>`;
		for (let x = 0; x < width; x++){
			let textContent = '<span class="hour">'+(x<10?'0':'')+x+':00</span>';
			cellsString = `${cellsString}<div class="cell" time="${(x<10?'0':'')}${x}:00">${(row==0?textContent:'')}</div>`;
		}
		cellsString = `${cellsString}${timelineHtml}</div>`;
	}
	scedule.innerHTML = cellsString;
	//scedule.insertAdjacentHTML('beforeend', cellsString);
}

function getDayName(day) {
	return weekDayNames[day];

}