		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-23581568-13');

		$('.js-pscroll').each(function(){
			var ps = new PerfectScrollbar(this);

			$(window).on('resize', function(){
				ps.update();
			})
		});


		function highLowProjection(result){
			console.log("sample" + result[0]["date"]);
			$("#display-area").empty();
			var limiter = $("<div class='limiter'>");
			var container_table100 = $("<div class='container-table100'>");
			var wrap_table100 = $("<div style=\"width:540px;\" class='wrap-table100'>");

			var table100_ver1_m_b_110 = $("<div class='table100 ver1 m-b-110'>");
			var table100_head = $("<div class='table100-head'>");
			table100_head.append("<table><thead>" + "<tr class='row100 head'>");

			table100_head.append("<th class='cell100 column1' style=\"width:29%;\">Date</th>" +
				"<th  style=\"\" class='cell100 column2'>High</th>" +
				"<th style=\"width:8%;\" class='cell100 column3'>Low</th>" +
				"<th style=\"\" class='cell100 column4'>&nbsp;&nbsp;&nbsp;&nbsp;Ticker</th>"+
				"</tr>" +
				"</thead>" +
				"</table>");

			var table100_body_js_pscroll = $("<div class='table100-body js-pscroll'>");
			table100_body_js_pscroll.append("<table>" +
				"<tbody>");
			var i;
			for(i=0; i<result.length; i++){
				table100_body_js_pscroll.append("<tr class='row100 body'>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['date'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column2'>"+ result[i]['high'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column3'>"+ result[i]['low'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column4'>"+ result[i]['ticker'] + "</td>");
				table100_body_js_pscroll.append("</tr>");
			}
			table100_body_js_pscroll.append("</tbody>" + "</table>");

			table100_ver1_m_b_110.append(table100_head);
			table100_ver1_m_b_110.append(table100_body_js_pscroll);
			wrap_table100.append(table100_ver1_m_b_110);
			container_table100.append(wrap_table100);
			limiter.append(container_table100);

			$("#display-area").append(limiter);
		}

		function openCloseProjection(result){
			console.log("sample" + result[0]["date"]);
			$("#display-area").empty();
			var limiter = $("<div class='limiter'>");
			var container_table100 = $("<div class='container-table100'>");
			var wrap_table100 = $("<div style=\"width:610px;\" class='wrap-table100'>");

			var table100_ver1_m_b_110 = $("<div class='table100 ver1 m-b-110'>");
			var table100_head = $("<div class='table100-head'>");
			table100_head.append("<table><thead>" + "<tr class='row100 head'>");
			table100_head.append("<th class='cell100 column1' style=\"width:25%;\">Date</th>" +
				"<th  style=\"\" class='cell100 column2'>Open</th>" +
				"<th style=\"width:9%;\" class='cell100 column3'>Close</th>" +
				"<th style=\"\" class='cell100 column4'>&nbsp; &nbsp; &nbsp; Ticker</th>"+
				"</tr>" +
				"</thead>" +
				"</table>");
			var table100_body_js_pscroll = $("<div class='table100-body js-pscroll'>");
			table100_body_js_pscroll.append("<table>" +
				"<tbody>");
			var i;
			for(i=0; i<result.length; i++){
				table100_body_js_pscroll.append("<tr class='row100 body'>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['date'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column2'>"+ result[i]['open'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column3'>"+ result[i]['close'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column4'>"+ result[i]['ticker'] + "</td>");
				table100_body_js_pscroll.append("</tr>");
			}
			table100_body_js_pscroll.append("</tbody>" + "</table>");

			table100_ver1_m_b_110.append(table100_head);
			table100_ver1_m_b_110.append(table100_body_js_pscroll);
			wrap_table100.append(table100_ver1_m_b_110);
			container_table100.append(wrap_table100);
			limiter.append(container_table100);

			$("#display-area").append(limiter);

		}

		function fullProjection(result){
			$("#display-area").empty();

			console.log(result[0]['id']['ticker']);
			var limiter = $("<div class='limiter'>");
			var container_table100 = $("<div class='container-table100'>");
			var wrap_table100 = $("<div class='wrap-table100'>");

			var table100_ver1_m_b_110 = $("<div class='table100 ver1 m-b-110'>");
			var table100_head = $("<div class='table100-head'>");
			table100_head.append("<table><thead>" +
					"<tr class='row100 head'>");
			table100_head.append("<th class='cell100 column1' style=\"width:20%;\">Date</th>" +
					"<th  style=\"width:21%;\" class='cell100 column2'>Open</th>" +
					"<th style=\"width:21%;\" class='cell100 column3'>High</th>" +
					"<th style=\"width:13%;\" class='cell100 column4'>Low</th>" +
					"<th style=\"width:13%\" class='cell100 column5'>Close</th>" +
					"<th style=\"width:15%\" class='cell100 column6'>Adiclose</th>"+
					"<th style=\"\" class='cell100 column7'>Volume</th>"+
					"<th style=\"\" class='cell100 column8'>Ticker</th>"+
					"</tr>" +
					"</thead>" +
					"</table>");

			var table100_body_js_pscroll = $("<div class='table100-body js-pscroll'>");
			table100_body_js_pscroll.append("<table>" +
					"<tbody>");
			var i;
			for(i=0; i<result.length; i++){
				table100_body_js_pscroll.append("<tr class='row100 body'>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['id']['date'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['open'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['high'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['low']+ "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['close'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['adjclose'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['volume'] + "</td>");
				table100_body_js_pscroll.append("<td class='cell100 column1'>"+ result[i]['id']['ticker'] + "</td>");
				table100_body_js_pscroll.append("</tr>");
			}
			table100_body_js_pscroll.append("</tbody>" +
					"</table>");

			table100_ver1_m_b_110.append(table100_head);
			table100_ver1_m_b_110.append(table100_body_js_pscroll);
			wrap_table100.append(table100_ver1_m_b_110);
			container_table100.append(wrap_table100);
			limiter.append(container_table100);

			$("#display-area").append(limiter);
		}

		function highLowRequest(){
			var fromDate = $('#fromDate').val();
			var toDate =  $('#toDate').val();
			// Here, only one ticker name is allowed
			var tickers = $('#tickers').val();

			var request;

			if(fromDate!=null && toDate!=null && Date.parse(fromDate) && Date.parse(toDate))
				request = tickers + "?" + "fromDate=" + fromDate + "&" + "toDate=" + toDate;
			else if(fromDate!=null && Date.parse(fromDate))
				request = tickers + "?" + "fromDate=" + fromDate;
			else if(toDate!=null && Date.parse(toDate))
				request = tickers + "?" + "toDate=" + toDate;
			else
				request = tickers;

			console.log(request);
			$.ajax({
				type: "GET",
				url:"high_low_view/" + request,
				dataType : "json",
				contentType: "application/json; charset=utf-8",
				data : JSON.stringify(""),
				success: function(result){
					console.log("Success return!");
					console.log(result[0]);
					highLowProjection(result);
				},
				error: function(request, status, error){
					console.log("Error");
					console.log(request)
					console.log(status)
					console.log(error)
				}
			});

		}

		function openCloseRequest(){
			var fromDate = $('#fromDate').val();
			var toDate =  $('#toDate').val();
			// Here, only one ticker name is allowed
			var tickers = $('#tickers').val();

			var request;

			if(fromDate!=null && toDate!=null && Date.parse(fromDate) && Date.parse(toDate))
				request = tickers + "?" + "fromDate=" + fromDate + "&" + "toDate=" + toDate;
			else if(fromDate!=null && Date.parse(fromDate))
				request = tickers + "?" + "fromDate=" + fromDate;
			else if(toDate!=null && Date.parse(toDate))
				request = tickers + "?" + "toDate=" + toDate;
			else
				request = tickers;

			console.log(request);
			$.ajax({
				type: "GET",
				url:"open_close_view/" + request,
				dataType : "json",
				contentType: "application/json; charset=utf-8",
				data : JSON.stringify(""),
				success: function(result){
					console.log("Success return!");
					console.log(result[0]);
					openCloseProjection(result);
				},
				error: function(request, status, error){
					console.log("Error");
					console.log(request)
					console.log(status)
					console.log(error)
				}
			});

		}


		function tailRequest(){
			var ticker = $("#tickers").val();
			var num = $("#num").val();

			console.log(ticker);
			console.log(num);

			$.ajax({
				type: "GET",
				url: "tail/"+ ticker + "/" + num,
				dataType : "json",
				contentType: "application/json; charset=utf-8",
				data : JSON.stringify(""),
				success: function(result){
					console.log("Success return!");
					console.log(result[0]);
					fullProjection(result);
					drawChart(result);
				},
				error: function(request, status, error){
					console.log("Error");
					console.log(request)
					console.log(status)
					console.log(error)
				}
			});
		}

		function topRequest(){

			var ticker = $("#tickers").val();
			var num = $("#num").val();

			console.log(ticker);
			console.log(num);

			$.ajax({
				type: "GET",
				url: "top/"+ ticker + "/" + num,
				dataType : "json",
				contentType: "application/json; charset=utf-8",
				data : JSON.stringify(""),
				success: function(result){
					console.log("Success return!");
					console.log(result[0]);
					fullProjection(result);
				},
				error: function(request, status, error){
					console.log("Error");
					console.log(request)
					console.log(status)
					console.log(error)
				}
			});
		}

		function TopTailView(){

			$("#Date_box").empty();
			$("#Date_box").append("num: ");
			$("#Date_box").append("<input class='myinput' id='num'/><br><br>");
		}

		function OtherView(){
			$("#Date_box").empty();
			$("#Date_box").append("<label for=\"fromDate\">fromDate: </label><input class=\"myinput\" type=\"date\" id=\"fromDate\"\n" +
					"min=\"2010-01-01\" max=\"2020-12-31\">\n" +
					"<label for=\"toDate\">fromDate: </label><input class=\"myinput\" type=\"date\" id=\"toDate\"\n" +
					"min=\"2010-01-01\" max=\"2020-12-31\"><br>");
		}

		function defaultRequest(){
			var fromDate = $('#fromDate').val();
			var toDate =  $('#toDate').val();

			var tickers = $('#tickers').val().split(",");
			console.log("FromDate: " + fromDate);
			console.log("ToDate: " + toDate);

			var tickers_part="";
			var i;


			if(!Date.parse(fromDate))
				console.log("invalid fromDate");

			if(!Date.parse(toDate))
				console.log("invalid toDate");

			for (i = 0; i < tickers.length; i++) {
				if(i === tickers.length - 1)
				{
					tickers_part = tickers_part + tickers[i].trim()
				}
				else {
					tickers_part = tickers_part + tickers[i].trim() + ",";
				}
			}

			var request;
			console.log("tickers'list: " + tickers_part);

			if(fromDate!=null && toDate!=null && Date.parse(fromDate) && Date.parse(toDate))
				request = tickers_part + "?" + "fromDate=" + fromDate + "&" + "toDate=" + toDate;
			else if(fromDate!=null && Date.parse(fromDate))
				request = tickers_part + "?" + "fromDate=" + fromDate;
			else if(toDate!=null && Date.parse(toDate))
				request = tickers_part + "?" + "toDate=" + toDate;
			else
				request = tickers_part;

			console.log(request);

			$.ajax({
				type: "GET",
				url:"tickers/" + request,
				dataType : "json",
				contentType: "application/json; charset=utf-8",
				data : JSON.stringify(""),
				success: function(result){
					console.log("Success return!");
					console.log(result[0]);
					fullProjection(result);
				},
				error: function(request, status, error){
					console.log("Error");
					console.log(request)
					console.log(status)
					console.log(error)
				}
			});

		}

		$(document).ready(function(){

			$("#login_button").click(function(){
				console.log("Press Go!");

				if($('#default').prop('checked')){
					console.log('Button clicked, default is checked!');
					defaultRequest();
				}else if($('#high_low').prop('checked')){
					console.log('Button clicked, high_low is checked!');
					highLowRequest();
				}else if($('#open_close').prop('checked')){
					console.log('Button clicked, open_close is checked!');
					openCloseRequest();
				}else if($('#top').prop('checked')){
					console.log('Button clicked, top is checked!')
					topRequest();
				}else if($('#tail').prop('checked')){
					console.log('Button clicked, tail is checked!')
					tailRequest();
				}

			});


			$('input[name="view"]').change(function(){

				if($('#default').prop('checked')){
					console.log('Default is checked!');
					OtherView();
				}else if($('#high_low').prop('checked')){
					console.log('High_low is checked!');
					OtherView();
				}else if($('#open_close').prop('checked')){
					console.log('Open_close is checked!');
					OtherView();
				}else if($('#top').prop('checked')){
					console.log('Top is checked!')
					TopTailView();
				}else if($('#tail').prop('checked')){
					console.log('Tail is checked!')
					TopTailView();
				}

			});

		});