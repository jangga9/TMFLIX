<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Add Season (Administrator)</title>
	<?php echo "<link rel='stylesheet' type='text/css' href='common_theme.css' />";?>
	<?php echo "<link rel='stylesheet' type='text/css' href='add_season.css' />";?>
</head>
<body>
	<div id="modal-bg" class="modal-bg">
		<div id="modal-content" class="modal-content"></div>
	</div>
	<?php include "page_header.php" ?>
	<?php include "create_series_page_navs.php" ?>
	<h2 class="page-title">
		Administrator - Add Season
	</h2>
    <div id="add-season-suggestions"></div>
	<form id='search-series-form' method='post'>
        <div class='field-block'>
            <p class='field-name'>Series Name:</p>
            <input id='search-series-name' name='search-series-name' type='text' oninput="findSeriesSuggestions(this)" placeholder='Series name...' required>
        </div>
        <div class='field-block field-space'>
            <button id="add-season-find-series-button" class="no-left-margin" type='button' onclick="findSeries()">Search</button>
        </div>
    </form>
    <div id='add-season-content'>
        <div id='search-result'>
            <img id='search-result-series-banner-image'>
            <div id='search-result-series-details'>
                <p id='search-result-series-name'></p>
                <p id='search-result-series-total-season'></p>
                <p id='search-result-total-series-episode'></p>
                <p id='search-result-series-rating'></p>
                <p id='search-result-series-release-date'></p>
                <p id='search-result-series-awards'></p>
                <p id='search-result-series-description'></p>
            </div>
        </div>
        <form id='add-season-form' method='post' class="field-space">
            <div class='field-block'>
                <p class='field-name'>Season Release Date:</p>
                <input id='add-season-season-release-date' name='add-season-season-release-date' type='date' required>
            </div>
            <div class='field-block field-space'>
                <button class="no-left-margin" type="button" onclick="addSeason()">Add Season</button>
            </div>
            <div class='field-block field-space'>
                <button class="no-left-margin" type="button" onclick="back()">Back</button>
            </div>
        </form>
    </div>
	<?php echo '<script type="text/javascript" src="add_season.js"></script>';?>
</body>
</html>