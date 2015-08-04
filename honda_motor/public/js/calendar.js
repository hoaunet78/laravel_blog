
var FootCalendar = function(){};

FootCalendar.isIE = Boolean(navigator.userAgent.match("MSIE"));

FootCalendar.init = function() {
	var container = document.getElementById("footer-calendar-area");
	var wrapper   = document.createElement("div");
	
	wrapper.id = "footer-calendar";
	container.appendChild(wrapper);
	
	this.createCalendar();
}


FootCalendar.createCalendar = function() {
	var group = document.createElement("div");
	group.id = "footer-calendar-group";
	
	var $date  = new Date();
	var $year  = $date.getFullYear();
	var $month = $date.getMonth();
	var dateLength = this.getDateLength($date);
	var $targetDate = new Date($year, $month, 1);
	
	var firstDay = $targetDate.getDay();
	var today    = $date.getDate();
	
	var head = document.createElement("div");
	head.id = "footer-calendar-head";
	this.createHeader(head, $month);
	
	var container = document.createElement("div");
	container.id = "footer-calendar-container";
	
	var table = document.createElement("table");
	table.id = "footer-calendar-table";
	table.cellPadding = 0;
	table.cellSpacing = 0;
	
	var i;
	var col = 0;
	var row = 0;
	var tr;
	var total_row;
	
	for(i=0; i<firstDay; i++) {
		if(col == 0) {
			tr = document.createElement("tr");
			table.appendChild(tr);
		}
		
		var td = document.createElement("td");
		td.className = "footer-calendar-cell-blank";
		td.innerHTML = "E";
		tr.appendChild(td);
		col++;
	}
	
	for(i=0; i<dateLength; i++) {
		if(col == 0) {
			tr = document.createElement("tr");
			table.appendChild(tr);
		}
		
		var td = document.createElement("td");
		var ref = document.createElement("a");
		ref.href = this.getChronicleRef($month, (i+1));
		ref.innerHTML = (i+1).toString();
		if(today == i+1) {
			td.className = "footer-calendar-cell-today";
		}
		if(col == 6) {
			td.className += " footer-calendar-cell-sat";
		}
		if(col == 0) {
			td.className += " footer-calendar-cell-sun";
		}
		
		if(i == dateLength - 1) {
			total_row = row + 1;
		}
		td.appendChild(ref);
		tr.appendChild(td);
		col++;
		if(col >= 7) {
			col = 0;
			row++;
		}
	}
	
	if(total_row == 6) {
		container.className = "footer-row-is-6";
	}
	
	if(col) {
		for(i=col; i<7; i++) {
			var td = document.createElement("td");
			td.className = "footer-calendar-cell-blank";
			td.innerHTML = "E";
			tr.appendChild(td);
		}
	}
	
	container.appendChild(table);
	group.appendChild(head);
	group.appendChild(container);
	
	var wrapper = document.getElementById("footer-calendar");
	
	if(this.isIE) {
		wrapper.innerHTML += group.outerHTML;
	}
	else {
		wrapper.appendChild(group);
	}
}


FootCalendar.getDateLength = function($date) {
	var year = $date.getFullYear();
	var month = $date.getMonth();
	if(month == 11) {
		year += 1;
		month = 0;
	}
	else {
		month += 1;
	}
	
	var d = new Date(year, month, 1);
	var lastDay = d.getTime() - (24 * 60 * 60 * 1000);
	var length = new Date(lastDay).getDate();
	
	return length;
}

FootCalendar.getChronicleRef = function($month, $date) {
	$month = ($month != 11) ? $month+1 : 12;
	var m = $month.toString();
	var d = $date.toString();
	if(m.length < 2) { m = "0" + m; }
	if(d.length < 2) { d = "0" + d; }
	
	var ref = "/chronicle/" + m + "/";
	if($date != 0) {
		ref += d + "/";
	}
	return ref
}

FootCalendar.createHeader = function($node, $month) {
	var ttl = document.createElement("p");
	var btn = document.createElement("a");
	btn.href = this.getChronicleRef($month, 0);
	btn.innerHTML = ($month + 1) + "ŒŽ";
	ttl.appendChild(btn);
	$node.appendChild(ttl);
}


FootCalendar.clear = function() {
	var wrapper = document.getElementById("footer-calendar");
	wrapper.innerHTML = "";
}



FootCalendar.init();

